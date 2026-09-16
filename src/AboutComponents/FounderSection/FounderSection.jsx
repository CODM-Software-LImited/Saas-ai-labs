import './FounderSection.css';
import founderImg from '../../../src/assets/vinodImg.jpg';
import DotBtn from '../../utils/Dotbtn/Dotbtn';
import { Link } from 'react-router-dom';

const focus = [
  'Salesforce consulting & enterprise architecture',
  'AI-powered development and Agentforce adoption',
  'Measurable, outcome-led delivery for every client',
];

const FounderSection = () => {
  return (
    <section className="fdr-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Content */}
          <div className="col-lg-7 fdr-content">
            <DotBtn text="Meet the Founder" />

            <h2 className="fdr-title">
              Driving Innovation{' '}
              <span className="fdr-highlight">Through Technology</span>
            </h2>

            <p className="fdr-desc">
              With a passion for transforming businesses through intelligent
              technology solutions, our founder Vinod Kumar brings years of experience in
              Salesforce consulting, enterprise architecture, and AI-powered
              development. That vision continues to guide CODM Software in
              delivering exceptional value and measurable impact for clients
              across the globe.
            </p>

            <ul className="fdr-list">
              {focus.map((f) => (
                <li key={f} className="fdr-item">
                  <svg className="fdr-check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" />
                    <path d="M7 12.5l3.2 3L17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="fdr-btn">
              Book a Conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Portrait card */}
          <div className="col-lg-5">
            <div className="fdr-card" data-aos="fade-left">
              <div className="fdr-portrait">
                <img src={founderImg} alt="Vinod Kumar, Founder of CODM Software" className="fdr-img" />
              </div>
              <div className="fdr-card-body">
                <span className="fdr-card-name">Vinod Kumar</span>
                <span className="fdr-card-role">Founder &amp; Director</span>
                <span className="fdr-card-company">CODM Software Limited</span>
                <a
                  href="https://www.linkedin.com/in/vinod-kumar-a1477954/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fdr-linkedin"
                  aria-label="Vinod Kumar on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
              <blockquote className="fdr-quote">
                &ldquo;Technology only matters when it changes how a business
                works for the better.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
