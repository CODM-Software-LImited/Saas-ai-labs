import { Link } from "react-router-dom";
import {
  FiCloud,
  FiCpu,
  FiShare2,
  FiCode,
  FiTool,
  FiHeart,
  FiBookOpen,
  FiBriefcase,
  FiSettings,
  FiZap,
  FiTruck,
} from "react-icons/fi";

import SEO from "../../SeoData/SEO";
import Accordion from "../../ServiceComponents/ui/Accordion/Accordion";

import checkImg from "../../assets/imgs/services-details/check.svg";
import outcomesImg from "../../assets/imgs/services-details-2/Api/img-2.svg";
import gcaLogo from "../../assets/imgs/gcloud/gca-supplier-black.png";

import "./GCloud15.css";

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/71a37cc7c044476886855ad82dec046b@Codmsoftware.co.uk/meetingtype/34H18u9wAEmmNJJ8gBVpmg2?anonymous&ismsaljsauthenabled&ep=mCardFromTile";

const services = [
  {
    icon: <FiCloud size={24} />,
    title: "Salesforce advisory, implementation and optimisation",
    copy: (
      <>
        We help organisations get more value from Salesforce through discovery,
        solution design, configuration, development, deployment and ongoing
        optimisation.
        <br />
        <br />
        Our expertise includes Salesforce CRM and Salesforce industry clouds,
        including Education Cloud, Financial Services Cloud, Health and
        Insurance Cloud, Data Cloud, Marketing Cloud, Sales Cloud, Service
        Cloud, Energy and Utilities Cloud, and Manufacturing Cloud.
      </>
    ),
  },
  {
    icon: <FiCpu size={24} />,
    title: "AI, Agentforce and intelligent automation",
    copy: (
      <>
        We support the practical use of AI in cloud services. This includes
        assessing opportunities, designing AI-enabled workflows, implementing
        Agentforce and Salesforce AI capabilities, and developing LLM-enabled
        applications.
        <br />
        <br />
        Our focus is on automation that reduces repetitive work, improves
        access to information and supports better operational decisions.
      </>
    ),
  },
  {
    icon: <FiShare2 size={24} />,
    title: "API integration, data integration and migration",
    copy: (
      <>
        We help organisations connect cloud platforms with the systems and data
        they rely on. Our services include API integration,
        integration-framework design, data integration and data migration.
        <br />
        <br />
        We work to improve the flow, quality and availability of information
        across systems.
      </>
    ),
  },
  {
    icon: <FiCode size={24} />,
    title: "Cloud application development",
    copy: (
      <>
        CODM develops and enhances cloud-connected applications using React and
        Microsoft .NET. We support responsive user interfaces, supporting
        applications, integrations and digital services that work alongside
        existing cloud platforms.
      </>
    ),
  },
  {
    icon: <FiTool size={24} />,
    title: "Technical support and continuous improvement",
    copy: (
      <>
        We provide deployment support, technical troubleshooting, performance
        optimisation, platform enhancements and ongoing support for cloud-based
        services.
      </>
    ),
  },
];

const sectors = [
  {
    icon: <FiHeart size={24} />,
    title: "Healthcare and health-related services",
    copy: "Support joined-up service delivery with CRM, integrated data, workflow automation and cloud application development.",
  },
  {
    icon: <FiBookOpen size={24} />,
    title: "Higher education and learning services",
    copy: "Improve learner, alumni and stakeholder engagement with Education Cloud, CRM automation, integrated data and digital self-service services.",
  },
  {
    icon: <FiBriefcase size={24} />,
    title: "Financial and regulatory services",
    copy: "Support customer and case-management processes with Salesforce, integrations, secure access and data-informed workflows.",
  },
  {
    icon: <FiSettings size={24} />,
    title: "Manufacturing and operational services",
    copy: "Connect teams, systems and information to improve operational visibility, service workflows and digital processes.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Energy and utilities",
    copy: "Support customer-facing and operational services with connected cloud systems, automation, integrations and scalable applications.",
  },
  {
    icon: <FiTruck size={24} />,
    title: "Transport and telecommunications",
    copy: "Improve service operations, field-team coordination and customer experiences through connected data, cloud platforms and workflow automation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the requirement",
    copy: "We begin by understanding your objectives, current systems, delivery context and the outcomes you need to achieve.",
  },
  {
    number: "02",
    title: "Define a practical approach",
    copy: "We work with you to shape an approach that may include discovery, advisory support, solution design, configuration, development, integration, migration or technical support.",
  },
  {
    number: "03",
    title: "Deliver and improve",
    copy: "We support implementation and deployment, then help your team optimise services, resolve technical issues and plan future improvements.",
  },
];

