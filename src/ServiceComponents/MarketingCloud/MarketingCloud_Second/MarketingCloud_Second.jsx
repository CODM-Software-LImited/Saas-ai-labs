// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// // imgs
import img1 from '../../../assets/imgs/services-details-2/MarketingCloud/img-1.png';
import img2 from '../../../assets/imgs/services-details-2/MarketingCloud/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/datacloud/img-3.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';

import S_rightContainer from '../../HigherEducation/S_rightContainer/S_rightContainer';
import ServiceSidebar from '../../ServiceSidebar/ServiceSidebar';
// import DataCloudAccordionData from '../DataCloudAccordionData/DataCloudAccordionData';

function MarketingCloud_Second() {
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


                            <h4 className="my-3">Salesforce Marketing Cloud Services</h4>
                            <p className="mb-0">Salesforce Marketing Cloud is a comprehensive digital marketing platform designed to personalize every customer interaction across various channels. It enables businesses to deliver targeted messages through email, social media, SMS, and more, ensuring a cohesive customer journey. <b>Codm's Salesforce Marketing Cloud services </b>help businesses harness the full potential of this platform, optimizing their marketing strategies and enhancing customer engagement.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3 border-bottom">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Sales Agreements Management</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Account-Based Forecasting</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Integration with ERP Systems</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Collaboration Tools</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Analytics and Reporting</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Data-Driven Decisions</span>
                                    </li>
                                </ul>
                            </div>


                            {/*new */}

                            <h4 className="mb-3 mt-1">What Is a Salesforce Marketing Cloud?</h4>
                            <p className='mb-4'>Salesforce Marketing Cloud (SFMC) is a leading digital marketing platform that empowers businesses to create highly personalized customer experiences at scale. From email marketing and social media engagement to customer journey management and real-time analytics, Marketing Cloud offers an integrated suite of tools designed to build relationships and increase ROI across every stage of the customer lifecycle. Whether you're a small business or a global enterprise, Marketing Cloud helps you connect with your audience in meaningful ways—on the right channel, at the right time, with the right message.</p>

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
                                            <h4 className='font-20'>Personalized Customer Experiences</h4>
                                            <p>
                                                SFMC allows you to tailor every interaction using detailed customer data and AI-powered insights from Salesforce Einstein
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
                                            <h4 className='font-20'>Omnichannel Engagement</h4>
                                            <p>
                                             Engage your customers across email, SMS, social media, and advertising platforms—while maintaining a consistent message and brand voice.
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
                                            <h4 className='font-20'>Real-Time Campaign Automation</h4>
                                            <p>
                                               Trigger emails, texts, or ads based on real-time customer actions like purchases, website visits, or form submissions.
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
                              <h4 className="mt-5 pt-4 border-top mb-3">Why Businesses Use Salesforce Marketing Cloud</h4>
                              <p className='mb-3'>
                               In today's digital landscape, customers expect relevant, personalized interactions. Traditional one-size-fits-all campaigns no longer deliver results. Salesforce Marketing Cloud changes that by enabling you to.  
                              </p>
                              <p><b>Personalized Customer Experiences: </b>directly within Sales, Service, Marketing, and Commerce.</p>
                              <p><b>Driving personalization at scale:</b>with unified customer profiles (CDP).</p>
                              <p><b>Automating journeys and campaigns:</b>with Einstein + Flow. </p>
                            </div>

                            {/* Accordion */}

                            {/* <DataCloudAccordionData/> */}

                            {/* main div end */}
                        </div>


                        {/* right container */}

                        <div className="col-lg-4 sidebar">

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

export default MarketingCloud_Second;
