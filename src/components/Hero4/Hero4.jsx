import img1 from "../../assets/imgs/features-3/vision-hero.jpg";
import './Hero4.css';
import CountUp from "../../utils/CountUp/CountUp";
import FreeQuote from "./FreeQuote";
import DotBtn from "../../utils/Dotbtn/Dotbtn";

const pillars = [
  "AI-driven, scalable technology built for the long term",
  "User-friendly solutions your teams actually adopt",
  "Measurable impact for businesses and the people they serve",
];

function Hero4() {
  return (
    <section className="hero4-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: image with floating chips */}
          <div className="col-lg-6" data-aos="fade-zoom-in" data-aos-delay="100">
            <div className="hero4-visual">
              <div className="hero4-imgwrap">
                <img className="hero4-img" src={img1} alt="CODM developers collaborating on a Salesforce solution" />
              </div>

              <div className="hero4-chip hero4-chip--top">
                <span className="hero4-chip-dot"></span>
                AI-First Engineering
              </div>

              <div className="hero4-chip hero4-chip--bottom">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l2.9 6.26 6.6.72-4.9 4.55 1.34 6.47L12 16.77 6.06 20l1.34-6.47-4.9-4.55 6.6-.72L12 2z" fill="#f5a623" />
                </svg>
                99% Client Retention
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="col-lg-6">
            <div className="hero4-content ps-lg-4">
              <DotBtn text="Our Vision" />

              <h2 className="hero4-heading mt-3">
                Driven by{' '}
                <span className="hero4-rotator" aria-label="Innovation, Intelligence, Automation">
                  <span className="hero4-rotator-track" aria-hidden="true">
                    <span className="hero4-highlight">Innovation.</span>
                    <span className="hero4-highlight">Intelligence.</span>
                    <span className="hero4-highlight">Automation.</span>
                    <span className="hero4-highlight">Innovation.</span>
                  </span>
                </span>
                <br />
                Focused on <span className="hero4-highlight">Impact.</span>
              </h2>

              <p className="hero4-lead">
                We&rsquo;re here to revolutionize the digital world by creating
                AI-driven, scalable, and user-friendly technology that empowers
                businesses and enriches lives globally.
              </p>

              <ul className="hero4-pillars">
                {pillars.map((p) => (
                  <li key={p} className="hero4-pillar">
                    <svg className="hero4-check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="11" />
                      <path d="M7 12.5l3.2 3L17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="hero4-actions">
                <FreeQuote />
                <a
                  href="/HowWeWork.pdf"
                  className="hero4-ghostbtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How We Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M17.25 15.25V6.75H8.75M17 7L6.75 17.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="hero4-stats">
                <div className="hero4-stat">
                  <span className="hero4-stat-value">
                    <CountUp end={99} duration={6000} enableScrollSpy />%
                  </span>
                  <span className="hero4-stat-label">Genuine repeat happy customers</span>
                </div>
                <div className="hero4-stat-divider" aria-hidden="true"></div>
                <div className="hero4-stat">
                  <span className="hero4-stat-value">
                    <CountUp end={98} duration={6000} enableScrollSpy scrollSpyOnce={false} />%
                  </span>
                  <span className="hero4-stat-label">Trusted by companies worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero4;