const whyCards = [
  {
    title: "Salesforce and cloud delivery expertise",
    copy: "CODM brings hands-on experience across Salesforce CRM, industry clouds, application development, integrations, data and technical support.",
  },
  {
    title: "Technology that works together",
    copy: "We focus on connecting systems, data and teams, not introducing isolated tools. Our services are designed to help cloud platforms work effectively within your wider technology environment.",
  },
  {
    title: "Practical AI delivery",
    copy: "We approach AI as a way to improve real workflows and service outcomes. We help teams identify suitable use cases and implement automation with a clear operational purpose.",
  },
  {
    title: "Support from discovery to improvement",
    copy: "Our team can support different stages of a cloud programme, from early advisory work and delivery through to technical support and continuous improvement.",
  },
];

const frameworkDetails = [
  { label: "Framework", value: "G‑Cloud 15" },
  { label: "Framework reference", value: "RM1557.15" },
  { label: "Supplier", value: "CODM Software Limited" },
  { label: "Lot", value: "Lot 3: Cloud Support" },
  {
    label: "Scope",
    value: "Cloud-specific professional services for a clearly defined period",
  },
  {
    label: "Engagement approach",
    value:
      "Outcomes-based and/or time-and-materials, in line with the applicable framework procedure",
  },
];

const faqItems = [
  {
    number: 1,
    title: "What can CODM provide through G‑Cloud 15 Lot 3?",
    content:
      "CODM provides cloud-specific professional services. These include Salesforce advisory, implementation and optimisation; AI and Agentforce support; API integration; data integration and migration; cloud application development; deployment support; and ongoing technical support.",
  },
  {
    number: 2,
    title: "Does CODM provide cloud software or hosting through this framework?",
    content:
      "CODM is named on Lot 3: Cloud Support. Our G‑Cloud 15 offer is focused on professional services that help organisations plan, implement, integrate, develop, support and improve their cloud services.",
  },
  {
    number: 3,
    title: "Can CODM help us assess our requirement?",
    content:
      "Yes. Contact our public sector team with an outline of your objectives. We can explain the scope of our services and provide information to support your procurement process.",
  },
  {
    number: 4,
    title: "Can you support existing Salesforce or cloud platforms?",
    content:
      "Yes. CODM can provide technical support, optimisation, integration, enhancement and development services for existing Salesforce and cloud-based systems.",
  },
  {
    number: 5,
    title: "How do we begin?",
    content:
      "Contact our public sector team to discuss your requirement. We will help identify the relevant CODM Cloud Support service and provide the information needed for your next steps.",
  },
];

