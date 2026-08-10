import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./Navbar.css";

import flag1 from "../../assets/imgs/contact-4/Flag of UK.png";
import flag2 from "../../assets/imgs/contact-4/Flag_of_India.png";
import flag3 from "../../assets/imgs/contact-4/Flag_of_the_United_States.png";

import brand from "../../config/brand";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavItemClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const salesforceLinks = [
    {
      label: "Salesforce Education Cloud",
      path: "/ItServices/salesforce-education-cloud",
    },
    {
      label: "Salesforce Financial Services",
      path: "/ItServices/salesforce-financial-services",
    },
    {
      label: "Salesforce Health & Insurance Cloud",
      path: "/ItServices/salesforce-health-insurance-cloud",
    },
    {
      label: "Salesforce Data Cloud",
      path: "/ItServices/salesforce-data-cloud",
    },
    {
      label: "Salesforce Marketing Cloud",
      path: "/ItServices/salesforce-marketing-cloud",
    },
    {
      label: "Salesforce Sales Cloud",
      path: "/ItServices/salesforce-sales-cloud",
    },
    {
      label: "Salesforce Service Cloud",
      path: "/ItServices/salesforce-service-cloud",
    },
    {
      label: "Salesforce Energy and Utilities Cloud",
      path: "/ItServices/salesforce-energy-utilities-cloud",
    },
    {
      label: "Salesforce Manufacturing Cloud",
      path: "/ItServices/salesforce-manufacturing-cloud",
    },
    {
      label: "Salesforce Nonprofit Cloud",
      path: "/ItServices/salesforce-nonprofit-cloud",
    },
  ];

  const dataLinks = [
    {
      label: "API Integration",
      path: "/ItServices/api-integration",
    },
    {
      label: "Data Integration",
      path: "/ItServices/data-integration",
    },
    {
      label: "Data Migration",
      path: "/ItServices/data-migration",
    },
  ];

  const developmentLinks = [
    {
      label: "CRM Development",
      path: "/ItServices/crm-development",
    },
    {
      label: "Building LLM",
      path: "/ItServices/building-llm",
    },
    {
      label: ".NET Application",
      path: "/ItServices/dotnet-application-development",
    },
    {
      label: "React Application",
      path: "/ItServices/react-application-development",
    },
    {
      label: "Python Application",
      path: "/ItServices/python-application-development",
    },
  ];

  const supportLinks = [
    {
      label: "Technical Support",
      path: "/ItServices/technical-support",
    },
    {
      label: "Deployment Support",
      path: "/ItServices/deployment-support",
    },
  ];

  const blogLinks = [
    {
      label: "Integration Framework",
      path: "/blog/integration-framework",
    },
    {
      label: "Trigger Framework",
      path: "/blog/trigger-framework",
    },
    {
      label: "Pharmaceutical Dashboard",
      path: "/blog/ai-powered-dashboard",
    },
    {
      label: "Agentforce Implementation",
      path: "/blog/salesforce-agentforce",
    },
    {
      label: "Salesforce AI + Synergy",
      path: "/blog/salesforce-einstein-ai-synergy",
    },
    {
      label: "Salesforce CPQ to Revenue Cloud",
      path: "/blog/salesforce-revenue-cloud",
    },
    {
      label: "Salesforce Financial Service Cloud",
      path: "/blog/agentforce-financial-services",
    },
    {
      label: "AI Powered Salesforce Development",
      path: "/blog/agentforce-ai",
    },
    {
      label: "Field Service automation",
      path: "/blog/field-service-automation",
    },
    {
      label: "LLM in Salesforce",
      path: "/blog/salesforce-llm-crm-automation",
    },
    {
      label: "Authentication using SSO",
      path: "/blog/salesforce-sso-authentication",
    },
  ];

  const renderDropdownLinks = (links) =>
    links.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="dropdown-link"
        onClick={handleNavItemClick}
      >
        {item.label}
      </Link>
    ));

  const renderMobileLinks = (links) =>
    links.map((item) => (
      <li key={item.path}>
        <NavLink to={item.path} onClick={handleNavItemClick}>
          {item.label}
        </NavLink>
      </li>
    ));

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Brand */}
        <Link className="nav-brand" to="/" onClick={handleNavItemClick}>
          <img
            src={brand.logo}
            alt={brand.name}
            className={`brand-logo ${brand.key}`}
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div className={`nav-menu-wrapper ${mobileOpen ? "show" : ""}`}>
          <ul className="nav-menu">
            {/* Home */}
            <li className="nav-item">
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

            {/* About */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-sm-2 ${isActive ? "active-link" : ""}`
                }
                to="/about"
                onClick={handleNavItemClick}
              >
                About
              </NavLink>
            </li>

            {/* Services */}
            <li className="nav-item mega-dropdown">
              <div className="nav-dropdown-head">
                <NavLink
                  to="/ItServices"
                  className="nav-link dropdown-main-link"
                  onClick={handleNavItemClick}
                >
                  Services
                </NavLink>

                <button
                  type="button"
                  className="dropdown-arrow-btn"
                  onClick={() => toggleDropdown("service")}
                  aria-label="Toggle services dropdown"
                >
                  <MdKeyboardArrowDown
                    className={openDropdown === "service" ? "rotate" : ""}
                  />
                </button>
              </div>

              {/* Desktop Services Mega Menu */}
              <div className="mega-menu services-menu">
                <div className="mega-grid">
                  <div className="mega-column salesforce-column">
                    <h6>Salesforce CRM</h6>

                    <div className="salesforce-grid">
                      <div>{renderDropdownLinks(salesforceLinks.slice(0, 5))}</div>
                      <div>{renderDropdownLinks(salesforceLinks.slice(5))}</div>
                    </div>
                  </div>

                  <div className="mega-column">
                    <h6>Data</h6>
                    {renderDropdownLinks(dataLinks)}
                  </div>

                  <div className="mega-column">
                    <h6>Development</h6>
                    {renderDropdownLinks(developmentLinks)}
                  </div>

                  <div className="mega-column">
                    <h6>Support</h6>
                    {renderDropdownLinks(supportLinks)}
                  </div>
                </div>
              </div>

              {/* Mobile Services Accordion */}
              <ul
                className={`mobile-accordion ${
                  openDropdown === "service" ? "open" : ""
                }`}
              >
                <li className="accordion-title">Salesforce CRM</li>
                {renderMobileLinks(salesforceLinks)}

                <li className="accordion-title">Data</li>
                {renderMobileLinks(dataLinks)}

                <li className="accordion-title">Development</li>
                {renderMobileLinks(developmentLinks)}

                <li className="accordion-title">Support</li>
                {renderMobileLinks(supportLinks)}
              </ul>
            </li>

            {/* Blogs */}
            <li className="nav-item small-dropdown">
              <div className="nav-dropdown-head">
                <NavLink
                  to="/blog"
                  className="nav-link dropdown-main-link"
                  onClick={handleNavItemClick}
                >
                  Blogs
                </NavLink>

                <button
                  type="button"
                  className="dropdown-arrow-btn"
                  onClick={() => toggleDropdown("blog")}
                  aria-label="Toggle blog dropdown"
                >
                  <MdKeyboardArrowDown
                    className={openDropdown === "blog" ? "rotate" : ""}
                  />
                </button>
              </div>

              {/* Desktop Blog Dropdown */}
              <div className="small-menu">
                {renderDropdownLinks(blogLinks)}
              </div>

              {/* Mobile Blog Accordion */}
              <ul
                className={`mobile-accordion ${
                  openDropdown === "blog" ? "open" : ""
                }`}
              >
                {renderMobileLinks(blogLinks)}
              </ul>
            </li>

            {/* Partner */}

            {/* Partner */}
{brand.key === "codm_Logo" ? (
  <li className="nav-item partner-dropdown-wrapper">
    <div className="nav-dropdown-head">
      <span className="nav-link dropdown-main-link">Partner</span>

      <button
        type="button"
        className="dropdown-arrow-btn"
        onClick={() => toggleDropdown("partner")}
        aria-label="Toggle partner dropdown"
      >
        <MdKeyboardArrowDown
          className={openDropdown === "partner" ? "rotate" : ""}
        />
      </button>
    </div>

    <ul
      className={`partner-dropdown ${
        openDropdown === "partner" ? "partner-open" : ""
      }`}
    >
      <li>
        <NavLink
          className="dropdown-link"
          to="https://saasailabs.codmsoftware.co.uk/"
          target="_blank"
          onClick={handleNavItemClick}
        >
          SAAS AI LABS
        </NavLink>
      </li>
    </ul>
  </li>
) : (
  <li className="nav-item">
    <a
      href="https://codmsoftware.co.uk/"
      className="nav-link"
      onClick={handleNavItemClick}
    >
      Codm software
    </a>
  </li>
)}
            {/* {
            brand.key === "codm_Logo" ? (
              <li className="nav-item partner-dropdown-wrapper">
                <div
                  className="nav-dropdown-head partner-head"
                  onClick={() => toggleDropdown("partner")}
                >
                  <span className="nav-link">Partner</span>

                  <MdKeyboardArrowDown
                    className={openDropdown === "partner" ? "rotate" : ""}
                  />
                </div>

                <ul
                  className={`partner-dropdown ${
                    openDropdown === "partner" ? "partner-open" : ""
                  }`}
                >
                  <li>
                    <NavLink
                      className="dropdown-link"
                      to="https://saasailabs.codmsoftware.co.uk/"
                      target="_blank"
                      onClick={handleNavItemClick}
                    >
                      SAAS AI LABS
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  href="https://codmsoftware.co.uk/"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Codm software
                </a>
              </li>
            )} */}

            {/* Contact */}
            <li className="nav-item">
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

            {/* Join Us */}
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/company/saas-ai-labs/jobs/"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavItemClick}
              >
                <button type="button" className="join-btn">
                  Join Us
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Numbers */}
        <div className="nav-contact">
          <div className="contact-line">
            <img src={flag1} alt="UK Flag" />
            <p>UK: (+44) 0121 818 6924</p>
          </div>

          <div className="contact-line">
            <img src={flag3} alt="USA Flag" />
            <p>USA: (+1) 201 623 3132</p>
          </div>

          <div className="contact-line">
            <img src={flag2} alt="India Flag" />
            <p>India : (+91) 9717116432</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
