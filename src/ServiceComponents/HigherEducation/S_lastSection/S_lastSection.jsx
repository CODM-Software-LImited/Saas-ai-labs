import './S_lastSection.css';
import whatsappIcon from '../../../assets/imgs/contact-2/icon-1.svg';
import emailIcon from '../../../assets/imgs/contact-2/icon-4.svg';
import phoneIcon from '../../../assets/imgs/contact-2/icon-5.svg';
const S_lastSection = () => {
    return (
        <section className="S_lastSectionConatiner position-relative p-lg-5 p-2 mt-5">
            <div className="container position-relative z-1">

                <div className="S_lastSectionDiv text-center">
                    <h5 className=''>
                        Thinking about a project? <br className="d-md-block d-none" />
                        Get in touch with us.
                    </h5>
                    <span>
                        Connect with Us Today through the Details Below or Fill <br className="d-md-block d-none" />
                        Out the Form for a Prompt Response
                    </span>
                </div>

                <div className="S_lastSectionFormSection row mt-8">
                    <div className="col-lg-10 mx-lg-auto">
                        <div className="row">
                            {/* Form Section */}
                            <div className="S_lastSectionForm col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                                <h4>Leave a message</h4>
                                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000rsAL" method="post">
                                    <input type="hidden" name="oid" value="00DgD000000rsAL" />
                                    <input type="hidden" name="retURL" value="https://codmsoftware.co.uk/SalesforceCRM.html" />
                                    <div className="row mt-5">
                                        {/* Name */}
                                        <div className="col-md-6">
                                            <div className="input-group custom-input-group rounded-2">
                                                <div className="icon-input ps-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    className="form-control border-0 shadow-none"
                                                    placeholder="Your name *"
                                                    aria-label="username"
                                                    type="text"
                                                    name="first_name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <div className="input-group custom-input-group rounded-2">
                                                <div className="icon-input ps-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    className="form-control border-0 shadow-none"
                                                    placeholder="info@ *"
                                                    aria-label="email"
                                                    type='email'
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <div className="input-group custom-input-group rounded-2">
                                                <div className="icon-input ps-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    className="form-control border-0 shadow-none"
                                                    placeholder="Phone *"
                                                    aria-label="phone"
                                                    type="text"
                                                    name="Phone"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="col-md-6">
                                            <div className="input-group custom-input-group rounded-2">
                                                <div className="icon-input ps-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    className="form-control border-0 shadow-none"
                                                    placeholder="Subject"
                                                    aria-label="subject"
                                                    type="text"
                                                    name="Subject"
                                                />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="col-12">
                                            <div className="input-group custom-input-group rounded-2 d-flex align-items-start">
                                                <div className="icon-input d-flex ps-3 pt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344Z" fill="black" />
                                                    </svg>
                                                </div>
                                                <textarea
                                                    className="form-control border-0 shadow-none"
                                                    name="description"
                                                    placeholder="Describe Your Project in Short"
                                                    rows="6"
                                                ></textarea>
                                            </div>
                                        </div>
                                        {/* Submit Button */}
                                        <div className="col-12 hover-up sendBtn">
                                            <button type="submit" name="submit" className="customHoveBg btn purple-bg mt-4 p-3 hover-up">
                                                Send Message
                                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="S_lastSectionContactInfoContainer col-lg-6">
                                <div className="S_lastSectionContactInfo ps-lg-6">
                                    <h6>Chat with us</h6>
                                    <p className="text-500">The support team is always available 24/7</p>
                                    <div className="ContactInfoImg d-flex mb-2">
                                        <img src={whatsappIcon} alt="Codm" />
                                        <a className="ms-2 text-decoration-underline text-900 fs-7 black-text" href="https://wa.me/+4407436934216" target="_blank">
                                            Chat via Whatsapp
                                        </a>
                                    </div>

                                    <h6>Send us an email</h6>
                                    <p className="text-500">Our team will respond promptly to your inquiries</p>
                                    <div className="d-flex mb-2">
                                        <img src={emailIcon} alt="Codm" />
                                        <a className="ms-2 text-decoration-underline text-900 fs-7 black-text" href="mailto:info@codmsoftware.co.uk">
                                            info@codmsoftware.co.uk
                                        </a>
                                    </div>

                                    <h6>For more inquiry</h6>
                                    <p className="text-500">Reach out for immediate assistance</p>
                                    <div className="d-flex mb-2">
                                        <img src={phoneIcon} alt="Codm" />
                                        <a className="ms-2 text-decoration-underline text-900 fs-7 black-text" href="tel:(+44) 0121 818 6924">
                                            (+44) 0121 818 6924
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default S_lastSection;