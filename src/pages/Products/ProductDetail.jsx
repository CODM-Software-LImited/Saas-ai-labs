import { useEffect, useRef } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiCheck, FiPlay } from "react-icons/fi";

import SEO from "../../SeoData/SEO";
import Accordion from "../../ServiceComponents/ui/Accordion/Accordion";
import CountUp from "../../utils/CountUp/CountUp";
import products, { BOOKING_URL, getProduct } from "../../data/products";
import ProductHeroArt from "./ProductHeroArt";
import { faqPage, absUrl, ORG_ID } from "../../SeoData/schema";
import { toSchemaFaqs } from "../../data/faqs";

import "./Products.css";

function ProductDetail() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const product = getProduct(slug);
  const videoRef = useRef(null);

  // Arriving via ".../products/<slug>#demo" (e.g. the "Watch demo" card button)
  // scrolls to the player and starts it; the click that navigated here counts
  // as the user gesture, so playback is allowed.
  useEffect(() => {
    if (hash !== "#demo" || !videoRef.current) return;
    const v = videoRef.current;
    const t = setTimeout(() => {
      v.scrollIntoView({ behavior: "smooth", block: "center" });
      const playing = v.play();
      if (playing && typeof playing.catch === "function") playing.catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [hash, slug]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = product.icon;
  const others = products.filter((p) => p.slug !== product.slug);

  // Smooth-scroll to the demo player and start it. Called from a click, so
  // browsers allow playback with sound.
  const watchDemo = (e) => {
    e.preventDefault();
    const v = videoRef.current;
    if (!v) return;
    v.scrollIntoView({ behavior: "smooth", block: "center" });
    v.muted = false;
    const playing = v.play();
    if (playing && typeof playing.catch === "function") playing.catch(() => {});
  };

  return (
    <>
      <SEO
        title={`${product.name}: ${product.tagline} | CODM Software`}
        description={product.short}
        url={`https://codmsoftware.co.uk/products/${product.slug}`}
        keywords={`${product.name}, ${product.tagline}, ${product.category}, CODM Software, ${product.highlights.join(", ")}`}
        schema={[
          {
            "@type": "SoftwareApplication",
            "@id": `${absUrl(`/products/${product.slug}`)}#software`,
            name: product.name,
            description: product.short,
            url: absUrl(`/products/${product.slug}`),
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            publisher: { "@id": ORG_ID },
            provider: { "@id": ORG_ID },
          },
          faqPage(`/products/${product.slug}`, toSchemaFaqs(product.faqs || [])),
        ]}
      />

      {/* ===== Hero ===== */}
      <section className="pr-hero">
        <div className="pr-hero-bg" aria-hidden="true">
          <span className="pr-hero-blob pr-hero-blob--1" />
          <span className="pr-hero-blob pr-hero-blob--2" />
        </div>

        <div className="container">
          <Link to="/products" className="pr-back">
            <FiArrowLeft aria-hidden="true" /> All products
          </Link>
          <div className="row align-items-center gy-5">
            {/* Left: copy */}
            <div className="col-lg-6" data-aos="fade-up">
              <span className="pr-eyebrow">
                <Icon aria-hidden="true" /> {product.category}
              </span>

              <h1 className="pr-hero-title mt-4">
                {product.name}
                <span className="pr-hero-tagline">{product.tagline}</span>
              </h1>

              {product.audience && (
                <p className="pr-hero-audience">{product.audience}</p>
              )}

              {product.sectors?.length > 0 && (
                <div className="pr-sectors pr-sectors--hero">
                  <span className="pr-sectors-label">Where it&apos;s used</span>
                  <ul className="pr-sectors-list">
                    {product.sectors.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="pr-hero-intro">{product.intro}</p>

              <ul className="pr-hero-points">
                {product.highlights.map((h) => (
                  <li key={h}>
                    <span className="pr-hero-point-icon">
                      <FiCheck aria-hidden="true" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pr-hero-actions">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-btn-primary"
                >
                  Book a {product.name} demo
                  <FiArrowRight aria-hidden="true" />
                </a>
                {product.video ? (
                  <a href="#demo" className="pr-btn-outline pr-btn-play" onClick={watchDemo}>
                    <span className="pr-btn-play-icon">
                      <FiPlay aria-hidden="true" />
                    </span>
                    Watch the demo
                    {product.video.duration && (
                      <span className="pr-btn-play-time">{product.video.duration}</span>
                    )}
                  </a>
                ) : (
                  <a href="#features" className="pr-btn-outline">
                    See features
                  </a>
                )}
              </div>

              {product.techStrip && (
                <div className="pr-hero-tech">
                  <span className="pr-hero-tech-label">Built on</span>
                  <ul>
                    {product.techStrip.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: product window + demo teaser */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <div className="pr-hero-visual">
                <div className="pr-hero-art">
                  {product.heroImage ? (
                    <img
                      src={product.heroImage}
                      alt={product.heroImageAlt || `${product.name} illustration`}
                      className="pr-hero-img"
                    />
                  ) : (
                    <ProductHeroArt name={product.name} />
                  )}
                </div>

                {product.video && (
                  <a href="#demo" className="pr-teaser" onClick={watchDemo}>
                    <span className="pr-teaser-thumb">
                      <img src={product.video.poster} alt="" loading="lazy" />
                      <span className="pr-teaser-play">
                        <FiPlay aria-hidden="true" />
                      </span>
                    </span>
                    <span className="pr-teaser-body">
                      <span className="pr-teaser-title">
                        Watch the {product.video.duration ? `${product.video.duration} ` : ""}product demo
                      </span>
                      {product.video.teaser && (
                        <span className="pr-teaser-sub">{product.video.teaser}</span>
                      )}
                    </span>
                    <FiArrowRight className="pr-teaser-arrow" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats strip ===== */}
      <section className="pr-stats">
        <div className="container">
          <div className="row gy-4">
            {product.heroStats.map((s, index) => (
              <div
                key={s.label}
                className="col-md-4 pr-stat"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p>
                  <CountUp end={s.value} duration={2200} />
                  {s.suffix}
                </p>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Demo video ===== */}
      {product.video && (
        <section className="py-5 mt-4" id="demo">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="pr-eyebrow">Product demo</span>
              <h2 className="pr-section-title mt-3">
                See {product.name} in action
              </h2>
              {product.video.caption && (
                <p className="pr-video-caption mt-3 mx-auto">{product.video.caption}</p>
              )}
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
                <div className="pr-video">
                  <video
                    ref={videoRef}
                    className="pr-video-player"
                    src={product.video.src}
                    poster={product.video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${product.name} product demo video`}
                  >
                    Your browser does not support embedded video.{" "}
                    <a href={product.video.src}>Download the {product.name} demo</a>.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Features ===== */}
      <section className="py-5" id="features">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="pr-eyebrow">Features</span>
            <h2 className="pr-section-title mt-3">
              What {product.name} does
            </h2>
          </div>

          <div className="row gy-4">
            {product.features.map((f, index) => {
              const FIcon = f.icon;
              return (
                <div
                  key={f.title}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  <div className="pr-feature">
                    <div className="pr-feature-icon">
                      <FIcon size={24} aria-hidden="true" />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="pr-band py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="pr-eyebrow">How it works</span>
            <h2 className="pr-section-title mt-3">
              From question to trusted answer
            </h2>
          </div>

          <div className="row gy-4">
            {product.steps.map((step, index) => (
              <div
                key={step.number}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="pr-step">
                  <div className="pr-step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Use cases + interface ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row gy-5 align-items-start">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="pr-eyebrow">Who it&rsquo;s for</span>
              <h2 className="pr-section-title mt-3">
                One chatbot for students and staff
              </h2>
              <div className="pr-usecases mt-4">
                {product.useCases.map((u) => {
                  const UIcon = u.icon;
                  return (
                    <div key={u.title} className="pr-usecase">
                      <div className="pr-usecase-icon">
                        <UIcon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h3>{u.title}</h3>
                        <p>{u.copy}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <span className="pr-eyebrow">Interface</span>
              <h2 className="pr-section-title mt-3">
                Built for everyday use
              </h2>
              <ul className="pr-outcomes mt-4">
                {product.outcomes.map((o) => (
                  <li key={o}>
                    <span className="pr-outcome-check">
                      <FiCheck aria-hidden="true" />
                    </span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Security (dark band) ===== */}
      {product.security && (
        <section className="pr-why py-5 my-4">
          <div className="container py-4">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="pr-eyebrow">Security by design</span>
              <h2 className="pr-section-title mt-3">
                Keeping your student data safe
              </h2>
            </div>
            <div className="row gy-4">
              {product.security.map((card, index) => {
                const SIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="col-lg-3 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="pr-why-card">
                      <div className="pr-why-icon">
                        <SIcon size={22} aria-hidden="true" />
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== Specs ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="text-center mb-5" data-aos="fade-up">
                <span className="pr-eyebrow">Technical overview</span>
                <h2 className="pr-section-title mt-3">
                  {product.name} at a glance
                </h2>
              </div>

              <div className="pr-table" data-aos="fade-up">
                {product.specs.map((row) => (
                  <div key={row.label} className="pr-table-row">
                    <div className="pr-table-label">{row.label}</div>
                    <div className="pr-table-value">{row.value}</div>
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
                <span className="pr-eyebrow">Frequently asked questions</span>
                <h2 className="pr-section-title mt-3">
                  Questions about {product.name}
                </h2>
              </div>
              <Accordion items={product.faqs} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5">
        <div className="container">
          <div className="pr-cta text-center" data-aos="fade-up">
            <span className="pr-eyebrow">Next step</span>
            <h2 className="mt-3">See {product.name} with your own student data</h2>
            <p className="mt-3">
              Book a 30-minute walkthrough and we&rsquo;ll show how {product.name}{" "}
              answers your students and your staff, using your own documents
              and records.
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center mt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pr-btn-light"
              >
                Book a demo
              </a>
              <Link to="/contact" className="pr-btn-ghost">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Other products (only when there are any) ===== */}
      {others.length > 0 && (
        <section className="pb-5">
          <div className="container">
            <div className="text-center mb-4" data-aos="fade-up">
              <span className="pr-eyebrow">More products</span>
            </div>
            <div className="row gy-4 justify-content-center">
              {others.map((p, index) => {
                const OIcon = p.icon;
                return (
                  <div
                    key={p.slug}
                    className="col-lg-5 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Link to={`/products/${p.slug}`} className="pr-more">
                      <div className="pr-feature-icon">
                        <OIcon size={22} aria-hidden="true" />
                      </div>
                      <div className="pr-more-body">
                        <span className="pr-more-cat">{p.category}</span>
                        <h3>{p.name}</h3>
                        <p>{p.tagline}</p>
                      </div>
                      <FiArrowRight className="pr-more-arrow" aria-hidden="true" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetail;
