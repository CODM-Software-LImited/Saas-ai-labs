import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCloud,
  FiCode,
  FiDatabase,
  FiLifeBuoy,
  FiPhone,
} from "react-icons/fi";

import "./Navbar.css";

import flag1 from "../../assets/imgs/contact-4/Flag of UK.png";
import flag2 from "../../assets/imgs/contact-4/Flag_of_India.png";
import flag3 from "../../assets/imgs/contact-4/Flag_of_the_United_States.png";

import brand from "../../config/brand";
import gcaSupplierLogo from "../../assets/imgs/gcloud/gca-supplier-black.png";

const salesforceLinks = [
  { label: "Salesforce Education Cloud", path: "/ItServices/salesforce-education-cloud" },
  { label: "Salesforce Financial Services", path: "/ItServices/salesforce-financial-services" },
  { label: "Salesforce Health & Insurance Cloud", path: "/ItServices/salesforce-health-insurance-cloud" },
  { label: "Salesforce Data Cloud", path: "/ItServices/salesforce-data-cloud" },
  { label: "Salesforce Marketing Cloud", path: "/ItServices/salesforce-marketing-cloud" },
  { label: "Salesforce Sales Cloud", path: "/ItServices/salesforce-sales-cloud" },
  { label: "Salesforce Service Cloud", path: "/ItServices/salesforce-service-cloud" },
  { label: "Salesforce Energy and Utilities Cloud", path: "/ItServices/salesforce-energy-utilities-cloud" },
  { label: "Salesforce Manufacturing Cloud", path: "/ItServices/salesforce-manufacturing-cloud" },
  { label: "Salesforce Nonprofit Cloud", path: "/ItServices/salesforce-nonprofit-cloud" },
];

const dataLinks = [
  { label: "API Integration", path: "/ItServices/api-integration" },
  { label: "Data Integration", path: "/ItServices/data-integration" },
  { label: "Data Migration", path: "/ItServices/data-migration" },
];

const developmentLinks = [
  { label: "CRM Development", path: "/ItServices/crm-development" },
  { label: "Building LLM", path: "/ItServices/building-llm" },
  { label: ".NET Application", path: "/ItServices/dotnet-application-development" },
  { label: "React Application", path: "/ItServices/react-application-development" },
  { label: "Python Application", path: "/ItServices/python-application-development" },
];

const supportLinks = [
  { label: "Technical Support", path: "/ItServices/technical-support" },
  { label: "Deployment Support", path: "/ItServices/deployment-support" },
];

const blogLinks = [
  { label: "Integration Framework", path: "/blog/integration-framework" },
  { label: "Trigger Framework", path: "/blog/trigger-framework" },
  { label: "Pharmaceutical Dashboard", path: "/blog/ai-powered-dashboard" },
  { label: "Agentforce Implementation", path: "/blog/salesforce-agentforce" },
  { label: "Salesforce AI + Synergy", path: "/blog/salesforce-einstein-ai-synergy" },
  { label: "Salesforce CPQ to Revenue Cloud", path: "/blog/salesforce-revenue-cloud" },
  { label: "Salesforce Financial Service Cloud", path: "/blog/agentforce-financial-services" },
  { label: "AI Powered Salesforce Development", path: "/blog/agentforce-ai" },
  { label: "Field Service automation", path: "/blog/field-service-automation" },
  { label: "LLM in Salesforce", path: "/blog/salesforce-llm-crm-automation" },
  { label: "Authentication using SSO", path: "/blog/salesforce-sso-authentication" },
  { label: "G-Cloud Framework Suppliers UK", path: "/blog/g-cloud15" },
];

const contactNumbers = [
  { flag: flag1, alt: "UK flag", label: "UK", display: "(+44) 0121 818 6924", tel: "+441218186924" },
  { flag: flag3, alt: "USA flag", label: "USA", display: "(+1) 201 623 3132", tel: "+12016233132" },
  { flag: flag2, alt: "India flag", label: "India", display: "(+91) 9717116432", tel: "+919717116432" },
];

