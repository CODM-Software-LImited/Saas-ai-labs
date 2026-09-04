import { useEffect, useState } from "react";
import "./ExecutiveGuide.css";

const WEB_TO_LEAD_URL =
  "https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DAe000009CRc3";

function GuideFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("execguide-modal-overlay")) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new URLSearchParams(new FormData(form)).toString();

    fetch(form.action, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    setSubmitted(true);
  };

  return (
    <div
      className="execguide-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Get the guide"
    >
      <div className="execguide-modal">
        <button
          type="button"
          className="execguide-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <span className="execguide-modal-eyebrow">Executive Guide</span>
            <h4 className="execguide-modal-title">
              Where should we send your copy?
            </h4>
            <form action={WEB_TO_LEAD_URL} method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="oid" value="00DAe000009CRc3" />
              <input
                type="hidden"
                name="retURL"
                value="http://www.codmsoftware.co.uk"
              />
              <input type="hidden" name="lead_source" value="Website" />
              <input
                type="hidden"
                name="description"
                value="Requested the Digital Transformation executive guide."
              />
              <div className="execguide-modal-row">
                <div className="execguide-modal-field">
                  <label htmlFor="guide_first_name">
                    First Name <span className="execguide-modal-req">*</span>
                  </label>
                  <input
                    id="guide_first_name"
                    name="first_name"
                    type="text"
                    placeholder="John"
                    maxLength={40}
                    required
                  />
                </div>
                <div className="execguide-modal-field">
                  <label htmlFor="guide_last_name">
                    Last Name <span className="execguide-modal-req">*</span>
                  </label>
                  <input
                    id="guide_last_name"
                    name="last_name"
                    type="text"
                    placeholder="Doe"
                    maxLength={80}
                    required
                  />
                </div>
              </div>
              <div className="execguide-modal-field">
                <label htmlFor="guide_email">
                  Email <span className="execguide-modal-req">*</span>
                </label>
                <input
                  id="guide_email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  maxLength={80}
                  required
                />
              </div>
              <div className="execguide-modal-field">
                <label htmlFor="guide_phone">
                  Phone <span className="execguide-modal-optional">(optional)</span>
                </label>
                <input
                  id="guide_phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 7XXX XXXXXX"
                  maxLength={40}
                />
              </div>
              <button type="submit" className="execguide-btn execguide-modal-submit">
                Send Me the Guide
              </button>
            </form>
          </>
        ) : (
          <div className="execguide-modal-success">
            <div className="execguide-modal-successIcon">&#10003;</div>
            <h4 className="execguide-modal-title">Thank You!</h4>
            <p className="execguide-modal-successCopy">
              The guide has been sent to your email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ExecutiveGuide() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="execguide-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="execguide-eyebrow">Executive Guide</span>
            <h2 className="execguide-title">
              Every business pays for its systems.
              <br />
              The only difference is how.
            </h2>
            <p className="execguide-copy">
              One cost appears on an invoice. The other quietly drains profit,
              month after month, and nobody puts a number on it.
            </p>
            <h3 className="execguide-subtitle">
              What&rsquo;s running on outdated systems costing you?
            </h3>
            <p className="execguide-copy">
              This guide has the number, and the plan to change it.
            </p>
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="execguide-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get the Guide
            </button>
            <p className="execguide-micro">
              Takes 30 seconds &middot; Sent straight to your inbox
            </p>
          </div>

          <div className="col-lg-6" data-aos="zoom-in">
            <div className="execguide-cardWrap">
              <div className="execguide-card">
                <span className="execguide-card-brand">
                  CODM &middot; Executive Guide
                </span>
                <span className="execguide-card-topic">
                  Digital Transformation
                </span>
                <h4 className="execguide-card-title">
                  The cost of outdated systems
                </h4>
                <p className="execguide-card-sub">And the plan to fix them</p>
                <span className="execguide-card-rule" aria-hidden="true"></span>
                <div className="execguide-card-stats">
                  <div className="execguide-card-stat">
                    <span className="execguide-card-statLabel">
                      Cost of inaction
                    </span>
                    <span className="execguide-card-statValue">
                      &pound;250k&ndash;450k
                    </span>
                  </div>
                  <div className="execguide-card-stat">
                    <span className="execguide-card-statLabel">Year 1 ROI</span>
                    <span className="execguide-card-statValue">
                      200&ndash;350%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GuideFormModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}

export default ExecutiveGuide;
