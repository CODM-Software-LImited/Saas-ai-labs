import { Link } from 'react-router-dom';
import DotBtn from '../../utils/Dotbtn/Dotbtn';
import './CaseStudy.css';

import pharmaImg from '../../assets/imgs/blogImgs/pharmaecticalDashboard.png';
import agentforceImg from '../../assets/imgs/blogImgs/agentforce.webp';
import fieldServiceImg from '../../assets/imgs/blogImgs/salesforce-field-service.webp';

const caseStudies = [
  {
    img: pharmaImg,
    tag: 'Pharmaceutical',
    title: 'AI-Powered CRM Dashboards for a Pharma Sales Team',
    desc: 'Real-time dashboards giving pharmaceutical teams instant insight into sales performance, compliance tracking, and market trends.',
    link: '/blog/ai-powered-dashboard',
  },
  {
    img: agentforceImg,
    tag: 'Customer Service',
    title: 'Agentforce Implementation for Smarter Service Operations',
    desc: 'AI-driven service workflows that automate case handling and unify customer engagement across every channel.',
    link: '/blog/salesforce-agentforce',
  },
  {
    img: fieldServiceImg,
    tag: 'Field Service',
    title: 'Field Service Automation with Salesforce FSL',
    desc: 'Automated scheduling, dispatch, and mobile workforce management that keeps field teams productive and customers informed.',
    link: '/blog/field-service-automation',
  },
];

function CaseStudy() {
  return (
    <section className="casestudy-section" id="case-studies">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <DotBtn text="Success Stories" />
          </div>
          <h2 className="Heading3 my-3">Case Studies</h2>
          <p className="casestudy-subtitle">
            A look at how we help teams modernize with Salesforce and AI, explored in depth on our blog.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {caseStudies.map((cs) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={cs.link} data-aos="fade-up">
              <article className="casestudy-card">
                <div className="casestudy-imgwrap">
                  <img src={cs.img} alt={cs.title} className="casestudy-img" loading="lazy" />
                  <span className="casestudy-tag">{cs.tag}</span>
                </div>
                <div className="casestudy-body">
                  <h3 className="casestudy-title">{cs.title}</h3>
                  <p className="casestudy-desc">{cs.desc}</p>
                  <Link to={cs.link} className="casestudy-link">
                    Read the case study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
