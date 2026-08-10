import { Link } from "react-router-dom";
import './S_rightSidebarDataDevelopment.css';
import bgImg from '../../assets/imgs/services-details/bg-line-3.png';
import { NavLink } from "react-router-dom";
import img1 from '../../assets/imgs/services-details/icon-contact.svg'
function S_rightSidebarDataDevelopment() {
    return (
        <>
            <div className="mt-5">
                <NavLink
                    to="/ItServices/crm-development"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Salesforce CRM
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/ItServices/dotnet-application-development"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    .NET Application
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/ItServices/react-application-development"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    React Application
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/ItServices/api-integration"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    API Integration
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/ItServices/data-integration"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Data Integration/ Migration
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>
                      <NavLink
                    to="/ItServices/data-migration"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Data Migration
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>
                <NavLink
                    to="/ItServices/technical-support"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Technical Support
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>
                <NavLink
                    to="/ItServices/building-llm"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                   Building LLM
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>
                <NavLink
                    to="/ItServices/python-application-development"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                   Python Application
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink> 
                 <NavLink
                    to="/ItServices/deployment-support"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Deployment Support
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>




                {/* next container */}
                <div className="S_right_Container purple-bg rounded-4 mt-7 position-relative">

                    <h4 class="text-white">Providing the <br />Ultimate <br /> Experience <br />in Education<br /> Cloud</h4>
                    <div className="S_right_Container_img d-flex align-items-center mt-4 position-relative">
                        <img src={img1} alt="Contact Us" className="" />
                        <div class="ms-3">
                            <span class="text-white mb-0 fs-4">Contact Us
                            </span>
                            <h5 class="text-white d-block">(+44) 0121 818 6924</h5>
                        </div>
                    </div>

                    {/* btn container */}
                    <div className="S_right_Container_btn">
                        <Link class="purple-text btn text-start bg-white fs-6 d-flex align-items-center justify-content-between hover-up w-100" to='#'>
                            <span>Get a free POC for your project </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2"></path>
                            </svg></Link>
                    </div>

                    <div className="position-absolute top-0 end-0">
                        <img src={bgImg} alt="" width={'100%'} />
                    </div>
                </div>


                {/* img container */}
                {/* <div className="zoom-img mt-5 rounded-4">
                    <img src={img2} className="" width={'100%'}/>
                </div> */}
            </div>
        </>
    )
}

export default S_rightSidebarDataDevelopment;