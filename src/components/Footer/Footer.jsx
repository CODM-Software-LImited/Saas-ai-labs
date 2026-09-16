import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../assets/imgs/template/image17.png";
import saalLogo from "../../assets/imgs/template/saalaiLogo.png";
import ellipseright from "../../assets/imgs/footer-1/ellipse-right.png";
import linebg from "../../assets/imgs/footer-1/line-bg.png";
import flagUK from "../../assets/imgs/contact-4/Flag of UK.png";
import flagUS from "../../assets/imgs/contact-4/Flag_of_the_United_States.png";
import flagIN from "../../assets/imgs/contact-4/Flag_of_India.png";

import brand from "../../config/brand";
import { BOOKING_URL } from "../../data/products";
import "./Footer.css";

const services = [
  { label: "Salesforce CRM", to: "/ItServices/crm-development" },
  { label: "Education Cloud", to: "/ItServices/salesforce-education-cloud" },
  { label: "Financial Services", to: "/ItServices/salesforce-financial-services" },
  { label: "Connecting your systems", to: "/ItServices/api-integration" },
  { label: "AI and chatbots", to: "/ItServices/building-llm" },
  { label: "Web applications", to: "/ItServices/react-application-development" },
  { label: "Ongoing support", to: "/ItServices/technical-support" },
];

const company = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/ItServices" },
  { label: "Products", to: "/products" },
  { label: "FUTURA", to: "/products/futura" },
  { label: "Blog", to: "/blog" },
  { label: "G‑Cloud 15", to: "/g-cloud-15" },
];

const phones = [
  { flag: flagUK, label: "UK", display: "(+44) 0121 818 6924", tel: "+441218186924" },
  { flag: flagUS, label: "USA", display: "(+1) 201 623 3132", tel: "+12016233132" },
  { flag: flagIN, label: "India", display: "(+91) 9717116432", tel: "+919717116432" },
];

const offices = [
  { flag: flagUK, text: "Edmund House, 12-22 Newhall St, Birmingham B3 3AS" },
  { flag: flagUK, text: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ" },
  { flag: flagUS, text: "4501 Nightland Dr, Plano, TX 75024, USA" },
];

function Footer() {
  return (
    <>
      {brand.name === "CODM Software" && (
        <div className="container py-4">
          <p
            className="text-center mb-0"
            style={{ fontSize: "13px", color: "#6b7280", fontWeight: 500 }}
          >
            CODM Software Limited has been named as a supplier on Government
            Commercial Agency&rsquo;s{" "}
            <Link
              to="/g-cloud-15"
              style={{ color: "#6d4df2", textDecoration: "none", fontWeight: 600 }}
            >
              RM1557.15 G&#8209;Cloud 15 framework, Lot 3: Cloud Support
            </Link>
            .
          </p>
        </div>
      )}

      <footer
        className="footer"
        style={{ backgroundImage: `url(${ellipseright}),url(${linebg})` }}
      >
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <a href="https://codmsoftware.co.uk/" target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt="CODM Software" />
                </a>
                <a
                  href="https://saasailabs.codmsoftware.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={saalLogo} alt="SaaS AI Labs" className="saalLogo" />
                </a>
              </div>

              <p className="footer-text">
                We help organisations work smarter with Salesforce, AI and
                custom software, and we stay with you after launch.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn"
              >
                Book a free call <FiArrowRight aria-hidden="true" />
              </a>

              <div className="footer-socials">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/codm-software-limited/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7fU84Na9QuC7dPDVMpuGVQ"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-heading">What we do</h4>
              <ul className="footer-list">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link className="footer-link" to={s.to}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link className="footer-link" to={c.to}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col footer-col--contact">
              <h4 className="footer-heading">Get in touch</h4>
              <ul className="footer-contact">
                {phones.map((p) => (
                  <li key={p.label}>
                    <FiPhone className="footer-contact-icon" aria-hidden="true" />
                    <a href={`tel:${p.tel}`} className="footer-contact-link">
                      <img src={p.flag} alt="" className="footer-flag" />
                      <span className="footer-contact-label">{p.label}</span>
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <FiMail className="footer-contact-icon" aria-hidden="true" />
                  <a href="mailto:info@codmsoftware.co.uk" className="footer-contact-link">
                    info@codmsoftware.co.uk
                  </a>
                </li>
                {offices.map((o) => (
                  <li key={o.text}>
                    <FiMapPin className="footer-contact-icon" aria-hidden="true" />
                    <span className="footer-office">
                      <img src={o.flag} alt="" className="footer-flag" />
                      {o.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="footer-company-no">Company number 15333870</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
