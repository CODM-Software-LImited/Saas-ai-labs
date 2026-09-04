import { useState } from 'react';
import './ContactMapSection.css';
import DotBtn from '../../utils/Dotbtn/Dotbtn';

import flagUK from '../../assets/imgs/contact-4/Flag of UK.png';
import flagIN from '../../assets/imgs/contact-4/Flag_of_India.png';
import flagUS from '../../assets/imgs/contact-4/Flag_of_the_United_States.png';

const offices = [
  {
    id: 'london',
    city: 'London',
    tag: 'Registered head office',
    flag: flagUK,
    country: 'United Kingdom',
    lines: ['71-75 Shelton Street', 'Covent Garden, London WC2H 9JQ'],
    phone: '+44 121 818 6924',
    tel: 'tel:+441218186924',
    hours: 'Mon to Fri, 9:00 to 18:00 GMT',
    query: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ',
  },
  {
    id: 'birmingham',
    city: 'Birmingham',
    tag: 'Delivery hub',
    flag: flagUK,
    country: 'United Kingdom',
    lines: ['Regus, Edmund House', '12-22 Newhall Street, Birmingham B3 3AS'],
    phone: '+44 121 818 6924',
    tel: 'tel:+441218186924',
    hours: 'Mon to Fri, 9:00 to 18:00 GMT',
    query: 'Regus - Birmingham, Edmund House, 12-22 Newhall St, Birmingham B3 3AS',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1850.887422427645!2d-1.904458524408209!3d52.48125453909874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8c5a62541d%3A0x64bf7ffe5e92ee9f!2sRegus%20-%20Birmingham%2C%20Edmund%20House!5e0!3m2!1sen!2suk!4v1765266163501!5m2!1sen!2suk',
  },
  {
    id: 'plano',
    city: 'Plano, Texas',
    tag: 'North America partner office',
    flag: flagUS,
    country: 'United States',
    lines: ['Talent4World LLC', '4501 Nightland Dr, Plano, TX 75024'],
    phone: '+1 201 623 3132',
    tel: 'tel:+12016233132',
    hours: 'Mon to Fri, 9:00 to 18:00 CT',
    query: '4501 Nightland Dr, Plano, TX 75024, USA',
  },
  {
    id: 'noida',
    city: 'Noida',
    tag: 'Delivery centre, SaaS AI Labs',
    flag: flagIN,
    country: 'India',
    lines: ['IHDP Business Park, Plot 7, Serenia, 2nd floor', 'Sector 127, Noida, Uttar Pradesh 201304'],
    phone: '+91 97171 16432',
    tel: 'tel:+919717116432',
    hours: 'Mon to Fri, 9:30 to 18:30 IST',
    query: 'IHDP Business Park, Plot 7, Sector 127, Noida, Uttar Pradesh 201304',
  },
];

const mapSrc = (o) =>
  o.embed || `https://www.google.com/maps?q=${encodeURIComponent(o.query)}&z=15&output=embed`;

const directionsHref = (o) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(o.query)}`;

function ContactMapSection() {
  const [activeId, setActiveId] = useState(offices[1].id);
  const active = offices.find((o) => o.id === activeId) || offices[0];

  return (
    <section className="cm-section" id="contact-offices">
      <div className="container">
        <div className="cm-head" data-aos="fade-up">
          <DotBtn text="Where to find us" />
          <h2 className="cm-title">
            Four offices,{' '}
            <span className="cm-highlight">one team</span>
          </h2>
          <p className="cm-copy">
            Pick an office to see it on the map. Visits are by appointment, so
            let us know when you would like to drop in.
          </p>
        </div>

        <div className="cm-layout">
          {/* Office list */}
          <div className="cm-list" role="tablist" aria-label="Offices">
            {offices.map((o) => {
              const isActive = o.id === activeId;
              return (
                <button
                  type="button"
                  key={o.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="cm-map-panel"
                  className={`cm-office${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveId(o.id)}
                >
                  <span className="cm-office-top">
                    <img src={o.flag} alt={o.country} className="cm-flag" />
                    <span className="cm-office-city">{o.city}</span>
                    <span className="cm-office-tag">{o.tag}</span>
                  </span>
                  <span className="cm-office-addr">
                    {o.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Map + details */}
          <div className="cm-map-wrap" id="cm-map-panel" role="tabpanel" data-aos="fade-left">
            <div className="cm-map">
              <iframe
                key={active.id}
                title={`Map of the CODM Software ${active.city} office`}
                src={mapSrc(active)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="cm-details">
              <div className="cm-detail">
                <span className="cm-detail-label">Address</span>
                <span className="cm-detail-value">{active.lines.join(', ')}</span>
              </div>
              <div className="cm-detail">
                <span className="cm-detail-label">Phone</span>
                <a className="cm-detail-value cm-detail-link" href={active.tel}>{active.phone}</a>
              </div>
              <div className="cm-detail">
                <span className="cm-detail-label">Hours</span>
                <span className="cm-detail-value">{active.hours}</span>
              </div>
              <a
                className="cm-directions"
                href={directionsHref(active)}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMapSection;