const isCodm = brand.key === "codm_Logo";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Compact, elevated header once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change.
  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  // Escape closes menus; clicking outside closes desktop dropdowns.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [closeAll]);

  // Lock page scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Reset mobile state if the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const onChange = (e) => {
      if (e.matches) closeAll();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeAll]);

  const renderDropdownLinks = (links) =>
    links.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          `dropdown-link ${isActive ? "dropdown-link--active" : ""}`
        }
        onClick={closeAll}
      >
        <span>{item.label}</span>
        <FiArrowRight className="dropdown-link-arrow" aria-hidden="true" />
      </NavLink>
    ));

  const renderMobileLinks = (links) =>
    links.map((item) => (
      <li key={item.path}>
        <NavLink to={item.path} onClick={closeAll}>
          {item.label}
        </NavLink>
      </li>
    ));

  // Plain render helper (not a nested component) so the button keeps focus
  // across re-renders for keyboard users.
  const renderArrow = ({ menu, label, controls }) => (
    <button
      type="button"
      className="dropdown-arrow-btn"
      onClick={() => toggleDropdown(menu)}
      aria-label={label}
      aria-expanded={openDropdown === menu}
      aria-controls={controls}
    >
      <MdKeyboardArrowDown
        className={openDropdown === menu ? "rotate" : ""}
        aria-hidden="true"
      />
    </button>
  );

  const contactList = (className) => (
    <div className={className}>
      {contactNumbers.map((c) => (
        <a key={c.tel} href={`tel:${c.tel}`} className="contact-line">
          <img src={c.flag} alt={c.alt} />
          <span className="contact-line-label">{c.label}</span>
          <span className="contact-line-number">{c.display}</span>
        </a>
      ))}
    </div>
  );

  return (
    <header
      ref={navRef}
      className={`custom-navbar ${scrolled ? "is-scrolled" : ""} ${
        mobileOpen ? "menu-open" : ""
      }`}
    >
      <nav className="nav-container" aria-label="Primary">
        {/* Brand */}
        <Link className="nav-brand" to="/" onClick={closeAll}>
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
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="primary-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div
          id="primary-menu"
          className={`nav-menu-wrapper ${mobileOpen ? "show" : ""}`}
        >
          <ul className="nav-menu">
            {/* Home */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/"
                end
                onClick={closeAll}
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/about"
                onClick={closeAll}
              >
                About
              </NavLink>
            </li>

            {/* Services */}
            <li
              className={`nav-item mega-dropdown ${
                openDropdown === "service" ? "is-open" : ""
              }`}
            >
              <div className="nav-dropdown-head">
                <NavLink
                  to="/ItServices"
                  className={({ isActive }) =>
                    `nav-link dropdown-main-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={closeAll}
                >
                  Services
                </NavLink>
                {renderArrow({ menu: "service", label: "Toggle services menu", controls: "services-menu" })}
              </div>

              {/* Desktop Services Mega Menu */}
              <div className="mega-menu services-menu" id="services-menu">
                <div className="mega-grid">
                  <div className="mega-column salesforce-column">
                    <h6>
                      <FiCloud aria-hidden="true" /> Salesforce CRM
                    </h6>
                    <div className="salesforce-grid">
                      <div>{renderDropdownLinks(salesforceLinks.slice(0, 5))}</div>
                      <div>{renderDropdownLinks(salesforceLinks.slice(5))}</div>
                    </div>
                  </div>

                  <div className="mega-column">
                    <h6>
                      <FiDatabase aria-hidden="true" /> Data
                    </h6>
                    {renderDropdownLinks(dataLinks)}
                  </div>

                  <div className="mega-column">
                    <h6>
                      <FiCode aria-hidden="true" /> Development
                    </h6>
                    {renderDropdownLinks(developmentLinks)}
                  </div>

                  <div className="mega-column">
                    <h6>
                      <FiLifeBuoy aria-hidden="true" /> Support
                    </h6>
                    {renderDropdownLinks(supportLinks)}
                  </div>
                </div>

                <div className="mega-footer">
                  {/* G-Cloud 15 promo strip */}
                  {isCodm && (
                    <Link to="/g-cloud-15" className="mega-gcloud" onClick={closeAll}>
                      <img
                        src={gcaSupplierLogo}
                        alt="Government Commercial Agency Supplier"
                        className="mega-gcloud-logo"
                      />
                      <div className="mega-gcloud-text">
                        <span className="mega-gcloud-title">
                          G&#8209;Cloud 15 &middot; Lot 3: Cloud Support
                        </span>
                        <span className="mega-gcloud-sub">
                          Salesforce, AI, integration, data and cloud application
                          services for the public sector
                        </span>
                      </div>
                      <span className="mega-gcloud-cta">
                        Explore G&#8209;Cloud 15 <FiArrowRight aria-hidden="true" />
                      </span>
                    </Link>
                  )}

                  <Link to="/ItServices" className="mega-all" onClick={closeAll}>
                    View all services <FiArrowRight aria-hidden="true" />
                  </Link>
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

                {isCodm && (
                  <>
                    <li className="accordion-title">Public Sector</li>
                    <li>
                      <NavLink to="/g-cloud-15" onClick={closeAll}>
                        G&#8209;Cloud 15 &middot; Cloud Support
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </li>

            {/* Blogs */}
            <li
              className={`nav-item small-dropdown ${
                openDropdown === "blog" ? "is-open" : ""
              }`}
            >
              <div className="nav-dropdown-head">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `nav-link dropdown-main-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={closeAll}
                >
                  Blogs
                </NavLink>
                {renderArrow({ menu: "blog", label: "Toggle blog menu", controls: "blog-menu" })}
              </div>

              {/* Desktop Blog Dropdown */}
              <div className="small-menu blog-menu" id="blog-menu">
                <h6 className="small-menu-title">
                  <FiBookOpen aria-hidden="true" /> Latest insights
                </h6>
                <div className="blog-grid">{renderDropdownLinks(blogLinks)}</div>
                <Link to="/blog" className="small-menu-all" onClick={closeAll}>
                  View all articles <FiArrowRight aria-hidden="true" />
                </Link>
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
            {isCodm ? (
              <li
                className={`nav-item small-dropdown partner-dropdown-wrapper ${
                  openDropdown === "partner" ? "is-open" : ""
                }`}
              >
                <div className="nav-dropdown-head">
                  <button
                    type="button"
                    className="nav-link dropdown-main-link nav-link--button"
                    onClick={() => toggleDropdown("partner")}
                    aria-expanded={openDropdown === "partner"}
                    aria-controls="partner-menu"
                  >
                    Partner
                  </button>
                  {renderArrow({ menu: "partner", label: "Toggle partner menu", controls: "partner-menu" })}
                </div>

                <div className="small-menu partner-menu" id="partner-menu">
                  <a
                    className="dropdown-link"
                    href="https://saasailabs.codmsoftware.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeAll}
                  >
                    <span>SAAS AI Labs</span>
                    <FiArrowUpRight className="dropdown-link-arrow" aria-hidden="true" />
                  </a>
                </div>

                <ul
                  className={`mobile-accordion ${
                    openDropdown === "partner" ? "open" : ""
                  }`}
                >
                  <li>
                    <a
                      href="https://saasailabs.codmsoftware.co.uk/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeAll}
                    >
                      SAAS AI Labs
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  href="https://codmsoftware.co.uk/"
                  className="nav-link"
                  onClick={closeAll}
                >
                  Codm software
                </a>
              </li>
            )}

            {/* Contact */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/contact"
                onClick={closeAll}
              >
                Contact
              </NavLink>
            </li>

            {/* Join Us */}
            <li className="nav-item nav-item--cta">
              <a
                href="https://www.linkedin.com/company/saas-ai-labs/jobs/"
                target="_blank"
                rel="noreferrer"
                className="join-btn"
                onClick={closeAll}
              >
                Join Us <FiArrowUpRight aria-hidden="true" />
              </a>
            </li>
          </ul>

          {/* Contact numbers inside the mobile sheet */}
          <div className="nav-mobile-contact">
            <p className="nav-mobile-contact-title">
              <FiPhone aria-hidden="true" /> Talk to us
            </p>
            {contactList("nav-mobile-contact-list")}
          </div>
        </div>

        {/* Contact Numbers (desktop) */}
        {contactList("nav-contact")}
      </nav>

      {/* Backdrop behind the mobile sheet */}
      <div
        className="nav-backdrop"
        onClick={closeAll}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;
