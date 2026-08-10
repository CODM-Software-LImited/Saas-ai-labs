import "./Hero3.css";
import icon1 from '../../assets/imgs/features-2/icon-1.svg';
import icon2 from '../../assets/imgs/features-2/bg-img-favicon.png';
import img from '../../assets/imgs/features-1/ChatGPT Image Apr 25, 2025, 04_09_58 PM.png';
import SvgIcon from '../../utils/svgIcon.jsx';
import Img from '../../assets/imgs/features-2/icon-2.svg';

function Hero3() {
    return (

        <section>
            <div className="hero3_container">
                 <div className="container-fluid position-relative section-padding">
                    <div className="container">
                        <div className="position-absolute bg-rotate z-0">
                            <img className="rotate-center" src={icon2} alt=""/>
                        </div>
                        <div className="row align-items-center">
                            {/* Left Column */}
                            <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
                                <img
                                    src={icon1}
                                    alt="icon"
                                    className="hover-up"
                                    data-aos="fade-up"
                                />
                                <h1 className="text-white mt-3 mb-4 fw-medium hover-up cursor-pointer hero3_heading ">
                                    How Can We<br/> Help Your <br/>Business?..
                                </h1>  
                                <ul className="list-unstyled phase-items hero3Uidiiv">
                                    <li>
                                        <a
                                            className="phase-item d-flex align-items-center mb-3 text-decoration-none">
                                            <SvgIcon/>
                                            <p className="text-white mb-0 ms-3">Success Accelerators</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="phase-item d-flex align-items-center mb-3 text-decoration-none">
                                            <SvgIcon/>
                                            <p className="text-white mb-0 ms-3">
                                                Started politician Club
                                            </p>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="phase-item d-flex align-items-center mb-3 text-decoration-none"
                                        >
                                            <SvgIcon />
                                            <p className="text-white mb-0 ms-3">
                                                Transformational Strategy
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Middle Column */}
                            <div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
                                <div className="position-relative d-inline-block z-2 hover-up">
                                    <img
                                        className="rounded-3 border border-3 border-white agentForce_Table_Img"
                                        width={'100%'}
                                        src={img}
                                        alt="AgentForce"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="hero3_rightBox col-lg-4 mb-lg-0 mb-8">
                                <div className="">
                                    <img
                                        src={Img}
                                        alt="Codm"
                                        className="hover-up"
                                    />
                                    <div
                                        data-aos="fade-zoom-in"
                                        data-aos-delay="100"
                                        className="aos-init aos-animate"
                                    >
                                        <h3 className="text-white mt-3 mb-3">Transform</h3>
                                        <p className="text-white pb-3 border-light border-bottom">
                                            We transform businesses<br/> 
                                            through expert Salesforce<br/>
                                            development..
                                        </p>
                                        
                                    </div>
                                    <div
                                        data-aos="fade-zoom-in"
                                        data-aos-delay="4200"
                                        className="aos-init aos-animate"
                                    >
                                        <h3 className="text-white mt-8 mb-3">Increase</h3>
                                        <p className="text-white">
                                            Our solutions increase<br/> efficiency across <br/>your organization..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    
                    <div className="position-absolute top-0 end-0 z-1 bloom_container">
                        <div className="bloom"></div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero3;
