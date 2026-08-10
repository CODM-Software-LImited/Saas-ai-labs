// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/Technical-Support/img-1.jpg';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';
import TechnicalSupportAccodionData from '../TechnicalSupportAccodionData/TechnicalSupportAccodionData';

function TechnicalSupport_Seond() {
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

                            <h4 className="my-3">Empowering Your Business with Reliable Technical Support</h4>
                            <p className="mb-0">In today's fast-paced digital landscape, uninterrupted technical operations are crucial for business success. Our Technical Support Services are designed to ensure your systems run smoothly, minimizing downtime and enhancing productivity.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">24/7 Helpdesk Support</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Remote Troubleshooting</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">On-Site Support</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">System Maintenance</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Software Installation & Updates</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Hardware Support </span>
                                    </li>
                                </ul>
                            </div>

                            {/*new */}

                            <h4 className="mb-3 mt-1">What is Technical Support?</h4>
                            <p className='mb-4'>Technical Support refers to assistance provided to users experiencing technical issues with products or services, including hardware, software, or electronic systems. This support encompasses troubleshooting problems, providing guidance on product usage, performing repairs, and ensuring optimal functionality. Services are delivered through various channels such as phone, email, online chat, or in-person interactions.</p>

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
                                            <h4 className='font-20'>Reduced Downtime</h4>
                                            <p>
                                               Quick issue resolution minimizes disruptions to your operations
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
                                            <h4 className='font-20'>Cost Efficiency</h4>
                                            <p>
                                              Preventive maintenance and timely support reduce long-term operational costs.
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
                                            <h4 className='font-20'>Expert Assistance</h4>
                                            <p>
                                                Access to skilled professionals with extensive technical knowledge.
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
                            <h4 className="mt-3 pt-3 border-top mb-3">Industries We Serve</h4>

                             <p className="">
                              Our Technical Support Services cater to a diverse range of industries, including.
                            </p>

                            <p className="fw-bold text-900">
                                Healthcare: {" "}
                                <span className="fw-medium text-600">
                                  Ensuring the reliability of critical medical systems and patient data security.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                               Finance: {" "}
                                <span className="fw-medium text-600">
                                     Maintaining the integrity and uptime of financial systems and transaction platforms.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Retail:{" "}
                                <span className="fw-medium text-600">
                                Supporting POS systems, inventory management, and e-commerce platforms.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Education: {" "}
                                <span className="fw-medium text-600">
                                 Facilitating seamless operation of educational technologies and online learning  tools.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Manufacturing:{" "}
                                <span className="fw-medium text-600">
                               Ensuring the smooth functioning of production systems and machinery.
                                </span>
                            </p>

                            {/* next  */}

                            {/* Accordion */}
                            <TechnicalSupportAccodionData/>

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

export default TechnicalSupport_Seond;