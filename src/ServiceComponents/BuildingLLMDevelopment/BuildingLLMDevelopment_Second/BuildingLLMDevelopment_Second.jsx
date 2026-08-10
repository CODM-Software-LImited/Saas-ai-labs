// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/BuildingLLM/img-1.jpg';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/img-2.png';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import BuildingLLMDevelopmentAccodionData from '../BuildingLLMDevelopmentAccodionData/BuildingLLMDevelopmentAccodionData';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';

function BuildingLLMDevelopment_Second() {
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

                            <h4 className="my-3">Empowering AI with Advanced Language Understanding</h4>
                            <p className="mb-0">In the rapidly evolving field of artificial intelligence, Large Language Models (LLMs) have emerged as transformative tools capable of understanding and generating human-like text. Building an effective LLM involves meticulous data collection, preprocessing, and model training to ensure accuracy, relevance, and efficiency.Codm's LLM model is designed to harness the power of LLMs, enabling organizations to leverage advanced language understanding for a wide range of applications, from chatbots and virtual assistants to content generation and sentiment analysis.
                            </p>

                            {/* Phase items */}
                            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                                {/* First Column */}
                                <ul className="list-unstyled phase-items mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Define Clear Objectives</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Curate Diverse and High-Quality Datasets</span>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Implement Robust Data Preprocessing</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Design an Appropriate Model Architecture</span>
                                    </li>
                                </ul>

                                {/* Third Column */}
                                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Train the Model with Adequate Resources</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-3">
                                        <img src={checkImg} alt="Codm" />
                                        <span className="ms-2 text-900 fw-medium fs-6">Evaluate and Fine-Tune the Model</span>
                                    </li>
                                </ul>
                            </div>

                            {/*new */}

                            <h4 className="mb-3 mt-1">What is a Large Language Model (LLM)?</h4>
                            <p className='mb-4'>A Large Language Model is a deep learning algorithm trained on vast textual datasets to perform various natural language processing tasks. These tasks include text generation, translation, summarization, and question-answering. LLMs leverage transformer architectures to capture contextual relationships within language, enabling them to produce coherent and contextually appropriate responses.</p>

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
                                            <h4 className='font-20'>Data Collection</h4>
                                            <p>
                                                Gathering vast and diverse textual data is foundational
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
                            <h4 className="mt-3 pt-3 border-top mb-3">Challenges in Building LLMs</h4>

                            <p className="fw-bold text-900">
                                Data Quality:{" "}
                                <span className="fw-medium text-600">
                                  Ensuring the dataset is free from biases and inaccuracies.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                                Computational Resources:{" "}
                                <span className="fw-medium text-600">
                                      Training large models requires significant processing power and memory.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                              Ethical Considerations: {" "}
                                <span className="fw-medium text-600">
                                  Addressing concerns related to data privacy and the potential misuse of generated content.
                                </span>
                            </p>

                            <p className="fw-bold text-900">
                              Maintenance:{" "}
                                <span className="fw-medium text-600">
                                 Regularly updating the model to reflect current language usage and information.
                                </span>
                            </p>

                            {/* Accordion */}
                            <BuildingLLMDevelopmentAccodionData/>
                            
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

export default BuildingLLMDevelopment_Second;