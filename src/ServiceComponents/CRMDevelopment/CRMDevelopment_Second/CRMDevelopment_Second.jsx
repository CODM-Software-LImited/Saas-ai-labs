// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/Salesforce-Integration-scaled.jpg';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';
import CRMDevelopmentAccodionData from '../CRMDevelopmentAccodionData/CRMDevelopmentAccodionData';

function CRMDevelopment_Second() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row pt-1">
                        {/* Main content */}
                        {/* left container  */}

                        <div className="col-lg-8 pt-1 ps-lg-4 mt-lg-0 mt-3 content pt-5">

                            <img
                                className="rounded-3"
                                src={img1}
                                alt="Codm"
                                width={'100%'}
                            />


                            <h4 className="my-3">Drive Business Growth with Salesforce CRM</h4>
                            <p className="mb-0">At Codm, we empower businesses to transform their customer relationships, streamline operations, and boost revenue using Salesforce — the world’s #1 CRM platform. Whether you're a small business or a global enterprise, our Salesforce CRM services are tailored to help you unlock the full potential of your customer data and workflows. <b>Our innovative business</b> services are designed to help you navigate the complexities of the modern marketplace, leveraging cutting-edge technology and forward-thinking strategies to transform your operations and achieve your goals. We implement intelligent automation tools tailored to your specific needs.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Customer Journey Mapping</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Customer Feedback Systems</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Sustainable Business Practices</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Corporate Social Responsibility</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Ideation and Concept</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Intellectual Property</span>
                                    </li>
                                </ul>
                            </div>


                            {/*new */}

                            <h4 className="mb-3 mt-1">What is Salesforce CRM?</h4>
                            <p className='mb-4'>Salesforce CRM (Customer Relationship Management) is a cloud-based platform that enables businesses to manage sales, marketing, customer service, and more—all in one place. With powerful automation, analytics, and integration capabilities, Salesforce helps you nurture leads, close deals faster, and deliver personalized customer experiences.</p>

                            {/* content */}


                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="d-flex">
                                        <div className="position-relative icon-shape icon-xxl rounded-3">
                                            <div className="S_secondLineImg">
                                                <img src={icon1} alt="Codm" />
                                                <span className="customLine"></span>
                                            </div>
                                        </div>
                                        <div className="ps-5">
                                            <h4 className='font-20'>Market Analysis and Insights</h4>
                                            <p>
                                                Gain a deep understanding of your industry
                                                and competitors with our comprehensive
                                                market analysis.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3">
                                        <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                            <div className="S_secondLineImg">
                                                <img src={icon2} alt="Codm" />
                                                <span className="customLine"></span>
                                            </div>
                                        </div>
                                        <div className="ps-5">
                                            <h4 className='font-20'>Business Model Innovation</h4>
                                            <p>
                                                We assist in redefining your business model
                                                to align with current market trends and
                                                future demands
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3">
                                        <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                            <div className="S_secondLineImg">
                                                <img src={icon3} alt="Codm" />
                                                <span className="customLine"></span>
                                            </div>
                                        </div>
                                        <div className="ps-5">
                                            <h4 className='font-20'>Change Management</h4>
                                            <p>
                                                Successfully manage organizational change with
                                                our expert guidance. We help you navigate
                                                transitions smoothly
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-lg-5 mt-lg-0 mt-5">
                                    <img
                                        className="rounded-3"
                                        src={img2}
                                        width={'100%'}
                                        alt="Codm"
                                    />
                                </div>

                            </div>

                            {/* next div */}
                            <h4 className="mt-3 pt-3 border-top mb-3">Financial Services: Enhancing Client Relationships and Compliance</h4>
                            <p className="mb-3">
                               In the financial sector, Salesforce CRM facilitates.
                            </p>

                            <p className="fw-bold text-900">
                                Personalized Client Engagement:{" "}
                                <span className="fw-medium text-600">
                                   Foster a culture of innovation within your organization. We facilitate ideation sessions and help you develop viable concepts that can be turned into profitable ventures.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Risk Management:{" "}
                                <span className="fw-medium text-600">
                                      Integrating risk assessment tools to proactively manage financial risks.Protect your innovations with our comprehensive IP management services. From patent filing to trademark registration, we safeguard your intellectual assets.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Enhanced Performance:{" "}
                                <span className="fw-medium text-600">
                                    Migrating to optimized systems improves data processing speeds and reliability.
                                </span>
                            </p>


                            {/* next */}
                              <h4 className="mt-3 pt-3 border-top mb-3">Healthcare: Streamlining Patient Care and Data Management</h4>

                            <p className="fw-bold text-900">
                                Patient-Centric Services:{" "}
                                <span className="fw-medium text-600">
                                   Centralizing patient information for coordinated and personalized care.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Appointment Scheduling:{" "}
                                <span className="fw-medium text-600">
                                      Automating scheduling processes to improve efficiency.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                               Data Security:{" "}
                                <span className="fw-medium text-600">
                                    Ensuring patient data privacy and compliance with health regulations.
                                </span>
                            </p>


                            {/* Accordion */}

                            {/* <DataIntegrationAccodionData/> */}
                           <CRMDevelopmentAccodionData/>


                            {/* main div end */}
                        </div>


                        {/* right container */}

                        <div className="col-lg-4 sidebar">

                            <S_rightSidebarDataDevelopment />

                            <div className="zoom-img mt-5 rounded-4">
                                <img src={img3} className="" width={'100%'} />
                            </div>
                            
                            
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CRMDevelopment_Second;