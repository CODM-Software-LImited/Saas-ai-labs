import './ContactSection_FirstSection.css';
import heroImg from '../../assets/imgs/Contact/contact-hero.jpg';

const quickLinks = [
  {
    label: 'Email us',
    value: 'info@codmsoftware.co.uk',
    href: 'mailto:info@codmsoftware.co.uk',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Call UK',
    value: '+44 121 818 6924',
    href: 'tel:+441218186924',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.9 4.75H6.07C5.34 4.75 4.75 5.34 4.75 6.07c0 7.28 5.9 13.18 13.18 13.18.73 0 1.32-.59 1.32-1.32v-2.82l-3.1-2.07-1.62 1.61c-.28.28-.7.37-1.05.19a10.3 10.3 0 0 1-2.52-1.8 10.3 10.3 0 0 1-1.84-2.54c-.16-.34-.07-.73.2-1L10.96 7.86 8.9 4.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Head office',
    value: 'Covent Garden, London',
    href: '#contact-offices',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

const ContactSection_FirstSection = () => {
  return (
    <section className="ch-section">
      <div className="ch-glow ch-glow-left" aria-hidden="true"></div>
      <div className="ch-glow ch-glow-right" aria-hidden="true"></div>

      <div className="container ch-container">
        <div className="row align-items-center g-5">
          {/* Left: copy */}
          <div className="col-12 col-lg-6 ch-left">
            <span className="ch-badge">
              <span className="ch-badge-dot"></span>
              Contact us
            </span>

            <h1 className="ch-title">
              Let&apos;s talk about your{' '}
              <span className="ch-highlight">next project</span>
            </h1>

            <p className="ch-lead">
              Whether you are planning a Salesforce rollout, exploring AI and
              Agentforce, or need a partner to support what you already run,
              our team is ready to help. Tell us what you are working on and
              a consultant will come back to you within one business day.
            </p>

            <ul className="ch-quick" aria-label="Quick contact options">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <a href={q.href} className="ch-quick-item">
                    <span className="ch-quick-icon">{q.icon}</span>
                    <span className="ch-quick-text">
                      <span className="ch-quick-label">{q.label}</span>
                      <span className="ch-quick-value">{q.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="ch-actions">
              <a href="#contact-form" className="ch-btn ch-btn-primary">
                Send a message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+441218186924" className="ch-btn ch-btn-ghost">
                Book a call
              </a>
            </div>
          </div>

          {/* Right: photo with floating chips */}
          <div className="col-12 col-lg-6">
            <div className="ch-visual">
              <div className="ch-imgwrap">
                <img
                  src={heroImg}
                  alt="CODM consultants greeting a client at the start of a project"
                  className="ch-img"
                  fetchPriority="high"
                />
              </div>

              <div className="ch-chip ch-chip--top">
                <span className="ch-chip-dot"></span>
                Replies within 24 hours
              </div>

              <div className="ch-chip ch-chip--bottom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" stroke="#7050f4" strokeWidth="1.8" />
                  <path d="M3.5 12h17M12 3.5c2.5 2.6 3.7 5.4 3.7 8.5s-1.2 5.9-3.7 8.5c-2.5-2.6-3.7-5.4-3.7-8.5S9.5 6.1 12 3.5z" stroke="#7050f4" strokeWidth="1.8" />
                </svg>
                London &middot; Birmingham &middot; Plano &middot; Noida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection_FirstSection;
