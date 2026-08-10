// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/industries cloud/img-0.png';
import img2 from '../../../assets/imgs/services-details-2/industries cloud/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/industries cloud/img-3.png';
import img4 from '../../../assets/imgs/services-details-2/industries cloud/img-4.png';
import img5 from '../../../assets/imgs/services-details-2/industries cloud/img-5.png';
import img6 from '../../../assets/imgs/services-details-2/industries cloud/img-1.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';

import S_rightContainer from '../../HigherEducation/S_rightContainer/S_rightContainer';
import IndustriesCloudAccordionData from '../IndustriesCloudAccordionData/IndustriesCloudAccordionData';
import ServiceSidebar from '../../ServiceSidebar/ServiceSidebar';

function IndustriesCloud_Second() {
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


                            <h4 className="my-3">Unlock Industry-Specific Success with Salesforce Industries Cloud</h4>
                            <p className="mb-0">At Codm Software UK, we help businesses across the UK accelerate digital transformation with Salesforce Industries Cloud (formerly Vlocity). Tailored to meet the unique needs of different sectors, Industries Cloud delivers industry-specific data models, processes, and workflows—so you can get to market faster and innovate with confidence.Salesforce Industries Cloud (formerly Vlocity) is a powerful solution that combines the flexibility of Salesforce with industry-specific capabilities. It provides pre-built data models, workflows, and user interfaces tailored to various sectors, including healthcare, financial services, communications, and more. This allows businesses to quickly implement solutions that meet their unique requirements while leveraging the scalability and security of the Salesforce platform.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Implementation & Configuration</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Data Migration & Integration</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Customization with OmniStudio</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Managed Services & Support</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Compliance-Ready Solutions</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Automation at Scale</span>
                                    </li>
                                </ul>
                            </div>


                            {/*new */}

                            <h4 className="mb-3 mt-1">What is Salesforce Industries Cloud?</h4>
                            <p className='mb-4'>Salesforce Industries Cloud is a suite of pre-built industry solutions built on the Salesforce platform. It brings powerful capabilities like OmniStudio, industry-specific data models, and process libraries to deliver faster time-to-value. This cloud is designed to help companies provide better customer experiences, boost operational efficiency, and stay compliant with industry regulations.</p>

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
                                            <h4 className='font-20'>Industry Expertise</h4>
                                            <p>
                                                We specialize in deploying Salesforce solutions for industries like telecom, healthcare, financial services, and more.
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
                                            <h4 className='font-20'>Certified Salesforce Developers & Architects</h4>
                                            <p>
                                                Our team is Salesforce-certified and experienced in complex Salesforce Industries implementations.
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
                                            <h4 className='font-20'>Proven Methodology</h4>
                                            <p>
                                                We follow a structured approach to ensure successful Salesforce Industries Cloud implementations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                               
                            </div>

                            {/* next div */}
                            <div className='border-bottom'>
                              <h4 className="mt-5 pt-4 border-top mb-3">OmniStudio: Visual Tools for Business Automation</h4>
                            <p className="mb-3">
                                With Industries Cloud, you gain access to OmniStudio, a set of configuration-based tools that lets you design customer experiences, automate logic, and integrate with external systems—all without deep coding.<br/>
                                From guided workflows (OmniScripts) to dynamic UI components (FlexCards), OmniStudio allows you to quickly deploy complex business processes specific to your sector.
                            </p>

                            <img class="rounded-3 mt-3 w-100" src={img2} alt="Codm" width={"80%"}/>
                            </div>

                            {/*  */}

                            <div className='border-bottom'>
                              <h4 className="mt-3 pt-4 mb-3">Industry-Specific Data Models</h4>
                            <p className="mb-3">
                                Every industry has unique processes and compliance requirements. That's why Salesforce Industries Cloud comes with pre-built data models tailored for verticals like telecom, healthcare, financial services, and energy.
                            </p>

                            <img class="rounded-3 mt-3 " src={img3} alt="Codm" width={"80%"} height={'301px'}/>
                            </div>

                            {/*  */}

                              <div className='border-bottom'>
                              <h4 className="mt-3 pt-4 mb-3">Compliance and Regulatory Readiness</h4>
                            <p className="mb-3">
                                Whether it's GDPR, HIPAA, FCA, or CQC—Industries Cloud helps your business meet industry-specific regulations with secure, compliant, and auditable data handling. The platform provides built-in access control, validation logic, and audit trails to support secure, compliant operations.
                            </p>

                            <img class="rounded-3 mt-3 " src={img4} alt="Codm" width={'80%'} height={'301px'}/>
                            </div>

                            {/*  */}
                            <div className=''>
                              <h4 className="mt-3 pt-4 mb-3">Seamless Customer Journeys</h4>
                            <p className="mb-3">
                               Using Industries Cloud, you can create connected customer journeys across departments, products, and channels. From onboarding to service requests and case handling—everything is managed through a unified platform with automation at every step.This connected experience improves customer satisfaction and reduces service delivery times across industries.
                            </p>

                            <img class="rounded-3 mt-3 " src={img5} alt="Codm" width={'80%'} height={'301px'}/>
                            </div>


                            {/* Accordion */}


                            {/* <S_thirdSection/> */}

                            <IndustriesCloudAccordionData/>



                            {/* main div end */}
                        </div>


                        {/* right container */}

                        <div className="col-lg-4 sidebar">

                             {/* <S_rightContainer /> */}
                            <ServiceSidebar/>
                            
                               <div className="zoom-img mt-5 rounded-4">
                                 <img src={img6} className="" width={'100%'}/>
                                </div>
                            

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default IndustriesCloud_Second;