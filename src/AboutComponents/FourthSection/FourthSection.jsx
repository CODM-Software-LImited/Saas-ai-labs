import { Link } from 'react-router-dom';
import Dotbtn from '../../utils/Dotbtn/Dotbtn.jsx';
import './fourthSection.css';

import admin from '../../assets/imgs/Certifications/Admin.png';
import appArchitect from '../../assets/imgs/Certifications/ApplicationArchitect.png';
import agentforce from '../../assets/imgs/Certifications/Certified-Agentforce.png';
import sfba from '../../assets/imgs/Certifications/SFBA.png';
import cpq from '../../assets/imgs/Certifications/CPQ.png';
import dataArchitect from '../../assets/imgs/Certifications/DataArchitect.png';
import omniConsultant from '../../assets/imgs/Certifications/OmniStudioConsultant.png';
import omniDeveloper from '../../assets/imgs/Certifications/OmniStudioDeveloper.png';
import platformAppBuilder from '../../assets/imgs/Certifications/PlatformAppBuilder.png';
import pd1 from '../../assets/imgs/Certifications/PD1.png';
import pd2 from '../../assets/imgs/Certifications/PD2.png';
import serviceCloud from '../../assets/imgs/Certifications/ServiceCloudConsultant.png';

import cyberEssentials from '../../assets/imgs/cta-15/cyber-essentials-logo.png';
import gearset from '../../assets/imgs/cta-15/gearset-logo.png';
import googleCloud from '../../assets/imgs/cta-15/googlecloud-logo.png';
import salesforcePartner from '../../assets/imgs/cta-15/saleforce-logo.png';
import iso from '../../assets/imgs/cta-15/isologo.png';
import gca from '../../assets/imgs/gcloud/gca-supplier-black.png';

const certifications = [
  { src: admin, name: 'Administrator', track: 'Admin' },
  { src: appArchitect, name: 'Application Architect', track: 'Architect' },
  { src: dataArchitect, name: 'Data Architect', track: 'Architect' },
  { src: agentforce, name: 'Agentforce Specialist', track: 'AI' },
  { src: sfba, name: 'Business Analyst', track: 'Consultant' },
  { src: cpq, name: 'CPQ Specialist', track: 'Consultant' },
  { src: serviceCloud, name: 'Service Cloud Consultant', track: 'Consultant' },
  { src: omniConsultant, name: 'OmniStudio Consultant', track: 'Consultant' },
  { src: omniDeveloper, name: 'OmniStudio Developer', track: 'Developer' },
  { src: platformAppBuilder, name: 'Platform App Builder', track: 'Developer' },
  { src: pd1, name: 'Platform Developer I', track: 'Developer' },
  { src: pd2, name: 'Platform Developer II', track: 'Developer' },
];

const accreditations = [
  { src: salesforcePartner, name: 'Salesforce Consulting Partner', note: 'Official partner programme' },
  { src: gca, name: 'G-Cloud 15 Supplier', note: 'Lot 3: Cloud Support · RM1557.15', to: '/g-cloud-15' },
  { src: cyberEssentials, name: 'Cyber Essentials', note: 'UK Government-backed security standard' },
  { src: iso, name: 'ISO Certified', note: 'International management standards' },
  { src: googleCloud, name: 'Google Cloud Partner', note: 'Cloud infrastructure & AI services' },
  { src: gearset, name: 'Gearset', note: 'Salesforce DevOps & release management' },
];

const summary = [
  { value: '12', label: 'Salesforce certifications' },
  { value: '5', label: 'Certification tracks' },
  { value: '6', label: 'Accreditations & partnerships' },
];

const FourthSection = () => {
  return (
    <section className="crt-section">
      <div className="container">
        {/* Header */}
        <div className="crt-header">
          <div className="d-flex justify-content-center">
            <Dotbtn text="Our Excellence" />
          </div>
          <h2 className="crt-heading">
            Certified Expertise,{' '}
            <span className="crt-highlight">Proven Credentials</span>
          </h2>
          <p className="crt-subtitle">
            Our team holds Salesforce certifications across admin, architect,
            consultant, developer and AI tracks, backed by recognised security
            and partner accreditations.
          </p>

          <div className="crt-summary" aria-label="Certification summary">
            {summary.map((s) => (
              <div className="crt-summary-item" key={s.label}>
                <span className="crt-summary-value">{s.value}</span>
                <span className="crt-summary-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Salesforce certifications */}
        <div className="crt-grid" data-aos="fade-up">
          {certifications.map((c) => (
            <div className="crt-card" key={c.name}>
              <div className="crt-badge">
                <img src={c.src} alt={`Salesforce Certified ${c.name}`} loading="lazy" />
              </div>
              <h3 className="crt-name">{c.name}</h3>
              <span className={`crt-track crt-track--${c.track.toLowerCase()}`}>{c.track}</span>
            </div>
          ))}
        </div>

        {/* Accreditations & partnerships */}
        <div className="crt-accred" data-aos="fade-up">
          <div className="crt-accred-head">
            <span className="crt-accred-eyebrow">Accreditations &amp; partnerships</span>
          </div>
          <div className="crt-accred-grid">
            {accreditations.map((a) => {
              const inner = (
                <>
                  <div className="crt-accred-logo">
                    <img src={a.src} alt={a.name} loading="lazy" />
                  </div>
                  <div className="crt-accred-body">
                    <span className="crt-accred-name">{a.name}</span>
                    <span className="crt-accred-note">{a.note}</span>
                  </div>
                </>
              );
              return a.to ? (
                <Link to={a.to} className="crt-accred-item crt-accred-item--link" key={a.name}>
                  {inner}
                </Link>
              ) : (
                <div className="crt-accred-item" key={a.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
