import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setBlogsOpen(false);
  };

  const toggleBlogs = () => {
    setBlogsOpen(!blogsOpen);
    setServicesOpen(false);
  };

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <style>{`
        .navbar-custom {
          background-color: #fff;
          padding: 1rem 3rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .navbar-brand img {
          height: 40px;
        }

        .navbar-nav {
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          color: #000 !important;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1rem !important;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #7c3aed !important;
        }

        .nav-link.active {
          color: #7c3aed !important;
        }

        .dropdown-toggle::after {
          margin-left: 0.3rem;
        }

        .dropdown-menu {
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-radius: 8px;
          padding: 1rem;
          min-width: 800px;
        }

        .dropdown-menu.show {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .dropdown-column h6 {
          color: #7c3aed;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
        }

        .dropdown-item {
          color: #000;
          padding: 0.5rem 0;
          font-size: 0.95rem;
          border: none;
          background: none;
          transition: color 0.3s ease;
        }

        .dropdown-item:hover {
          color: #7c3aed;
          background: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .flag-icon {
          width: 20px;
          height: 15px;
        }

        .btn-join {
          background-color: #7c3aed;
          color: #fff;
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          border: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .btn-join:hover {
          background-color: #6d28d9;
        }

        @media (max-width: 991px) {
          .navbar-custom {
            padding: 1rem;
          }

          .dropdown-menu.show {
            grid-template-columns: 1fr;
            min-width: auto;
            width: 100%;
          }

          .contact-info {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
          }

          .btn-join {
            width: 100%;
            margin-top: 1rem;
          }
        }

        @media (max-width: 576px) {
          .navbar-custom {
            padding: 0.75rem 1rem;
          }

          .dropdown-menu {
            padding: 0.5rem;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <svg width="150" height="40" viewBox="0 0 150 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#7c3aed" opacity="0.1"/>
              <path d="M15 12 Q12 15 12 20 Q12 25 15 28" stroke="#7c3aed" strokeWidth="2" fill="none"/>
              <path d="M18 15 Q16 17 16 20 Q16 23 18 25" stroke="#7c3aed" strokeWidth="2" fill="none"/>
              <circle cx="22" cy="18" r="2" fill="#7c3aed"/>
              <circle cx="26" cy="15" r="1.5" fill="#7c3aed"/>
              <circle cx="24" cy="22" r="1.5" fill="#7c3aed"/>
              <text x="45" y="27" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#7c3aed">CODM</text>
            </svg>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNavbar}
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle active" 
                  href="#services" 
                  role="button"
                  onClick={(e) => { e.preventDefault(); toggleServices(); }}
                >
                  Services
                </a>
                <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                  <div className="dropdown-column">
                    <h6>SALESFORCE CRM</h6>
                    <a className="dropdown-item" href="#education">Salesforce Education Cloud</a>
                    <a className="dropdown-item" href="#financial">Salesforce Financial Services</a>
                    <a className="dropdown-item" href="#health">Salesforce Health & Insurance Cloud</a>
                    <a className="dropdown-item" href="#data">Salesforce Data Cloud</a>
                    <a className="dropdown-item" href="#marketing">Salesforce Marketing Cloud</a>
                    <a className="dropdown-item" href="#sales">Salesforce Sales Cloud</a>
                    <a className="dropdown-item" href="#service">Salesforce Service Cloud</a>
                    <a className="dropdown-item" href="#energy">Salesforce Energy and Utilities Cloud</a>
                    <a className="dropdown-item" href="#manufacturing">Salesforce Manufacturing Cloud</a>
                  </div>
                  <div className="dropdown-column">
                    <h6>DATA</h6>
                    <a className="dropdown-item" href="#api">API Integration</a>
                    <a className="dropdown-item" href="#integration">Data Integration</a>
                    <a className="dropdown-item" href="#migration">Data Migration</a>
                  </div>
                  <div className="dropdown-column">
                    <h6>DEVELOPMENT</h6>
                    <a className="dropdown-item" href="#crm-dev">CRM Development</a>
                    <a className="dropdown-item" href="#llm">Building LLM</a>
                    <a className="dropdown-item" href="#net">.NET Application</a>
                    <a className="dropdown-item" href="#react">React Application</a>
                    <a className="dropdown-item" href="#python">Python Application</a>
                  </div>
                  <div className="dropdown-column">
                    <h6>SUPPORT</h6>
                    <a className="dropdown-item" href="#technical">Technical Support</a>
                    <a className="dropdown-item" href="#deployment">Deployment Support</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#blogs" 
                  role="button"
                  onClick={(e) => { e.preventDefault(); toggleBlogs(); }}
                >
                  Blogs
                </a>
                <ul className={`dropdown-menu ${blogsOpen ? 'show' : ''}`} style={{ gridTemplateColumns: '1fr' }}>
                  <li><a className="dropdown-item" href="#tech-blogs">Technology Blogs</a></li>
                  <li><a className="dropdown-item" href="#case-studies">Case Studies</a></li>
                  <li><a className="dropdown-item" href="#tutorials">Tutorials</a></li>
                  <li><a className="dropdown-item" href="#news">Industry News</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#saas">SAAS AI LABS</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <button className="btn btn-join">Join Us</button>
              </li>
            </ul>
            
            <div className="contact-info d-lg-none">
              <div className="contact-item">
                <span>🇬🇧</span>
                <span>UK: (+44) 0121 818 6924</span>
              </div>
              <div className="contact-item">
                <span>🇺🇸</span>
                <span>USA: (+1) 201 623 3132</span>
              </div>
              <div className="contact-item">
                <span>🇮🇳</span>
                <span>India: (+91) 9717116432</span>
              </div>
              <button className="btn btn-join">Join Us</button>
            </div>
          </div>

          <div className="contact-info d-none d-lg-flex ms-3">
            <div className="contact-item">
              <span>🇬🇧</span>
              <span>UK: (+44) 0121 818 6924</span>
            </div>
            <div className="contact-item">
              <span>🇺🇸</span>
              <span>USA: (+1) 201 623 3132</span>
            </div>
            <div className="contact-item">
              <span>🇮🇳</span>
              <span>India: (+91) 9717116432</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;





















// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { CiDark, CiLight } from "react-icons/ci";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { FaReact } from "react-icons/fa";
// import logo from "../../../assets/imgs/template/image17.png";
// import "./NavbarTest.css";
// import flag1 from '../../../assets/imgs/contact-4/Flag of UK.png';
// import flag2 from '../../../assets/imgs/contact-4/Flag_of_India.png';
// import flag3 from '../../../assets/imgs/contact-4/Flag_of_the_United_States.png';
// import saalLogo from '../../../assets/imgs/template/SaasAi.png';

// function Navbar() {
//     const [isDark, setIsDark] = useState(true);
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const handleToggle = () => {
//         setIsDark(!isDark);
//         document.body.classList.toggle("dark-mode");
//     };

//     // Close navbar after clicking a link
//     const handleNavItemClick = () => {
//         const navbarCollapse = document.getElementById("mainNavbar");
//         if (navbarCollapse && navbarCollapse.classList.contains("show")) {
//             window.bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
//         }
//     };

//     // Toggle dropdown (Service, Blog) on mobile
//     const toggleDropdown = (menu) => {
//         setOpenDropdown(openDropdown === menu ? null : menu);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg border-bottom fixed-top">
//             <div className="nav_container container  position-relative">
//                 {/* Brand */}
//                 <Link
//                     className="navbar-brand d-flex align-items-center"
//                     to="/"
//                     onClick={handleNavItemClick}
//                 >
//                     <img src={logo} alt="CODM" className="me-2" />
//                 </Link>

//                 {/* Toggler */}
//                 <button
//                     className="navbar-toggler position-absolute"
//                     style={{ right: "2rem", top: "1.5rem" }}
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#mainNavbar"
//                     aria-controls="mainNavbar"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Links */}
//                 <div className="collapse navbar-collapse" id="mainNavbar">
//                     <ul className="navbar-nav mx-auto mb-5 mb-lg-0 px-4 gap-3 gap-lg-4">
//                         <li className="nav-item">
//                             <NavLink
//                                 className={({ isActive }) =>
//                                     `nav-link ${isActive ? "active-link" : ""}`
//                                 }
//                                 to="/"
//                                 onClick={handleNavItemClick}
//                             >
//                                 Home
//                             </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink
//                                 className={({ isActive }) =>
//                                     `nav-link ${isActive ? "active-link" : ""}`
//                                 }
//                                 to="/about"
//                                 onClick={handleNavItemClick}
//                             >
//                                 About
//                             </NavLink>
//                         </li>

//                         {/* service and blog  */}

//                         {/* SERVICES */}
//                         <li className="nav-item mega-dropdown d-lg-block">
//                             <button
//                                 type="button"
//                                 className="nav-link mobile-toggle"
//                                 onClick={() => toggleDropdown("service")}
//                             >
//                                 Services
//                                 <MdKeyboardArrowDown
//                                     className={openDropdown === "service" ? "rotate" : ""}
//                                 />
//                             </button>
//                             {/* lg screen */}
//                             <div
//                                 className={`dropdown-menu mega-menu dropdown-menu-service ${openDropdown === "service" ? "show" : ""
//                                     }`}
//                             >
//                                 <div className="row ps-5 p-md-0">
//                                     {/* Column 1 */}
//                                     <div className="col-md-3">
//                                         <h6 className="text-uppercase fw-bold mb-3">
//                                             Salesforce CRM
//                                         </h6>
//                                         <Link
//                                             to="/service/higher-education"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Higher Education
//                                         </Link>
//                                         <Link
//                                             to="/service/financial-service"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Financial Service
//                                         </Link>
//                                         <Link
//                                             to="/service/industries-cloud"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Industries Cloud
//                                         </Link>
//                                         <Link
//                                             to="/service/data-cloud-ai"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Data Cloud + A.I.
//                                         </Link>
//                                         <Link
//                                             to="/service/marketing-cloud"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Marketing Cloud
//                                         </Link>
//                                     </div>

//                                     {/* Column 2 */}
//                                     <div className="col-md-3">
//                                         <h6 className="text-uppercase fw-bold mb-3">Data</h6>
//                                         <Link
//                                             to="/service/api-integration"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             API Integration
//                                         </Link>
//                                         <Link
//                                             to="/service/data-integration"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Data Integration
//                                         </Link>
//                                         <Link
//                                             to="/service/data-migration"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Data Migration
//                                         </Link>
//                                     </div>

//                                     {/* Column 3 */}
//                                     <div className="col-md-3">
//                                         <h6 className="text-uppercase fw-bold mb-3">Development</h6>
//                                         <Link
//                                             to="/service/SalesforceCRM"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             CRM Development
//                                         </Link>
//                                         <Link
//                                             to="/service/BuildingLLM"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Building LLM
//                                         </Link>
//                                         <Link
//                                             to="/service/DotNetApplication"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             .NET Application
//                                         </Link>
//                                         <Link
//                                             to="/service/React-Application"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             React Application
//                                         </Link>
//                                         <Link
//                                             to="/service/python-Application"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Python Application
//                                         </Link>
//                                     </div>

//                                     {/* Column 4 */}
//                                     <div className="col-md-3">
//                                         <h6 className="text-uppercase fw-bold mb-3">Support</h6>
//                                         <Link
//                                             to="/service/Technical-Support"
//                                             className="dropdown-item"
//                                             onClick={handleNavItemClick}
//                                         >
//                                             Technical Support
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>



//                             {/* phone  */}
//                             <ul className={`mobile-accordion d-lg-none ${openDropdown === "service" ? "open" : ""}`}>
//                                 <li className="accordion-title">Salesforce CRM</li>

//                                 <li><NavLink to="/service/api-integration" onClick={handleNavItemClick}>Api Integration</NavLink></li>
//                                 <li><NavLink to="/service/BuildingLLM" onClick={handleNavItemClick}>Building LLM</NavLink></li>
//                                 <li><NavLink to="/service/DotNetApplication" onClick={handleNavItemClick}>.Net Application</NavLink></li>
//                                 <li><NavLink to="/service/python-Application" onClick={handleNavItemClick}>Python Application</NavLink></li>
//                                 <li><NavLink to="/service/React-Application" onClick={handleNavItemClick}>React Application</NavLink></li>
//                                 <li><NavLink to="/service/data-integration" onClick={handleNavItemClick}>Data Integration / Migration</NavLink></li>
//                                 <li><NavLink to="/service/higher-education" onClick={handleNavItemClick}>Higher Education</NavLink></li>
//                                 <li><NavLink to="/service/financial-service" onClick={handleNavItemClick}>Financial Service Cloud</NavLink></li>
//                                 <li><NavLink to="/service/data-cloud-ai" onClick={handleNavItemClick}>Data Cloud + A.I</NavLink></li>
//                                 <li><NavLink to="/service/industries-cloud" onClick={handleNavItemClick}>Industries Cloud</NavLink></li>
//                                 <li><NavLink to="/service/marketing-cloud" onClick={handleNavItemClick}>Salesforce Marketing Cloud</NavLink></li>
//                                 <li><NavLink to="/service/Technical-Support" onClick={handleNavItemClick}>Technical Support</NavLink></li>
//                             </ul>
//                         </li>

//                         {/* BLOGS */}
//                         <li className="nav-item mega-dropdown1">
//                             <button
//                                 type="button"
//                                 className="nav-link mobile-toggle"
//                                 onClick={() => toggleDropdown("blog")}
//                             >
//                                 Blogs
//                                 <MdKeyboardArrowDown
//                                     className={openDropdown === "blog" ? "rotate" : ""}
//                                 />
//                             </button>

//                             {/* for lg screen */}
//                             <div
//                                 className={`dropdown-menu1 mega-menu1 ${openDropdown === "blog" ? "show" : ""
//                                     }`}
//                             >
//                                 <div className="col-md-3">
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/integration-framework"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Integration Framework
//                                     </Link>
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/trigger-framework"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Trigger Framework
//                                     </Link>
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/ai-powered-dashboard"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Pharmaceutical Dashboard
//                                     </Link>
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/salesforce-agentforce"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Agentforce Implementation
//                                     </Link>
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/salesforce-einstein-ai-synergy"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Salesforce AI + Synergy
//                                     </Link>
//                                     <Link
//                                         className="dropdown-item"
//                                         to="/blog/salesforce-revenue-cloud"
//                                         onClick={handleNavItemClick}
//                                     >
//                                         Salesforce CPQ to Revenue Cloud
//                                     </Link>
//                                 </div>
//                             </div>

//                             <ul className={`mobile-accordion d-lg-none ${openDropdown === "blog" ? "open" : ""}`}>
//                                 <li><NavLink to="/blog/integration-framework" onClick={handleNavItemClick}>Integration Framework</NavLink></li>
//                                 <li><NavLink to="/blog/trigger-framework" onClick={handleNavItemClick}>Trigger Framework</NavLink></li>
//                                 <li><NavLink to="/blog/ai-powered-dashboard" onClick={handleNavItemClick}>Pharmaceutical Dashboard</NavLink></li>
//                                 <li><NavLink to="/blog/salesforce-agentforce" onClick={handleNavItemClick}>Agentforce Implementation</NavLink></li>
//                                 <li><NavLink to="/blog/salesforce-einstein-ai-synergy" onClick={handleNavItemClick}>Salesforce AI + Synergy</NavLink></li>
//                                 <li><NavLink to="/blog/salesforce-revenue-cloud" onClick={handleNavItemClick}> Salesforce CPQ to Revenue Cloud</NavLink></li>
//                             </ul>
//                         </li>




//                         <li className="nav-item">
//                             <NavLink
//                                 className={({ isActive }) =>
//                                     `nav-link ${isActive ? "active-link" : ""}`
//                                 }
//                                 to="/contact"
//                                 onClick={handleNavItemClick}
//                             >
//                                 Contact
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right side */}
//                 {/* <div className="align-items-center d-none">
//                     <img
//                         src={saalLogo}
//                         alt=""
//                         style={{
//                             width: "50%"
//                         }}
//                     />
//                 </div> */}
//                 <div className="justify-content-center align-content-center d-none d-lg-block">

//                     <div className="d-flex text-center align-items-center">
//                         <img
//                             src={flag1}
//                             alt="UK Flag"
//                             style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
//                         />
//                         <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>UK: (+44) 0121 818 6924</p>
//                     </div>
//                     {/*  */}
//                     <div className="d-flex align-items-center">
//                         <img
//                             src={flag3}
//                             alt="USA Flag"
//                             style={{ width: "15px", height: "13px", marginRight: "6px" }}
//                         />
//                         <span className="align-items-center" style={{ fontSize: ".9rem" }}>USA: (+1) 201 623 3132</span>
//                     </div>
//                     {/*  */}
//                     <div className="d-flex align-items-center p-0">
//                         <img
//                             src={flag2}
//                             alt="UK Flag"
//                             style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
//                         />
//                         <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>India : (+91) 9717116432</p>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;