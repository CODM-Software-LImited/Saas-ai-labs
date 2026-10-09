import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactSection_ThirdSection.css';

// Same Salesforce Web-to-Lead endpoint the Executive Guide form uses.
// NOTE: test.salesforce.com is the SANDBOX org. Switch to
// https://webto.salesforce.com/... before production go-live.
const SALESFORCE_OID = '00DPu00000D6YMA';
const WEB_TO_LEAD_URL =
  `https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=${SALESFORCE_OID}`;

const topics = [
  'Salesforce implementation',
  'Agentforce and AI solutions',
  'Custom software development',
  'Data integration or migration',
  'Support for an existing solution',
  'Partnership or something else',
];

const steps = [
  {
    title: 'We read your message',
    text: 'A consultant, not a bot, reviews what you have sent within one business day.',
  },
  {
    title: 'We set up a short call',
    text: 'A 30-minute discovery call to understand your goals, systems and timelines.',
  },
  {
    title: 'You get a clear proposal',
    text: 'Scope, timeline and pricing in plain language, with no obligation.',
  },
];

function ContactSection_ThirdSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const params = new URLSearchParams(new FormData(form));

    // Salesforce leads need a company; fall back so the lead is not dropped.
    if (!params.get('company')?.trim()) params.set('company', 'Not provided');

    // Fold the chosen topic into the description so it lands on the lead.
    const topic = params.get('topic') || 'General enquiry';
    params.delete('topic');
    params.set(
      'description',
      `[Contact form - ${topic}]\n\n${params.get('description') || ''}`
    );

    setSending(true);
    fetch(form.action, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    }).finally(() => {
      setSending(false);
      setSubmitted(true);
      form.reset();
    });
  };

  return (
    <section className="cf-section" id="contact-form">
      <div className="cf-orb cf-orb-a" aria-hidden="true"></div>
      <div className="cf-orb cf-orb-b" aria-hidden="true"></div>

      <div className="container cf-container">
        <div className="row g-5 align-items-start">
          {/* Left: copy, steps, photo */}
          <div className="col-12 col-lg-5 cf-left">
            <span className="cf-eyebrow">Send a message</span>
            <h2 className="cf-title">
              Tell us about your project and we will take it from there
            </h2>
            <p className="cf-copy">
              Share as much or as little as you like. A few lines about what
              you want to achieve is enough for us to start a useful
              conversation.
            </p>

            <ol className="cf-steps" aria-label="What happens next">
              {steps.map((s, i) => (
                <li className="cf-step" key={s.title}>
                  <span className="cf-step-num">{i + 1}</span>
                  <div>
                    <h3 className="cf-step-title">{s.title}</h3>
                    <p className="cf-step-text">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="cf-photo-caption cf-note" data-aos="fade-up">
              <span className="cf-photo-dot"></span>
              Your message goes straight to the delivery team
            </div>
          </div>

          {/* Right: form card */}
          <div className="col-12 col-lg-7">
            <div className="cf-card" data-aos="fade-left">
              {submitted ? (
                <div className="cf-success" role="status">
                  <span className="cf-success-icon">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="cf-success-title">Thanks, your message is on its way</h3>
                  <p className="cf-success-text">
                    A consultant will reply within one business day. If it is
                    urgent, call us on{' '}
                    <a href="tel:+441218186924">+44 121 818 6924</a>.
                  </p>
                  <button
                    type="button"
                    className="cf-btn cf-btn-ghost"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action={WEB_TO_LEAD_URL} method="POST" onSubmit={handleSubmit} noValidate={false}>
                  <input type="hidden" name="oid" value={SALESFORCE_OID} />
                  <input type="hidden" name="retURL" value="" />
                  <input type="hidden" name="lead_source" value="Website contact" />

                  <div className="cf-card-head">
                    <h3 className="cf-card-title">Get in touch</h3>
                    <p className="cf-card-sub">Fields marked * are required.</p>
                  </div>

                  <div className="cf-grid">
                    <div className="cf-field">
                      <label htmlFor="cf_first_name">First name *</label>
                      <input id="cf_first_name" name="first_name" type="text" maxLength={40} autoComplete="given-name" required />
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cf_last_name">Last name *</label>
                      <input id="cf_last_name" name="last_name" type="text" maxLength={80} autoComplete="family-name" required />
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cf_email">Work email *</label>
                      <input id="cf_email" name="email" type="email" maxLength={80} autoComplete="email" required />
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cf_phone">Phone</label>
                      <input id="cf_phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cf_company">Company</label>
                      <input id="cf_company" name="company" type="text" maxLength={40} autoComplete="organization" />
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cf_topic">What can we help with?</label>
                      <div className="cf-select">
                        <select id="cf_topic" name="topic" defaultValue={topics[0]}>
                          {topics.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="cf-field cf-field--full">
                      <label htmlFor="cf_description">Your message *</label>
                      <textarea
                        id="cf_description"
                        name="description"
                        rows={5}
                        placeholder="Tell us about your goals, current systems and any timelines."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="cf-foot">
                    <button type="submit" className="cf-btn cf-btn-primary" disabled={sending}>
                      {sending ? 'Sending...' : 'Send message'}
                      {!sending && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    <p className="cf-privacy">
                      We only use your details to respond to this enquiry. See our{' '}
                      <Link to="/PrivacyPolicy">privacy policy</Link>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection_ThirdSection;
