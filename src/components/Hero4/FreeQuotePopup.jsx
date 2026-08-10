
import React, { useState ,useEffect} from "react";
import "./FreeQuotePopup.css";

const FreeQuotePopup = ({ isOpen, onClose }) => {
    const [service, setService] = useState("");
    const [technology, setTechnology] = useState("");
    const [submitted, setSubmitted] = useState(false);
    

    const optionsMap = {
        Development: [
            "CRM Development",
            "Building LLM",
            ".NET Application",
            "React Application",
            "Python Application",
        ],
        CRM: ["Salesforce", "Custom CRM"],
        Integration: ["API Integration", "Data Migration", "Data Integration"],
        Support: ["Technical Support", "Deployment Support"],
    };


    useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
      setSubmitted(false); 
      onClose();          
    }, 1000); 
    return () => clearTimeout(timer);
  }
}, [submitted, onClose]);


    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            onClose();
            setSubmitted(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const form = e.target;
        const formData = new URLSearchParams(new FormData(form)).toString();

        fetch(form.action, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });
        setSubmitted(true);
        form.reset();
        setService("");
        setTechnology("");
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay active" onClick={handleOverlayClick}>
            <div className="popup-container">
                <div className="popup-header">
                    <button className="popUpclose-btn" onClick={onClose}>
                        &times;
                    </button>
                   
                </div>

                <div className="popup-body">
                    {!submitted ? (
                        <>
                    <h3 className="text-center text-white">Get Your Free Quote</h3>
                    <p className="text-center text-white">
                        Tell us about your project and we'll get back to you within 24 hours
                    </p>
                        <form
                            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000rsAL"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="oid" value="00DAe000009CRc3"/>
                            <input
                                type="hidden"
                                name="retURL"
                                value="http://www.codmsoftware.co.uk"
                            />

                            {/* First & Last Name */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        First Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="John"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="form-row">
                                <div className="form-group mt-2 m-sm-0">
                                    <label>
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group mt-2 m-sm-0">
                                    <label>
                                        Phone Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+44 7XXX XXXXXX"
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>

                            {/* Services */}
                            <div className="form-row formSelect full-width mt-4 mt-md-2">
                                <select
                                    required
                                    value={service}
                                    onChange={(e) => {
                                        setService(e.target.value);
                                        setTechnology("");
                                    }}
                                >
                                    <option value="">Services</option>
                                    <option value="CRM">CRM</option>
                                    <option value="Development">Development</option>
                                    <option value="Integration">Integration</option>
                                    <option value="Support">Support</option>
                                </select>

                                <select
                                    required
                                    value={technology}
                                    onChange={(e) => setTechnology(e.target.value)}
                                    disabled={!service}
                                >
                                    <option value="">
                                        {service
                                            ? "Select Technology"
                                            : "Select Service First"}
                                    </option>
                                    {service &&
                                        optionsMap[service].map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Project Details */}
                            <div className="form-group full-width mt-4 mt-md-2">
                                <label>
                                    Project Details <span className="required">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn mt-4 m-md-0"
                            >
                                Submit Quote Request
                            </button>
                        </form>
                        </>
                    ) : (
                        <div className="success-message active">
                            <div className="success-icon">✓</div>
                         
                             <h3>Thank You!</h3>
                            <p>
                                Your quote request has been received. Our team will review
                                your requirements and get back to you within 24 hours.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreeQuotePopup;