// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/ReactApplication/Img-1.webp';
import img2 from '../../../assets/imgs/services-details-2/ReactApplication/img-2.avif';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';
import ReactApplicationAccodionData from '../ReactApplicationAccodionData/ReactApplicationAccodionData';
// import DotNetApplicationAccodionData from '../DotNetApplicationAccodionData/DotNetApplicationAccodionData';

function ReactApplication_Second() {
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

                            <h4 className="my-3">Build Fast, Scalable, and Engaging User Interfaces with React</h4>
                            <p className="mb-0">At Codm,we deliver high-performance React applications that combine speed, scalability, and a seamless user experience. React.js, developed and maintained by Facebook, is the go-to JavaScript library for building interactive and dynamic front-end applications — and we use it to craft everything from MVPs to enterprise-grade solutions.Our innovative business services are designed to help you navigate the complexities of the modern marketplace, leveraging cutting-edge technology and forward-thinking strategies to transform your operations and achieve your goals. We implement intelligent automation tools tailored to your specific needs.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Custom React Application Development</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Single Page Applications (SPAs)</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">React UI/UX Design</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">React Migration Services</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Progressive Web Apps (PWAs)</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">React with Backend Integration</span>
                                    </li>
                                </ul>
                            </div>

                            {/*new */}

                            <h4 className="mb-3 mt-1">What Is React?</h4>
                            <p className='mb-4'>React (or React.js) is a popular open-source JavaScript library used for building user interfaces, especially single-page applications (SPAs). It enables fast rendering, reusable components, and a virtual DOM for optimized performance — making it ideal for modern web development.</p>

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
                                            <h4 className='font-20'>React UI/UX Design</h4>
                                            <p>
                                               Our front-end team crafts intuitive, mobile-responsive interfaces that align with your brand and enhance user engagement.
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
                                            <h4 className='font-20'>React Migration Services</h4>
                                            <p>
                                               Migrate your existing legacy apps or front-ends from Angular, jQuery, or plain JavaScript to a modern React-based architecture.
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
                                            <h4 className='font-20'>React with Headless CMS</h4>
                                            <p>
                                                Integrate React with headless CMS platforms like Strapi, Contentful, or Sanity to build flexible, API-driven front-ends.
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
                            <h4 className="mt-3 pt-3 border-top mb-3">Empowering Industry-Specific Digital Solutions</h4>

                             <p className="">
                               React, a powerful JavaScript library, enables the development of dynamic and responsive user interfaces. Its integration capabilities allow businesses across various industries to enhance user experiences, streamline operations, and drive innovation.
                            </p>

                            <p className="fw-bold text-900">
                                Retail & E-commerce:{" "}
                                <span className="fw-medium text-600">
                                  Retailers leverage React to build interactive and scalable e-commerce platforms. For instance, Walmart utilizes React to create a seamless shopping experience, enabling real-time updates and efficient state management.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                               Media & Entertainment:{" "}
                                <span className="fw-medium text-600">
                                      Streaming services like Netflix employ React to manage their user interfaces, ensuring smooth navigation and real-time content updates. React's component-based architecture allows for efficient rendering of dynamic content, enhancing user satisfaction.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                            Transportation & Logistics:{" "}
                                <span className="fw-medium text-600">
                                Companies like Uber Eats integrate React Native to develop their Restaurant Dashboard, facilitating real-time order tracking and efficient communication between restaurants and delivery partners.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Healthcare:{" "}
                                <span className="fw-medium text-600">
                                Improving Patient Interaction Healthcare applications utilize React to create intuitive interfaces for patient portals, appointment scheduling, and telemedicine services. React's flexibility ensures secure and responsive platforms, enhancing patient engagement.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Education:{" "}
                                <span className="fw-medium text-600">
                                Facilitating Interactive Learning Educational platforms adopt React to develop interactive learning management systems (LMS), enabling real-time updates, quizzes, and collaborative tools that enhance the learning experience.
                                </span>
                            </p>

                            {/* next  */}

                            {/* Accordion */}
                            {/* <ReactApplicationAccodionData/> */}
                            <ReactApplicationAccodionData/>

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

export default ReactApplication_Second;