function GCloud15() {
  return (
    <>
      <SEO
        title="G‑Cloud 15 Cloud Support Services | CODM Software"
        description="CODM Software provides Salesforce, AI, cloud integration, data migration and technical support services through G-Cloud 15 Lot 3: Cloud Support."
        url="https://codmsoftware.co.uk/g-cloud-15"
        keywords="G-Cloud 15, Cloud Support, Lot 3, public sector, Salesforce, AI, Agentforce, API integration, data migration, cloud application development, CODM Software"
      />

      {/* ===== Hero ===== */}
      <section className="gc-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="gc-eyebrow">Public Sector Procurement</span>
              <h1 className="mt-4">G&#8209;Cloud 15 Cloud Support Services</h1>
              <p className="gc-hero-intro mt-4">
                CODM Software Limited is a supplier on Government Commercial
                Agency&rsquo;s G&#8209;Cloud 15 framework, Lot 3: Cloud
                Support.
              </p>
              <p className="gc-hero-intro">
                We provide cloud-specific professional services across
                Salesforce, AI, integration, data and cloud application
                development, helping public sector teams modernise
                services, connect systems and improve operational delivery.
              </p>
              <div className="d-flex gap-3 flex-wrap mt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gc-btn-primary"
                >
                  Talk to our public sector team
                </a>
                <Link to="/ItServices" className="gc-btn-outline">
                  Explore our services
                </Link>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
              <div className="gc-hero-panel">
                <div className="gc-hero-panel-logo">
                  <img
                    src={gcaLogo}
                    alt="Government Commercial Agency Supplier"
                  />
                </div>
                <div className="gc-hero-panel-row">
                  <span className="gc-label">Framework</span>
                  <span className="gc-value">G&#8209;Cloud 15</span>
                </div>
                <div className="gc-hero-panel-row">
                  <span className="gc-label">Reference</span>
                  <span className="gc-value">RM1557.15</span>
                </div>
                <div className="gc-hero-panel-row">
                  <span className="gc-label">Supplier</span>
                  <span className="gc-value">CODM Software Limited</span>
                </div>
                <div className="gc-hero-panel-row">
                  <span className="gc-label">Lot</span>
                  <span className="gc-value">Lot 3: Cloud Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Framework facts ===== */}
      <section className="gc-facts py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3 col-6 gc-fact" data-aos="fade-up">
              <span>Framework</span>
              <p>G&#8209;Cloud 15</p>
            </div>
            <div className="col-md-3 col-6 gc-fact" data-aos="fade-up" data-aos-delay="100">
              <span>Supplier</span>
              <p>CODM Software Limited</p>
            </div>
            <div className="col-md-3 col-6 gc-fact" data-aos="fade-up" data-aos-delay="200">
              <span>Lot</span>
              <p>Lot 3: Cloud Support</p>
            </div>
            <div className="col-md-3 col-6 gc-fact" data-aos="fade-up" data-aos-delay="300">
              <span>Support areas</span>
              <p>Salesforce, AI, integration, data migration and applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-5 mt-4">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="gc-eyebrow">Our services</span>
            <h2 className="gc-section-title mt-3">
              How CODM supports public sector cloud programmes
            </h2>
            <p className="custom-p mt-3 mx-auto" style={{ maxWidth: "720px" }}>
              CODM provides professional services to help organisations plan,
              implement, integrate, develop, support and improve cloud-based
              systems.
            </p>
          </div>

          <div className="row gy-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={index < 3 ? "col-lg-4 col-md-6" : "col-lg-6 col-md-6"}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div className="gc-card">
                  <div className="gc-card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Outcomes ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="gc-eyebrow">Public service outcomes</span>
              <h2 className="gc-section-title mt-3">
                Supporting better public service outcomes
              </h2>
              <p className="custom-p mt-3">
                CODM helps public sector teams use cloud technology to improve
                how services are delivered, managed and developed.
              </p>
              <ul className="gc-outcomes-list mt-4">
                {[
                  "Improve service, stakeholder and case-management workflows.",
                  "Connect cloud platforms with existing systems and data sources.",
                  "Reduce manual administration through workflow and AI automation.",
                  "Improve the reliability, usability and performance of cloud services.",
                  "Deliver modern digital experiences through Salesforce, React and .NET.",
                  "Build a clearer view of service interactions, operational data and outcomes.",
                ].map((item) => (
                  <li key={item}>
                    <img src={checkImg} alt="" width={20} height={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <img
                src={outcomesImg}
                alt="Cloud and data integration"
                className="rounded-3 w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sectors ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="gc-eyebrow">Relevant sectors</span>
            <h2 className="gc-section-title mt-3">
              Public sector contexts we support
            </h2>
            <p className="custom-p mt-3 mx-auto" style={{ maxWidth: "720px" }}>
              CODM&rsquo;s Cloud Support capabilities are relevant to
              organisations across a range of public service contexts.
            </p>
          </div>

          <div className="row gy-4">
            {sectors.map((sector, index) => (
              <div
                key={sector.title}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div className="gc-card">
                  <div className="gc-card-icon">{sector.icon}</div>
                  <h3>{sector.title}</h3>
                  <p>{sector.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="gc-eyebrow">Our approach</span>
            <h2 className="gc-section-title mt-3">How we work</h2>
          </div>

          <div className="row gy-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="gc-step">
                  <div className="gc-step-number">
                    {step.number}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why CODM ===== */}
      <section className="gc-why py-5 my-4">
        <div className="container py-4">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="gc-eyebrow">Why CODM</span>
            <h2 className="gc-section-title mt-3">
              Cloud expertise that supports delivery
            </h2>
          </div>

          <div className="row gy-4">
            {whyCards.map((card, index) => (
              <div
                key={card.title}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="gc-why-card">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Framework details ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="text-center mb-5" data-aos="fade-up">
                <span className="gc-eyebrow">Framework details</span>
                <h2 className="gc-section-title mt-3">
                  G&#8209;Cloud 15 at a glance
                </h2>
              </div>

              <div className="gc-table" data-aos="fade-up">
                {frameworkDetails.map((row) => (
                  <div key={row.label} className="gc-table-row">
                    <div className="gc-table-label">{row.label}</div>
                    <div className="gc-table-value">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9" data-aos="fade-up">
              <div className="text-center mb-2">
                <span className="gc-eyebrow">Frequently asked questions</span>
                <h2 className="gc-section-title mt-3">
                  Questions about CODM and G&#8209;Cloud 15
                </h2>
              </div>
              <Accordion items={faqItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-5">
        <div className="container">
          <div className="gc-cta text-center" data-aos="fade-up">
            <span className="gc-eyebrow">Talk to CODM</span>
            <h2 className="mt-3">
              Ready to discuss your cloud support requirement?
            </h2>
            <p className="mt-3">
              If you are exploring Salesforce, AI, integration, data,
              application-development or cloud-support requirements, we would
              be pleased to discuss how CODM can help.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gc-btn-light mt-3"
            >
              Talk to our public sector team
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default GCloud15;
