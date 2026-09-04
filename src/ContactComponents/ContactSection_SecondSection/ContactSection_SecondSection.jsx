import './ContactSection_SecondSection.css';
import CountUp from '../../utils/CountUp/CountUp';
import DotBtn from '../../utils/Dotbtn/Dotbtn';

import flagUK from '../../assets/imgs/contact-4/Flag of UK.png';
import flagIN from '../../assets/imgs/contact-4/Flag_of_India.png';
import flagUS from '../../assets/imgs/contact-4/Flag_of_the_United_States.png';

const counters = [
  { end: 24, suffix: 'h', label: 'Average first response on business days' },
  { end: 4, suffix: '', label: 'Offices across the UK, USA and India' },
  { end: 12, suffix: '+', label: 'Certified Salesforce specialists on hand' },
  { end: 3, suffix: '', label: 'Time zones covered for support' },
];

const IconMail = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8.9 4.75H6.07C5.34 4.75 4.75 5.34 4.75 6.07c0 7.28 5.9 13.18 13.18 13.18.73 0 1.32-.59 1.32-1.32v-2.82l-3.1-2.07-1.62 1.61c-.28.28-.7.37-1.05.19a10.3 10.3 0 0 1-2.52-1.8 10.3 10.3 0 0 1-1.84-2.54c-.16-.34-.07-.73.2-1L10.96 7.86 8.9 4.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBuilding = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4.75 19.25h14.5M6.25 19.25V6.75a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2v12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M9.5 8h1.5M13 8h1.5M9.5 11.5h1.5M13 11.5h1.5M9.5 15h1.5M13 15h1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconGlobe = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 12h17M12 3.5c2.5 2.6 3.7 5.4 3.7 8.5s-1.2 5.9-3.7 8.5c-2.5-2.6-3.7-5.4-3.7-8.5S9.5 6.1 12 3.5z" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const channels = [
  {
    icon: IconMail,
    title: 'Email us',
    intro: 'For new projects, partnerships or support with an existing solution.',
    rows: [{ text: 'info@codmsoftware.co.uk', href: 'mailto:info@codmsoftware.co.uk' }],
    foot: 'We aim to reply within 24 hours on business days.',
  },
  {
    icon: IconPhone,
    title: 'Call us',
    intro: 'Speak to a consultant in your region during local business hours.',
    rows: [
      { flag: flagUK, alt: 'United Kingdom', text: '+44 121 818 6924', href: 'tel:+441218186924' },
      { flag: flagUS, alt: 'United States', text: '+1 201 623 3132', href: 'tel:+12016233132' },
      { flag: flagIN, alt: 'India', text: '+91 97171 16432', href: 'tel:+919717116432' },
    ],
    foot: 'Mon to Fri, 9:00 to 18:00 local time.',
  },
  {
    icon: IconBuilding,
    title: 'UK offices',
    intro: 'Registered head office in London with a delivery hub in Birmingham.',
    rows: [
      { flag: flagUK, alt: 'United Kingdom', text: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ' },
      { flag: flagUK, alt: 'United Kingdom', text: 'Regus, Edmund House, 12-22 Newhall St, Birmingham B3 3AS' },
    ],
    foot: 'Visits by appointment.',
  },
  {
    icon: IconGlobe,
    title: 'Global branches',
    intro: 'Partner offices that let us support clients around the clock.',
    rows: [
      { flag: flagUS, alt: 'United States', text: 'Talent4World LLC, 4501 Nightland Dr, Plano, TX 75024' },
      { flag: flagIN, alt: 'India', text: 'SaaS AI Labs, IHDP Business Park, Plot 7, Sector 127, Noida 201304' },
    ],
    foot: 'Follow-the-sun delivery and support.',
  },
];

const ContactSection_SecondSection = () => {
  return (
    <section className="cc-section">
      <div className="container">
        {/* Data strip */}
        <div className="cc-counters" data-aos="fade-up">
          {counters.map((c) => (
            <div className="cc-counter" key={c.label}>
              <span className="cc-counter-value">
                {c.end === 24 && <span className="cc-counter-prefix">&lt;</span>}
                <CountUp end={c.end} duration={1800} />
                {c.suffix}
              </span>
              <span className="cc-counter-label">{c.label}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="cc-head" data-aos="fade-up">
          <DotBtn text="Ways to reach us" />
          <h2 className="cc-title">
            Choose the channel that{' '}
            <span className="cc-highlight">works for you</span>
          </h2>
          <p className="cc-copy">
            Email, phone or a visit to one of our offices. However you get in
            touch, you will be speaking with a consultant, not a call centre.
          </p>
        </div>

        {/* Channel cards */}
        <div className="cc-grid">
          {channels.map((ch, i) => (
            <article
              className="cc-card"
              key={ch.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="cc-card-icon">{ch.icon}</span>
              <h3 className="cc-card-title">{ch.title}</h3>
              <p className="cc-card-intro">{ch.intro}</p>

              <ul className="cc-card-rows">
                {ch.rows.map((r) => (
                  <li className="cc-row" key={r.text}>
                    {r.flag && <img src={r.flag} alt={r.alt} className="cc-flag" />}
                    {r.href ? (
                      <a href={r.href} className="cc-row-link">{r.text}</a>
                    ) : (
                      <span>{r.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <p className="cc-card-foot">{ch.foot}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection_SecondSection;
