import './AtAGlance.css';
import CountUp from '../../utils/CountUp/CountUp';
import DotBtn from '../../utils/Dotbtn/Dotbtn';
import storyImg from '../../assets/imgs/cta-15/About.png';

const counters = [
  { end: 50, suffix: '+', label: 'Salesforce implementations delivered' },
  { end: 12, suffix: '+', label: 'Certified Salesforce specialists' },
  { end: 8, suffix: '', label: 'Salesforce clouds covered' },
  { end: 99, suffix: '%', label: 'Client retention rate' },
];

const facts = [
  { label: 'Incorporated', value: '7 December 2023' },
  { label: 'Headquarters', value: 'Covent Garden, London' },
  { label: 'Regional office', value: 'Birmingham, UK' },
  { label: 'Companies House', value: '15333870' },
  { label: 'Public sector', value: 'G-Cloud 15 · Lot 3 supplier' },
  { label: 'Accreditations', value: 'Salesforce · Cyber Essentials · ISO' },
];

const industries = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Education',
  'Retail',
  'Technology',
  'Public Sector',
  'Energy',
];

function AtAGlance() {
  return (
    <section className="abg-section">
      <div className="container">
        {/* Counters */}
        <div className="abg-counters" data-aos="fade-up">
          {counters.map((c) => (
            <div className="abg-counter" key={c.label}>
              <span className="abg-counter-value">
                <CountUp end={c.end} duration={2200} />
                {c.suffix}
              </span>
              <span className="abg-counter-label">{c.label}</span>
            </div>
          ))}
        </div>

        <div className="row align-items-center g-5 abg-body">
          {/* Story */}
          <div className="col-lg-7">
            <DotBtn text="Our Story" />
            <h2 className="abg-title">
              From a London start-up to a trusted{' '}
              <span className="abg-highlight">Salesforce &amp; AI partner</span>
            </h2>

            <p className="abg-copy">
              With a focus on quality, innovation, and measurable business
              impact, we help organisations across Financial Services,
              Healthcare, Manufacturing, Education, Retail, and Technology
              transform their operations, enhance customer experiences, and
              accelerate growth through intelligent automation and strategic
              technology implementation.
            </p>

            <p className="abg-copy">
              Our service portfolio spans the entire Salesforce ecosystem
              (Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud,
              Data Cloud, Commerce Cloud, CPQ, Agentforce), combined with
              expertise in modern application development (.NET, Python,
              React.js), AI and Machine Learning solutions, data integration
              and migration, and technical support services.
            </p>

            <div className="abg-industries" aria-label="Industries we serve">
              {industries.map((i) => (
                <span className="abg-industry" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>

          {/* Facts panel */}
          <div className="col-lg-5">
            <div className="abg-panel" data-aos="fade-left">
              <div className="abg-panel-head">
                <img src={storyImg} alt="" className="abg-panel-img" />
                <div>
                  <span className="abg-panel-eyebrow">Company at a glance</span>
                  <h3 className="abg-panel-title">CODM Software Limited</h3>
                </div>
              </div>

              <dl className="abg-facts">
                {facts.map((f) => (
                  <div className="abg-fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtAGlance;
