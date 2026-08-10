// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img2 from '../../../assets/imgs/services-details-2/Financial-Cloud/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/Education-Cloud/img-4.png';

// component img

import checkImg from '../../../assets/imgs/services-details/check.svg';
import img1 from '../../..//assets/imgs/services-details-2/Financial-Cloud/img-1.jpg';

// components
import FinancialServiceAccordionData from '../FinancialServiceAccordionData/FinancialServiceAccordionData';
import S_rightContainer from '../../HigherEducation/S_rightContainer/S_rightContainer';
import ServicePageContentSection from '../../ui/ServicePageContentSection/ServicePageContentSection';
import ServiceSidebar from '../../ServiceSidebar/ServiceSidebar';


function FinancialServiceCloud_Second() {
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
                            <h4 className="my-3">Salesforce Financial Cloud Services</h4>
                            <p className="mb-0">Salesforce Financial Services Cloud (FSC) is a purpose built CRM platform designed for the financial services industry. It provides banks, insurance providers, wealth managers, and fintech companies with a 360 degree view of their clients, helping them build deeper relationships, manage financial goals, streamline operations, and ensure compliance all in one secure, unified platform. Codm's Salesforce Financial Cloud is tailored to meet the unique needs of financial institutions, enabling them to leverage data-driven insights, automate workflows, and enhance customer engagement. <span className="text-900 fw-bold">
                                    Codm's Salesforce Education Cloud services
                                </span>{"   "}
                                Built on the robust Salesforce platform, Education Cloud enables
                                institutions to deliver connected and personalized experiences
                                across every touchpoint in a student's journey.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Client 360 View</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Relationship Management</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Action Plans & Workflows</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Financial Goal Tracking</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Client Interaction Tracking</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Regulatory Compliance Tools</span>
                                    </li>
                                </ul>
                            </div>
                            {/*new */}

                            <h4 className="mb-3 mt-1">What is Salesforce Financial Services Cloud?</h4>
                            <p className='mb-4'>Salesforce Financial Services Cloud (FSC) is a purpose built CRM platform designed for the financial services industry. It provides banks, insurance providers, wealth managers, and fintech companies with a 360 degree view of their clients, helping them build deeper relationships, manage financial goals, streamline operations, and ensure compliance all in one secure, unified platform. FSC brings the full power of the Salesforce ecosystem to financial services, combining data, AI, and automation to deliver personalized client experiences at scale.</p>

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
                                            <h4 className='font-20'>Client 360 View</h4>
                                            <p>
                                                Unified dashboard displaying financial accounts, goals, life events, and interactions for individuals and households.
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
                                            <h4 className='font-20'>Action Plans & Workflows</h4>
                                            <p>
                                                Automate processes like onboarding, risk profiling, and service tracking with built-in templates.
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
                                            <h4 className='font-20'>Advising & Engagement</h4>
                                            <p>
                                                Coordinate academic advising and student support across
                                                departments to improve outcomes.
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
                            <h4 className="mt-5 pt-4 border-top mb-3">Why Businesses Use Financial Services Cloud?</h4>
                            <p className="mb-3">
                                Traditional CRMs weren’t built to handle the complexities of financial relationships. Salesforce Financial Services Cloud fills this gap by offering.
                            </p>


                            <p className="fw-bold text-900">
                                Client 360 View:{" "}
                                <span className="fw-medium text-600">
                                    Unified dashboard displaying financial accounts, goals, life events, and interactions for individuals and households.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Relationship Management:{" "}
                                <span className="fw-medium text-600">
                                    Visualize complex relationships between clients, households, businesses, and advisors.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Action Plans & Workflows:{" "}
                                <span className="fw-medium text-600">
                                    Automate processes like onboarding, risk profiling, and service tracking with built-in templates.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Financial Goal Tracking:{" "}
                                <span className="fw-medium text-600">
                                    Align client conversations with life goals like retirement, education, or wealth preservation.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Client Interaction Tracking: {" "}
                                <span className="fw-medium text-600">
                                    Capture emails, meetings, and touchpoints in one place to improve compliance and service consistency.
                                </span>
                            </p>


                            {/* Accordion */}


                            {/* <S_thirdSection/> */}

                            <FinancialServiceAccordionData />



                            {/* main div end */}
                        </div>


                        {/* right container */}

                        <div className="col-lg-4 sidebar">

                            {/* // <S_rightContainer /> */}
                            <ServiceSidebar/>

                            <div className="zoom-img mt-5 rounded-4">
                                    <img src={img3} className="" width={'100%'}/>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default FinancialServiceCloud_Second;