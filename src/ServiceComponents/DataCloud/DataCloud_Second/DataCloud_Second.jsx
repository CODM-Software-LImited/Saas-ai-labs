// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// // imgs
import img1 from '../../../assets/imgs/services-details-2/datacloud/img-1.webp';
import img2 from '../../../assets/imgs/services-details-2/datacloud/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/datacloud/img-3.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';

import S_rightContainer from '../../HigherEducation/S_rightContainer/S_rightContainer';
import DataCloudAccordionData from '../DataCloudAccordionData/DataCloudAccordionData';
import ServiceSidebar from '../../ServiceSidebar/ServiceSidebar';
// import IndustriesCloudAccordionData from '../IndustriesCloudAccordionData/IndustriesCloudAccordionData';

function DataCloud_Second() {
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


                            <h4 className="my-3">Salesforce Data Cloud + AI: Powering Smarter Education</h4>
                            <p className="mb-0">Empower your institution with the next generation of AI and real-time data. Salesforce Data Cloud + AI brings together every student interaction, system, and insight—so you can deliver personalized experiences, smarter engagement, and accelerated outcomes.<b>Salesforce Data Cloud + AI </b> is designed to help educational institutions harness the power of AI and real-time data to create personalized learning experiences, enhance student engagement, and drive better outcomes.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3 border-bottom">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Real-Time 360° Learner Profiles</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">AI-Driven Engagement & Outreach</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Dynamic Dashboards & Predictive Analytics</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Automate Student Journeys with Intelligence</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Trusted, Scalable, and Secure</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Enhanced Retention, Satisfaction, and ROI</span>
                                    </li>
                                </ul>
                            </div>


                            {/*new */}

                            <h4 className="mb-3 mt-1">What is Salesforce Data Cloud ?</h4>
                            <p className='mb-4'>Salesforce Data Cloud is a real-time, hyperscale customer data platform (CDP) built directly into the Salesforce ecosystem. It allows organizations to collect, harmonize, and unify massive volumes of data from disparate systems—such as CRM platforms, ERP software, mobile apps, websites, social media, POS systems, and third-party sources—into a single, dynamic view of each individual customer. This enables brands to eliminate data silos, reduce manual reconciliation, and create a 360-degree profile for every customer, prospect, or partner across the entire business lifecycle.</p>

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
                                            <h4 className='font-20'>Real-Time 360° Learner Profiles</h4>
                                            <p>
                                                Break down silos and unify student data across admissions, academics, finance, and support into a single, real-time profile.
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
                                            <h4 className='font-20'>AI-Driven Engagement & Outreach</h4>
                                            <p>
                                              Use AI to drive meaningful student connections at scale. From predictive enrollment insights to personalized nudges and outreach, Einstein AI helps you stay proactive, not reactive.
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
                                            <h4 className='font-20'>Dynamic Dashboards & Predictive Analytics</h4>
                                            <p>
                                               Make data-informed decisions with real-time dashboards, intelligent trend analysis, and forecasted performance metrics—right where your teams work.
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
                            <div className=''>
                              <h4 className="mt-5 pt-4 border-top mb-3">Unlocking Real-Time Intelligence at Scale: Salesforce Data Cloud + CRM</h4>
                              <p className='mb-3'>
                               <b>Unifying customer data in real time:</b> from web, mobile, IoT, ERP, and offline sources.   
                              </p>
                              <p><b>Activating AI-powered insights:</b>directly within Sales, Service, Marketing, and Commerce.</p>
                              <p><b>Driving personalization at scale:</b>with unified customer profiles (CDP).</p>
                              <p><b>Automating journeys and campaigns:</b>with Einstein + Flow. </p>
 
                            </div>

                            {/* Accordion */}

                            <DataCloudAccordionData/>

                            {/* main div end */}
                        </div>


                        {/* right container */}

                        <div className="col-lg-4 sidebar">

                             {/* <S_rightContainer /> */}
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

export default DataCloud_Second;