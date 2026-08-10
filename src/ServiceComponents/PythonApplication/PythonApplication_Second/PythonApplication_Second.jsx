// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/PythonApplication/img-1.jpg';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';
import PythonApplicationAccodionData from '../PythonApplicationAccodionData/PythonApplicationAccodionData';
// import DotNetApplicationAccodionData from '../DotNetApplicationAccodionData/DotNetApplicationAccodionData';

function PythonApplication_Second() {
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

                            <h4 className="my-3">Python Application Development</h4>
                            <p className="mb-0">Python stands out as a versatile and powerful programming language, enabling the creation of robust, scalable, and efficient applications. Its simplicity and extensive library support make it a preferred choice for developing solutions across diverse sectors.Codm's Python Application Development Services are designed to harness the full potential of Python, delivering tailored solutions that meet the unique needs of businesses. Our team of experienced developers specializes in crafting high-performance applications that drive innovation and efficiency.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Web Development (Django, Flask)</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Data Science & Machine Learning </span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Automation & Scripting</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">API Development</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Enterprise Software Solutions</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Data Analytics & AI</span>
                                    </li>
                                </ul>
                            </div>

                            {/*new */}

                            <h4 className="mb-3 mt-1">What Is a Python Application?</h4>
                            <p className='mb-4'>A Python application refers to any program or software solution built using Python. Python is a high-level, interpreted, object-oriented programming language known for its easy-to-read syntax and dynamic semantics. These features make it ideal for rapid application development and integration with other components.</p>

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
                                               Frameworks like Django and Flask enable developers to create robust and scalable web applications efficiently
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
                                            <h4 className='font-20'>Data Science and Analytics</h4>
                                            <p>
                                               Python's rich ecosystem of libraries, such as Pandas, NumPy, and Matplotlib, facilitates data analysis, visualization, and statistical modeling. This makes it a preferred choice for data scientists and analysts.
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
                                            <h4 className='font-20'>Automation and Scripting</h4>
                                            <p>
                                                Python's simplicity makes it ideal for automating repetitive tasks, such as file manipulation, data entry, and system monitoring, enhancing productivity and efficiency.
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
                            <h4 className="mt-3 pt-3 border-top mb-3">Advantages of Python Applications</h4>

                             <p className="">
                               Python's versatility allows it to be employed in various industries and for multiple purposes.
                            </p>

                            <p className="fw-bold text-900">
                                Readability and Simplicity:{" "}
                                <span className="fw-medium text-600">
                                  Python's clear syntax enhances code readability, making it accessible for beginners and reducing development time.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                              Extensive Library Support:{" "}
                                <span className="fw-medium text-600">
                                    A vast collection of libraries and frameworks accelerates development across different domains.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                             Cross-Platform Compatibility:{" "}
                                <span className="fw-medium text-600">
                               Python applications can run on various operating systems without significant modifications.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                              Active Community:{" "}
                                <span className="fw-medium text-600">
                                A large and supportive community contributes to continuous improvement and provides assistance to developers.
                                </span>
                            </p>

                            {/* Accordion */}
                            <PythonApplicationAccodionData/>

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

export default PythonApplication_Second;