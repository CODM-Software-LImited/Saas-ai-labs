import { useState } from "react";
import saaslogo from "../../assets/saalaiLogo.png";
import { Link, NavLink } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from '../../assets/image17.png';
import "./Navbar.css";
import flag1 from '../../assets/flags/Flag of UK.png';
import flag2 from '../../assets/flags/Flag_of_India.png';
import flag3 from '../../assets/flags/Flag_of_the_United_States.png';

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode");
  };

  const handleNavItemClick = () => {
    setOpenDropdown(null);
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      window.bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    }
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top navbarContainer">
      <div className="nav_container container position-relative">
        {/* Brand */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleNavItemClick}
        >
          {/* <img src={logo} alt="CODM" className="me-2" /> */}
          <img src={saaslogo} alt="" className="me-2 navbar-logo"/>

        </Link>

        <button
          className="navbar-toggler position-absolute"
          style={{ right: "2rem", top: "1.5rem" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-5 mb-lg-0 gap-3 gap-lg-2 align-items-center">
            <li className="nav-item d-flex">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/"
                onClick={handleNavItemClick}
              >
                Home
              </NavLink>
            </li> 

            <li className="nav-item d-flex">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/about"
                onClick={handleNavItemClick}
              >
                About
              </NavLink>
            </li>

            {/* service and blog  */} 

            {/* SERVICES */}
            <li className="nav-item mega-dropdown d-lg-block serviceLi">
              <div
                type="button"
                className="nav-link mobile-toggle d-flex align-items-center gap-1 serviceDiv"
                onClick={() => toggleDropdown("service")}
                style={{width:'100%' ,height:"84px"}}
              >
                <NavLink
                  to="/ItServices"
                  className="text-decoration-none text-reset"
                >
                  Services
                </NavLink>

                <MdKeyboardArrowDown className={openDropdown === "service" ? "rotate" : ""}/>
              </div>

              <div
                className={`servicesCrmDiv pt-2 dropdown-menu border-0 mega-menu dropdown-menu-service ${openDropdown === "service" ? "show" : ""
                  }`}
              >
                <div className="row ps-5 p-md-0 m-2">
                  {/* Column 1 */}
                  <div className="col-md-6 servicesCrm">
                    <h6 className="text-uppercase fw-bold mb-3 text-center">
                      Salesforce CRM
                    </h6>

                    <div className="d-flex">
                        <div>
                              
                    <Link
                      to="/ItServices/salesforce-education-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Education Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-financial-services"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Financial Services
                    </Link>

                    <Link
                      to="/ItServices/salesforce-health-insurance-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Health & Insurance Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-data-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Data Cloud
                    </Link>
                    <Link
                      to="/ItServices/salesforce-marketing-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Marketing Cloud
                    </Link>

                        </div>
                        <div>
                      
                    <Link
                      to="/ItServices/salesforce-sales-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Sales Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-service-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Service Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-energy-utilities-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Energy and Utilities Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-manufacturing-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Manufacturing Cloud
                    </Link>
                        </div>
                    </div>
                     
                    {/* <Link
                      to="/ItServices/salesforce-education-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Education Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-financial-services"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Financial Services
                    </Link>

                    <Link
                      to="/ItServices/salesforce-health-insurance-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Health & Insurance Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-data-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Data Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-marketing-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Marketing Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-sales-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Sales Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-service-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Service Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-energy-utilities-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Energy and Utilities Cloud
                    </Link>

                    <Link
                      to="/ItServices/salesforce-manufacturing-cloud"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Salesforce Manufacturing Cloud
                    </Link> */}
                  </div>


                  {/* Column 2 */}
                  <div className="col-md-2">
                    <h6 className="text-uppercase fw-bold mb-3">Data</h6>
                    <Link
                      to="/ItServices/api-integration"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      API Integration
                    </Link>
                    <Link
                      to="/ItServices/data-integration"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Data Integration
                    </Link>
                    <Link
                      to="/ItServices/data-migration"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Data Migration
                    </Link>
                  </div>

                  {/* Column 3 */}
                  <div className="col-md-2">
                    <h6 className="text-uppercase fw-bold mb-3">Development</h6>
                    <Link
                      to="/ItServices/crm-development"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      CRM Development
                    </Link>
                    <Link
                      to="/ItServices/building-llm"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Building LLM
                    </Link>
                    <Link
                      to="/ItServices/dotnet-application-development"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      .NET Application
                    </Link>
                    <Link
                      to="/ItServices/react-application-development"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      React Application
                    </Link>
                    <Link
                      to="/ItServices/python-application-development"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Python Application
                    </Link>
                  </div>

                  {/* Column 4 */}
                  <div className="col-md-2">
                    <h6 className="text-uppercase fw-bold mb-3">Support</h6>
                    <Link
                      to="/ItServices/technical-support"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                      Technical Support
                    </Link>
                    <Link
                      to="/ItServices/deployment-support"
                      className="dropdown-item"
                      onClick={handleNavItemClick}
                    >
                     Deployment Support
                    </Link>   
                  </div>
                </div>
              </div>

              {/* phone  */}
              <ul
                className={`mobile-accordion d-lg-none ${openDropdown === "service" ? "open" : ""
                  }`}
              >
                {/* Salesforce CRM */}
                <li className="accordion-title">Salesforce CRM</li>

                <li><NavLink to="/ItServices/salesforce-education-cloud" onClick={handleNavItemClick}>Salesforce Education Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-financial-services" onClick={handleNavItemClick}>Salesforce Financial Services</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-health&insurance-cloud" onClick={handleNavItemClick}>Salesforce Health & Insurance Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-data-cloud" onClick={handleNavItemClick}>Salesforce Data Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-marketing-cloud" onClick={handleNavItemClick}>Salesforce Marketing Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-sales-cloud" onClick={handleNavItemClick}>Salesforce Sales Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-service-cloud" onClick={handleNavItemClick}>Salesforce Service Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-energy-utilities-cloud" onClick={handleNavItemClick}>Salesforce Energy and Utilities Cloud</NavLink></li>
                <li><NavLink to="/ItServices/salesforce-manufacturingcloud" onClick={handleNavItemClick}>Salesforce Manufacturing Cloud</NavLink></li>

                {/* Data */}
                <li className="accordion-title mt-3">Data</li>

                <li><NavLink to="/ItServices/api-integration" onClick={handleNavItemClick}>API Integration</NavLink></li>
                <li><NavLink to="/ItServices/data-integration" onClick={handleNavItemClick}>Data Integration</NavLink></li>
                <li><NavLink to="/ItServices/data-migration" onClick={handleNavItemClick}>Data Migration</NavLink></li>

                {/* Development */}
                <li className="accordion-title mt-3">Development</li>

                <li><NavLink to="/ItServices/crm-development" onClick={handleNavItemClick}>CRM Development</NavLink></li>
                <li><NavLink to="/ItServices/building-llm" onClick={handleNavItemClick}>Building LLM</NavLink></li>
                <li><NavLink to="/ItServices/dotnet-application-development" onClick={handleNavItemClick}>.NET Application</NavLink></li>
                <li><NavLink to="/ItServices/react-application-development" onClick={handleNavItemClick}>React Application</NavLink></li>
                <li><NavLink to="/ItServices/python-application-development" onClick={handleNavItemClick}>Python Application</NavLink></li>

                {/* Support */}
                <li className="accordion-title mt-3">Support</li>

                <li><NavLink to="/ItServices/technical-support" onClick={handleNavItemClick}>Technical Support</NavLink></li>
              </ul>


            </li>

            {/* BLOGS */}
            <li className="nav-item mega-dropdown1 blogsli">
              <button
                type="button"
                className="nav-link d-flex align-items-center mobile-toggle blogsDiv" 
                onClick={() => toggleDropdown("blog")}
                 style={{width:'100%' ,height:"84px"}}
              >
                <NavLink to="/blog"
                  className="text-decoration-none text-reset">
                  Blogs
                  <MdKeyboardArrowDown
                    className={openDropdown === "blog" ? "rotate" : ""}
                  />
                </NavLink>
              </button>

              {/* for lg screen */}
              <div
                className={`dropdown-menu1 mega-menu1 ${openDropdown === "blog" ? "show" : ""
                  }`}
              >
                <div className="col-md-3">
                  <Link
                    className="dropdown-item"
                    to="/blog/integration-framework"
                    onClick={handleNavItemClick}
                  >
                    Integration Framework
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/trigger-framework"
                    onClick={handleNavItemClick}
                  >
                    Trigger Framework
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/ai-powered-dashboard"
                    onClick={handleNavItemClick}
                  >
                    Pharmaceutical Dashboard
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/salesforce-agentforce"
                    onClick={handleNavItemClick}
                  >
                    Agentforce Implementation
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/salesforce-einstein-ai-synergy"
                    onClick={handleNavItemClick}  
                  >
                    Salesforce AI + Synergy
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/salesforce-revenue-cloud"
                    onClick={handleNavItemClick}
                  >
                    Salesforce CPQ to Revenue Cloud
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/blog/agentforce-financial-services"
                    onClick={handleNavItemClick}
                  > 
                    Salesforce Financial Service Cloud
                  </Link>
                </div>

              </div>

              <ul className={`mobile-accordion d-lg-none ${openDropdown === "blog" ? "open" : ""}`}>
                <li><NavLink to="/blog/integration-framework" onClick={handleNavItemClick}>Integration Framework</NavLink></li>
                <li><NavLink to="/blog/trigger-framework" onClick={handleNavItemClick}>Trigger Framework</NavLink></li>
                <li><NavLink to="/blog/ai-powered-dashboard" onClick={handleNavItemClick}>Pharmaceutical Dashboard</NavLink></li>
                <li><NavLink to="/blog/salesforce-agentforce" onClick={handleNavItemClick}>Agentforce Implementation</NavLink></li>
                <li><NavLink to="/blog/salesforce-einstein-ai-synergy" onClick={handleNavItemClick}>Salesforce AI + Synergy</NavLink></li>
                <li><NavLink to="/blog/salesforce-revenue-cloud" onClick={handleNavItemClick}> Salesforce CPQ to Revenue Cloud</NavLink></li>
              </ul>
            </li>

             <li className="nav-item d-flex justify-content-center align-items-center">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="https://codmsoftware.co.uk/index.html"
                onClick={handleNavItemClick}
                target="_blank"
              >
              Codm Software
              </NavLink>
            </li>

               <li className="nav-item  d-flex justify-content-center align-items-center">
              <NavLink
                className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/contact"
                onClick={handleNavItemClick}
              >
                Contact
              </NavLink>
            </li>

             <li className="nav-item">
              <a
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                href="https://www.linkedin.com/company/saas-ai-labs/jobs/"
                target="_blank"
                onClick={handleNavItemClick}
              >
             <button className="p-2 rounded-3 purple-bg border-0">Join Us</button>
              </a>
            </li>
          </ul>
        </div>

        <div className="justify-content-center align-content-center d-none d-lg-block">
          <div className="d-flex text-center align-items-center">
            <img
              src={flag1}
              alt="UK Flag"
              style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
            />
            <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>UK: (+44) 0121 818 6924</p>
          </div>
         
          <div className="d-flex align-items-center">
            <img
              src={flag3}
              alt="USA Flag"
              style={{ width: "15px", height: "13px", marginRight: "6px" }}
            />
            <span className="align-items-center" style={{ fontSize: ".9rem" }}>USA: (+1) 201 623 3132</span>
          </div>

          <div className="d-flex align-items-center p-0">
            <img
              src={flag2}
              alt="UK Flag"
              style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
            />
            <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>India : (+91) 9717116432</p>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
export default Navbar;

