import './Hero1.css';

function Hero1() {
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Left Side: CRM Content */}
                        <div className="col-12 col-md-6">
                            <h3 className="mb-3 fs-sm-2 text-center text-sm-start Heading3">What is CRM?</h3>
                            <p className="text-gray-600 text-center text-sm-start">
                                CRM (Customer Relationship Management) is a system that helps
                                businesses manage customer data, interactions, and relationships
                                throughout the entire customer lifecycle. It enables companies
                                to improve customer satisfaction, increase sales, and build
                                long term relationships.
                             </p>
                            <p className="text-gray-600 text-center text-sm-start">
                                A CRM works by collecting customer information from multiple
                                channels such as websites, emails, calls, and social media, and
                                storing it in one centralized platform that teams can easily
                                access.
                            </p>
                        </div>


                        {/* Right Side: Video */}
                        <div className="col-12 col-md-6">
                            <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
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
            </section>
        </>
    )
}

export default Hero1
