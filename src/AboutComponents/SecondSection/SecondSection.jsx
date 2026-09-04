import img1 from '../../assets/imgs/About/Our mission.png';
import img2 from '../../assets/imgs/About/vision.png';
import DotBtn from '../../utils/Dotbtn/Dotbtn';
import './SecondSection.css';

const values = [
  {
    title: 'Quality First',
    text: 'Certified architects, security reviews and best practice baked into every delivery.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l7 3v6c0 5-3.5 8.5-7 11-3.5-2.5-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    text: 'AI, Agentforce and modern engineering applied where they create real advantage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.5 1 1.3 1 2.1h5c0-.8.3-1.6 1-2.1A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Measurable Impact',
    text: 'Every engagement is tied to outcomes: adoption, efficiency and return on investment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16M6 16V10M11 16V6M16 16v-4M21 16V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Lasting Partnership',
    text: 'Training and continuous support so your team keeps getting more from Salesforce.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 12l-3 3a3 3 0 0 0 4 4l3-3M16 12l3-3a3 3 0 0 0-4-4l-3 3M9 15l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function SecondSection() {
  return (
    <section className="mv-section">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <DotBtn text="Mission & Vision" />
          </div>
          <h2 className="mv-heading">Why We Do What We Do</h2>
          <p className="mv-subtitle">
            The purpose behind every implementation, integration and line of code we ship.
          </p>
        </div>

        {/* Mission */}
        <div className="row align-items-center g-5 mv-row">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="mv-eyebrow">Our Mission</span>
            <h3 className="mv-title">
              Empower businesses with{' '}
              <span className="mv-highlight">transformative Salesforce solutions</span>
            </h3>
            <p className="mv-copy">
              To empower businesses globally with transformative Salesforce
              solutions that drive efficiency, innovation, and sustainable
              growth. We are committed to delivering exceptional value through
              our expertise in CRM implementation, customisation, and strategic
              consulting.
            </p>
            <p className="mv-copy">
              Our focus extends beyond technology implementation. We prioritise
              training and continuous support to ensure your team leverages the
              full potential of Salesforce, creating lasting impact and
              measurable ROI for your organisation.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="mv-imgwrap mv-imgwrap--mission">
              <img src={img1} alt="Team climbing a growth chart towards a trophy" className="mv-img" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="row align-items-center g-5 mv-row flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <span className="mv-eyebrow">Our Vision</span>
            <h3 className="mv-title">
              The most trusted and innovative{' '}
              <span className="mv-highlight">Salesforce consulting partner</span>
            </h3>
            <p className="mv-copy">
              To be the most trusted and innovative Salesforce consulting
              partner globally, recognised for our unwavering commitment to
              client success and technological excellence. We envision a future
              where businesses of all sizes can seamlessly harness the power of
              cloud technology to transform their operations and customer
              relationships.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mv-imgwrap mv-imgwrap--vision">
              <img src={img2} alt="Connected Salesforce, AI and cloud ecosystem" className="mv-img" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mv-values" data-aos="fade-up">
          {values.map((v) => (
            <div className="mv-value" key={v.title}>
              <span className="mv-value-icon">{v.icon}</span>
              <h4 className="mv-value-title">{v.title}</h4>
              <p className="mv-value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
