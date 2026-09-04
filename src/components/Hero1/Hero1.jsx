import DotBtn from '../../utils/Dotbtn/Dotbtn';
import './Hero1.css';

function Hero1() {
    return (
        <section className="crm-explainer">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Side: CRM Content */}
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center justify-content-sm-start">
                            <DotBtn text="Learn The Basics" />
                        </div>
                        <h2 className="Heading3 mt-3 mb-3 text-center text-sm-start">What is CRM?</h2>
                        <p className="crm-explainer-text text-center text-sm-start">
                            CRM (Customer Relationship Management) is a system that helps
                            businesses manage customer data, interactions, and relationships
                            throughout the entire customer lifecycle. It enables companies
                            to improve customer satisfaction, increase sales, and build
                            long term relationships.
                        </p>
                        <p className="crm-explainer-text text-center text-sm-start">
                            A CRM works by collecting customer information from multiple
                            channels such as websites, emails, calls, and social media, and
                            storing it in one centralized platform that teams can easily
                            access.
                        </p>
                    </div>

                    {/* Right Side: Video */}
                    <div className="col-12 col-md-6">
                        <div className="crm-explainer-video">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/SlhESAKF1Tk?si=fH1xomNovAMu9DyM"
                                    title="CRM Explained"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero1
