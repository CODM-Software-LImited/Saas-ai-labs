import './FirstSection.css';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/imgs/About/about-hero-london.jpg';

import cyberEssentialsimg from '../../assets/imgs/cta-15/cyber-essentials-logo.png';
import gearsetlogo from '../../assets/imgs/cta-15/gearset-logo.png';
import googlecloudlogo from '../../assets/imgs/cta-15/googlecloud-logo.png';
import salesforcelogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import isologo from '../../assets/imgs/cta-15/isologo.png';
import gcalogo from '../../assets/imgs/gcloud/gca-supplier-black.png';

const stats = [
  { value: '2023', label: 'Established in London' },
  { value: '12+', label: 'Salesforce Certifications' },
  { value: '8+', label: 'Industries Served' },
];

const trustLogos = [
  { src: salesforcelogo, alt: 'Salesforce Partner' },
  { src: gcalogo, alt: 'Government Commercial Agency Supplier - G-Cloud 15', to: '/g-cloud-15' },
  { src: cyberEssentialsimg, alt: 'Cyber Essentials Certified' },
  { src: isologo, alt: 'ISO Certified' },
  { src: googlecloudlogo, alt: 'Google Cloud Partner' },
  { src: gearsetlogo, alt: 'Gearset' },
];

const FirstSection = () => {
  return (
    <section className="abh-section">
      <div className="abh-glow abh-glow-left" aria-hidden="true"></div>
      <div className="abh-glow abh-glow-right" aria-hidden="true"></div>

      <div className="container abh-container">
        <div className="row align-items-center g-5">
          {/* Left: copy */}
          <div className="col-12 col-lg-6 abh-left">
            <span className="abh-badge">
              <span className="abh-badge-dot"></span>
              About CODM Software
            </span>

            <h1 className="abh-title">
              Enterprise Salesforce &amp; AI expertise,{' '}
              <span className="abh-highlight">built in the UK</span>
            </h1>

            <p className="abh-lead">
              CODM Software Limited is a rapidly expanding technology consulting
              and software development company headquartered in London with
              offices in Birmingham. We deliver comprehensive, enterprise-scale
              Salesforce CRM solutions combined with cutting-edge custom
              development and AI-powered technologies.
            </p>

            <div className="abh-stats">
              {stats.map((s) => (
                <div className="abh-stat" key={s.label}>
                  <span className="abh-stat-value">{s.value}</span>
                  <span className="abh-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="abh-actions">
              <Link to="/contact" className="abh-btn abh-btn-primary">
                Work With Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/ItServices" className="abh-btn abh-btn-ghost">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: photo with floating chips */}
          <div className="col-12 col-lg-6">
            <div className="abh-visual">
              <div className="abh-imgwrap">
                <img
                  src={heroImg}
                  alt="London skyline with Tower Bridge and the City financial district"
                  className="abh-img"
                />
              </div>

              <div className="abh-chip abh-chip--top">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z" stroke="#7050f4" strokeWidth="1.8" />
                  <circle cx="12" cy="10" r="2.5" stroke="#7050f4" strokeWidth="1.8" />
                </svg>
                London &middot; Birmingham
              </div>

              <div className="abh-chip abh-chip--bottom">
                <span className="abh-chip-dot"></span>
                Salesforce Partner &middot; Agentforce
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="abh-trust" data-aos="fade-up">
          <span className="abh-trust-label">Certified, accredited &amp; listed on</span>
          <div className="abh-trust-logos">
            {trustLogos.map((l) =>
              l.to ? (
                <Link to={l.to} key={l.alt} className="abh-trust-item" title={l.alt}>
                  <img src={l.src} alt={l.alt} className="abh-trust-img" />
                </Link>
              ) : (
                <div className="abh-trust-item" key={l.alt}>
                  <img src={l.src} alt={l.alt} className="abh-trust-img" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
