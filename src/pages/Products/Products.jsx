import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiMessageCircle, FiPlay } from "react-icons/fi";

import SEO from "../../SeoData/SEO";
import products, { BOOKING_URL } from "../../data/products";
import ProductHeroArt from "./ProductHeroArt";

import "./Products.css";

function Products() {
  return (
    <>
      <SEO
        title="Products | CODM Software"
        description="Explore CODM Software's products, including FUTURA, the AI chatbot for education that answers students from your documents and lets admissions staff query applicant data in plain English."
        url="https://codmsoftware.co.uk/products"
        keywords="CODM products, FUTURA, AI chatbot for education, education AI chatbot, student enquiry chatbot, admissions chatbot, applicant analytics"
      />

      {/* ===== Header ===== */}
      <section className="pr-hero pr-hero--list">
        <div className="pr-hero-bg" aria-hidden="true">
          <span className="pr-hero-blob pr-hero-blob--1" />
          <span className="pr-hero-blob pr-hero-blob--2" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="pr-eyebrow">Our products</span>
              <h1 className="pr-hero-title mt-4">
                Software products{" "}
                <span className="pr-highlight">built by CODM</span>
              </h1>
              <p className="pr-hero-intro mt-4 mx-auto">
                Ready-to-use tools from our years of building software, set up
                for your team, connected to the systems you already use, and
                supported by the people who built them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Product cards ===== */}
      <section className="pr-grid py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {products.map((p, index) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.slug}
                  className="col-lg-6 col-md-10 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <article className="pr-pcard">
                    <Link
                      to={`/products/${p.slug}`}
                      className="pr-pcard-media"
                      aria-label={`Open ${p.name}`}
                    >
                      {p.heroImage ? (
                        <img src={p.heroImage} alt="" className="pr-pcard-img" />
                      ) : (
                        <ProductHeroArt name={p.name} />
                      )}
                      <span className="pr-pcard-tag">
                        <Icon aria-hidden="true" /> {p.category}
                      </span>
                    </Link>

                    <div className="pr-pcard-body">
                      <h2 className="pr-pcard-title">
                        <Link to={`/products/${p.slug}`}>{p.name}</Link>
                      </h2>
                      <p className="pr-pcard-tagline">{p.tagline}</p>
                      <p className="pr-pcard-copy">{p.short}</p>

                      <ul className="pr-pcard-points">
                        {p.highlights.map((h) => (
                          <li key={h}>
                            <FiCheck aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {p.sectors?.length > 0 && (
                        <div className="pr-sectors">
                          <span className="pr-sectors-label">Where it&apos;s used</span>
                          <ul className="pr-sectors-list">
                            {p.sectors.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pr-pcard-actions">
                        <Link to={`/products/${p.slug}`} className="pr-btn-primary">
                          Explore {p.name} <FiArrowRight aria-hidden="true" />
                        </Link>
                        {p.video && (
                          <Link to={`/products/${p.slug}#demo`} className="pr-btn-outline pr-btn-play">
                            <span className="pr-btn-play-icon">
                              <FiPlay aria-hidden="true" />
                            </span>
                            Watch demo
                            {p.video.duration && (
                              <span className="pr-btn-play-time">{p.video.duration}</span>
                            )}
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}

            {/* Bespoke build card */}
            <div
              className="col-lg-6 col-md-10 d-flex"
              data-aos="fade-up"
              data-aos-delay={products.length * 100}
            >
              <article className="pr-pcard pr-pcard--custom">
                <div className="pr-pcard-body">
                  <div className="pr-pcard-custom-icon">
                    <FiMessageCircle size={26} aria-hidden="true" />
                  </div>
                  <h2 className="pr-pcard-title">Need something made just for you?</h2>
                  <p className="pr-pcard-copy">
                    Every CODM product started as a problem a client brought to
                    us. If none of the above fits, we design and build a tool
                    around the way your team works, and we stay with you after
                    it goes live.
                  </p>
                  <ul className="pr-pcard-points">
                    {[
                      "A short workshop to understand what you need",
                      "Clear plan, timeline and price before we start",
                      "Built with AI, Salesforce and modern web tools",
                      "Works with the systems and data you already have",
                      "You see progress and give feedback at every step",
                      "Training so your team can use it with confidence",
                      "Ongoing help and support once it is live",
                    ].map((h) => (
                      <li key={h}>
                        <FiCheck aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pr-pcard-actions">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-btn-light"
                    >
                      Book a free call
                    </a>
                    <Link to="/ItServices" className="pr-btn-ghost">
                      See how we can help
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
