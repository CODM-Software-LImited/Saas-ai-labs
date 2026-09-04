import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
import bgImg from "../../assets/imgs/hero-1/background.png";

import gcaSupplierLogo from "../../assets/imgs/gcloud/gca-supplier-black.png";
import AnimatedPill from "./AnimatedPill";
import saleforceLogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import Appexchangelogo from '../../assets/imgs/cta-15/Appexchange_logo.png';
import { Link } from "react-router-dom";
import "./Hero.css";

const stats = [
  { value: '8+', label: 'Industries Served' },
  { value: '50+', label: 'Implementations' },
  { value: '300%+', label: 'Average ROI' },
];

function Hero() {
  return (
    <section className="hero-Section hero">
      <div className="cdmh-glow cdmh-glow-left" aria-hidden="true"></div>
      <div className="cdmh-glow cdmh-glow-right" aria-hidden="true"></div>

      <div className="container heroContainer">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-lg-6 cdmh-left">
            <span className="cdmh-badge">
              <span className="cdmh-badge-dot"></span>
              Salesforce Partner &middot; AgentForce
            </span>

            <h1 className="cdmh-title">
              AI-Driven Enterprise Software Solutions Built for{' '}
              <span className="cdmh-highlight">Scale and Innovation</span>
            </h1>

            <p className="cdmh-lead">
              We deliver enterprise-scale Salesforce solutions and AI-driven
              transformations that create measurable business impact — from Sales
              Cloud optimization to intelligent automation, our certified experts
              modernize, streamline, and scale your operations.
            </p>

            <div className="cdmh-stats">
              {stats.map((s) => (
                <div className="cdmh-stat" key={s.label}>
                  <span className="cdmh-stat-value">{s.value}</span>
                  <span className="cdmh-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="cdmh-actions">
              <Link to="/ItServices" className="cdmh-btn cdmh-btn-primary">
                Explore Our Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/contact" className="cdmh-btn cdmh-btn-ghost">
                Talk to Us
              </Link>
            </div>

            <div className="cdmh-trust">
              <span className="cdmh-trust-label">Certified &amp; listed on</span>
              <div className="cdmh-trust-logos">
                <Link to="/g-cloud-15" title="G-Cloud 15 Cloud Support Services">
                  <img
                    src={gcaSupplierLogo}
                    alt="Government Commercial Agency Supplier - G-Cloud 15"
                    className="cdmh-trust-img"
                  />
                </Link>
                <img src={saleforceLogo} alt="Salesforce Partner" className="cdmh-trust-img" />
                <img src={Appexchangelogo} alt="Available on Salesforce AppExchange" className="cdmh-trust-img" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6 cdmh-right">
            <div className="rightsidePillSection">
              <div className="animatedPillsContainer">
                <div className="animatedPills1"><AnimatedPill text="CRM" /></div>
                <div className="animatedPills2"><AnimatedPill text="LLM" /></div>
                <div className="animatedPills3"><AnimatedPill text="EINSTEIN" /></div>
                <div className="animatedPills4"><AnimatedPill text="AI" /></div>
                <div className="animatedPills5"><AnimatedPill text="AgentForce" /></div>
                <div className="animatedPills6"><AnimatedPill text="Salesforce" /></div>
              </div>

              <div
                className="robot_Container d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  src={robotImg}
                  alt="CODM AI agent robot"
                  className="hero-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
