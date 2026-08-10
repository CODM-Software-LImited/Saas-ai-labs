
import { Link } from "react-router-dom";
import './BlogSidebar.css';
import img1 from '../../assets/imgs/services-details/icon-contact.svg';

import { NavLink } from "react-router-dom";

function BlogSidebar() {
    return (
        <>
            <div className="mt-5">
                <NavLink 
                    to="/blog/salesforce-revenue-cloud"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Revenue Cloud Advanced
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/trigger-framework"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                   Salesforce Trigger Framework
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/ai-powered-dashboard"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                  {/* AI-Powered pharmaceutical Analytics Dashboard */}
                  Intelligent AI-Powered CRM for Pharmaceutical Industry
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/salesforce-agentforce"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >Salesforce Agentforce Implementation
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/salesforce-einstein-ai-synergy"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Salesforce Einstein AI + Synergy 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/integration-framework"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                Integration Framework
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                 <NavLink
                    to="/blog/agentforce-financial-services"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >Salesforce Financial Services
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                  <NavLink 
                    to="/blog/agentforce-ai"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    AI Powered Salesforce Development
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                <NavLink
                    to="/blog/field-service-automation"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Field Service Automation
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                 <NavLink
                    to="/blog/salesforce-llm-crm-automation"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                   LLM in Salesforce
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>

                 <NavLink
                    to="/blog/salesforce-sso-authentication"
                    className={({ isActive }) =>
                        `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                        }`
                    }
                >
                    Authentication using SSO
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="fill-neutral-100"
                            d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                            fill="#f3f4f6"
                        />
                    </svg>
                </NavLink>
            </div>
        </>
    )
}

export default BlogSidebar;