// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/DOTNET-Application/img-1.png';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';
import DotNetApplicationAccodionData from '../DotNetApplicationAccodionData/DotNetApplicationAccodionData';

function DotNetApplication_Second() {
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

                            <h4 className="my-3">Build Scalable, Secure, and High-Performance Applications with Microsoft .NET</h4>
                            <p className="mb-0">At Codm, we specialize in delivering cutting-edge .NET application development services tailored to meet the dynamic needs of modern businesses. Whether you need a custom enterprise solution, cloud-based application, or a cross-platform mobile app, our experienced .NET developers are equipped to turn your vision into reality.Our innovative business services are designed to help you navigate the complexities of the modern marketplace, leveraging cutting-edge technology and forward-thinking strategies to transform your operations and achieve your goals. We implement intelligent automation tools tailored to your specific needs.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Custom .NET Application Development</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Web Application Development </span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Enterprise Solutions</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">.NET Migration & Modernization</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">API & Microservices Development</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Cloud-Based .NET Development</span>
                                    </li>
                                </ul>
                            </div>

                            {/*new */}

                            <h4 className="mb-3 mt-1">What is .NET Application?</h4>
                            <p className='mb-4'>A .NET application is a software program developed using Microsoft's .NET framework or its modern, cross-platform successor, .NET Core / .NET 5+. It can be a web, desktop, mobile, cloud, or API-based application, written primarily in languages like C#, VB.NET, or F#.</p>

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
                                            <h4 className='font-20'>Web Applications</h4>
                                            <p>
                                               Built using ASP.NET or ASP.NET Core run on browsers
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
                                            <h4 className='font-20'>Data Preprocessing</h4>
                                            <p>
                                               Ensuring data quality and consistency.
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
                                            <h4 className='font-20'>Model Architecture Design</h4>
                                            <p>
                                                Selecting an appropriate architecture, typically transformers, which utilize self-attention mechanisms to process entire sequences in parallel.
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
                            <h4 className="mt-3 pt-3 border-top mb-3">.NET Development Services: Building Scalable, Secure, and High-Performance Applications Across Industries</h4>

                             <p className="">
                                Harness the power of Microsoft's .NET framework to create robust, scalable, and secure applications tailored to your industry's unique needs. Our .NET development services offer versatile solutions that drive digital transformation and operational excellence.
                            </p>

                            <p className="fw-bold text-900">
                                Financial Services:{" "}
                                <span className="fw-medium text-600">
                                  Enhancing Security and Compliance ,In the financial sector, .NET provides a reliable platform for developing applications that require high security and compliance standards.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                               Secure Transaction Processing:{" "}
                                <span className="fw-medium text-600">
                                      Implementing secure payment gateways and transaction systems.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                            Regulatory Compliance: {" "}
                                <span className="fw-medium text-600">
                                Ensuring applications meet financial regulations and standards.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                              Data Analytics:{" "}
                                <span className="fw-medium text-600">
                                Developing tools for real-time financial data analysis and reporting.
                                </span>
                            </p>

                            {/* next  */}

                            <h4 className="mt-3 pt-3 border-top mb-3">Healthcare: Improving Patient Care and Data Management</h4>

                            <p className="fw-bold text-900">
                              Electronic Health Records (EHR):{" "}
                                <span className="fw-medium text-600">
                                Creating secure and accessible EHR systems.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Telemedicine Platforms:{" "}
                                <span className="fw-medium text-600">
                                Developing applications for remote consultations and patient monitoring.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Healthcare Analytics:{" "}
                                <span className="fw-medium text-600">
                                Implementing tools for analyzing patient data to improve outcomes.
                                </span>
                            </p>

                            {/* next */}

                            <h4 className="mt-3 pt-3 border-top mb-3">E-commerce: Driving Sales and Customer Engagement</h4>

                            <p className="fw-bold text-900">
                               Online Storefronts: {" "}
                                <span className="fw-medium text-600">
                                 Building responsive and user-friendly e-commerce websites.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Inventory Management:{" "}
                                <span className="fw-medium text-600">
                                Integrating systems for real-time inventory tracking.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Customer Relationship Management (CRM):{" "}
                                <span className="fw-medium text-600">
                                Developing tools to manage customer interactions and data.
                                </span>
                            </p>

                            {/* next */}
                            <h4 className="mt-3 pt-3 border-top mb-3">Education: Facilitating Learning and Administration</h4>

                            <p className="fw-bold text-900">
                               Learning Management Systems (LMS):{" "}
                                <span className="fw-medium text-600">
                                Developing platforms for course delivery and tracking.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Student Information Systems: {" "}
                                <span className="fw-medium text-600">
                               Creating systems to manage student records and academic data.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                              Virtual Classrooms: {" "}
                                <span className="fw-medium text-600">
                                Implementing tools for online teaching and collaboration.
                                </span>
                            </p>

                            {/* next */}
                            <h4 className="mt-3 pt-3 border-top mb-3">Manufacturing: Streamlining Operations and Production</h4>

                            <p className="fw-bold text-900">
                               Supply Chain Management:{" "}
                                <span className="fw-medium text-600">
                                Building systems for tracking and managing supply chain activities.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                             Production Monitoring: {" "}
                                <span className="fw-medium text-600">
                               Developing applications to monitor and control manufacturing processes.
                                </span>
                            </p>

                             <p className="fw-bold text-900">
                             Predictive Maintenance :  {" "}
                                <span className="fw-medium text-600">
                               Implementing tools to predict equipment failures and schedule maintenance.
                                </span>
                            </p>


                        

                            {/* Accordion */}
                            <DotNetApplicationAccodionData/>

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

export default DotNetApplication_Second;