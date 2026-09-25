import { Link } from "react-router-dom";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import Accordion from "../../ServiceComponents/ui/Accordion/Accordion";
import SEO from "../../SeoData/SEO";
import { faqPage } from "../../SeoData/schema";
import { companyFaqs, gcloudFaqs, futuraFaqs, toSchemaFaqs } from "../../data/faqs";

// Common questions from across the site. The same data drives the visible
// accordions and the FAQPage JSON-LD, so the two always match.
const groups = [
  { id: "faq-company", heading: "About CODM Software", items: companyFaqs },
  { id: "faq-gcloud", heading: "Buying through G-Cloud 15", items: gcloudFaqs, link: { to: "/g-cloud-15", label: "G-Cloud 15 services" } },
  { id: "faq-futura", heading: "FUTURA, our AI chatbot for education", items: futuraFaqs, link: { to: "/products/futura", label: "About FUTURA" } },
];

const schema = faqPage("/faq", toSchemaFaqs(groups.flatMap((g) => g.items)));

function Faq() {
  return (
    <>
      <SEO
        title="Salesforce Consulting FAQs | CODM Software"
        description="Answers to common questions about working with CODM Software."
        schema={schema}
      />
      <HeaderWithBg
        title="Frequently asked questions"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "FAQ", color: "purple-text" },
        ]}
      />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {groups.map((g) => (
                <div key={g.id} className="mb-5">
                  <h2 className="Heading3 mb-2">{g.heading}</h2>
                  <Accordion id={g.id} items={g.items} defaultOpen={-1} />
                  {g.link && (
                    <p className="mt-3">
                      <Link to={g.link.to} className="purple-text fw-semibold">{g.link.label} &rarr;</Link>
                    </p>
                  )}
                </div>
              ))}
              <p className="mb-0">
                Can't find your answer? <Link to="/contact" className="purple-text fw-semibold">Contact our team</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
