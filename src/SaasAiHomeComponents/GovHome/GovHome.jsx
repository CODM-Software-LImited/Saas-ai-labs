// SaaS AI Labs home page - sections built from the Government AI Capability
// Statement (src/data/saasAiHome.js), styled in the site's running theme.
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiPlay, FiTarget } from "react-icons/fi";

import CountUp from "../../utils/CountUp/CountUp";
import Accordion from "../../ServiceComponents/ui/Accordion/Accordion";
import products from "../../data/products";
import ProductHeroArt from "../../pages/Products/ProductHeroArt";
import {
  hero,
  overview,
  vision,
  stack,
  productsSection,
  useCases,
  responsible,
  delivery,
  skills,
  foundation,
  partnership,
  cta,
  stats,
  faqs,
} from "../../data/saasAiHome";

import "../../pages/Products/Products.css";
import "./GovHome.css";

const SectionHead = ({ eyebrow, title, sub, light = false, align = "center" }) => (
  <div className={`gh-head gh-head--${align} ${light ? "gh-head--light" : ""}`} data-aos="fade-up">
    <span className="gh-eyebrow">{eyebrow}</span>
    <h2 className="gh-title">{title}</h2>
    {sub && <p className="gh-sub">{sub}</p>}
  </div>
);

/* ---------- 1. Hero ---------- */
function GovHero() {
  return (
    <section className="gh-hero">
      <div className="gh-hero-bg" aria-hidden="true">
        <span className="gh-blob gh-blob--1" />
        <span className="gh-blob gh-blob--2" />
      </div>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7" data-aos="fade-up">
            <span className="gh-eyebrow">{hero.eyebrow}</span>
            <h1 className="gh-hero-title">
              AI Engineering for{" "}
              <span className="gh-highlight">Government &amp; Public Services</span>
            </h1>
            <p className="gh-hero-sub">{hero.sub}</p>

            <ul className="gh-tags">
              {hero.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="gh-actions">
              <Link to="/contact" className="gh-btn-primary">
                Talk to our AI team <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/products" className="gh-btn-outline">
                Explore our products
              </Link>
            </div>

            <p className="gh-hero-parent">
              {hero.parent}{" "}
              <a href="https://codmsoftware.co.uk/" target="_blank" rel="noreferrer">
                codmsoftware.co.uk
              </a>
            </p>
          </div>

          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="150">
            <div className="gh-panel-wrap">
              {hero.chips.map((c, i) => {
                const CIcon = c.icon;
                return (
                  <span key={c.text} className={`gh-chip gh-chip--${i === 0 ? "top" : "bottom"}`}>
                    <CIcon aria-hidden="true" /> {c.text}
                  </span>
                );
              })}
            <div className="gh-panel">
              <div className="gh-panel-years">
                <span className="gh-panel-num">
                  <CountUp end={hero.panel.years} duration={1800} />+
                </span>
                <span className="gh-panel-numlabel">{hero.panel.yearsLabel}</span>
              </div>
              <ul className="gh-panel-pillars">
                {hero.panel.pillars.map((p) => (
                  <li key={p.label}>
                    <span className="gh-panel-label">{p.label}</span>
                    <span className="gh-panel-copy">{p.copy}</span>
                  </li>
                ))}
              </ul>
              <div className="gh-panel-foot">
                {hero.panel.footer.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 1b. Numbers strip ---------- */
function GovStats() {
  return (
    <section className="gh-stats">
      <div className="container">
        <div className="row gy-4">
          {stats.map((st, i) => (
            <div key={st.label} className="col-md-3 col-6 gh-stat" data-aos="fade-up" data-aos-delay={i * 80}>
              <p>
                <CountUp end={st.value} duration={1800} />
                {st.suffix}
              </p>
              <span>{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Overview + where we contribute ---------- */
function GovOverview() {
  return (
    <section className="gh-section">
      <div className="container">
        <div className="row gy-5 align-items-start">
          <div className="col-lg-5" data-aos="fade-up">
            <SectionHead eyebrow={overview.eyebrow} title={overview.title} align="left" />
            {overview.body.map((p) => (
              <p key={p} className="gh-copy">
                {p}
              </p>
            ))}
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <p className="gh-mini-title">{overview.contributeTitle}</p>
            <div className="row g-3">
              {overview.contribute.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="col-md-6">
                    <div className="gh-tile">
                      <span className="gh-tile-icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{c.title}</h3>
                        <p>{c.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Vision ---------- */
function GovVision() {
  return (
    <section className="gh-section gh-band">
      <div className="container">
        <SectionHead eyebrow={vision.eyebrow} title={vision.title} sub={vision.sub} />
        <div className="row g-4">
          {vision.items.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="gh-card">
                  <span className="gh-card-icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Capability stack ---------- */
function GovStack() {
  return (
    <section className="gh-section">
      <div className="container">
        <SectionHead eyebrow={stack.eyebrow} title={stack.title} />
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5" data-aos="fade-up">
            <div className="gh-stackviz" role="img" aria-label="Six building blocks of an AI solution">
              {[...stack.layers].reverse().map((l, i) => (
                <div key={l.number} className="gh-stackviz-layer" style={{ "--i": i }}>
                  <span>{l.number}</span>
                  {l.title}
                </div>
              ))}
              <div className="gh-stackviz-base">Results you can measure</div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="gh-stack">
              {stack.layers.map((l, i) => (
                <div key={l.number} className="gh-layer" data-aos="fade-up" data-aos-delay={i * 60}>
                  <span className="gh-layer-num">{l.number}</span>
                  <div className="gh-layer-body">
                    <h3>{l.title}</h3>
                    <p>{l.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Products ---------- */
function GovProducts() {
  return (
    <section className="gh-section gh-band" id="products">
      <div className="container">
        <SectionHead eyebrow={productsSection.eyebrow} title={productsSection.title} sub={productsSection.sub} />
        <div className="row g-4 justify-content-center">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.slug} className="col-lg-8 d-flex" data-aos="fade-up" data-aos-delay={i * 100}>
                <article className="pr-pcard pr-pcard--wide">
                  <Link to={`/products/${p.slug}`} className="pr-pcard-media" aria-label={`Open ${p.name}`}>
                    {p.heroImage ? <img src={p.heroImage} alt="" className="pr-pcard-img" /> : <ProductHeroArt name={p.name} />}
                    <span className="pr-pcard-tag">
                      <Icon aria-hidden="true" /> {p.category}
                    </span>
                  </Link>
                  <div className="pr-pcard-body">
                    <h3 className="pr-pcard-title">
                      <Link to={`/products/${p.slug}`}>{p.name}</Link>
                    </h3>
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
                          {p.video.duration && <span className="pr-btn-play-time">{p.video.duration}</span>}
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4" data-aos="fade-up">
          <Link to="/products" className="gh-link">
            View all products <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Use cases ---------- */
function GovUseCases() {
  return (
    <section className="gh-section">
      <div className="container">
        <SectionHead eyebrow={useCases.eyebrow} title={useCases.title} />
        {(() => {
          let offset = 0;
          return useCases.groups.map((g) => {
            const slice = useCases.items.slice(offset, offset + g.count);
            offset += g.count;
            return (
              <div key={g.label} className="gh-group">
                <p className="gh-group-label" data-aos="fade-up">
                  {g.label} <span>{slice.length}</span>
                </p>
                <div className="row g-3">
                  {slice.map((u, i) => {
                    const Icon = u.icon;
                    return (
                      <div key={u.title} className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                        <div className="gh-tile">
                          <span className="gh-tile-icon">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <div>
                            <h3>{u.title}</h3>
                            <p>{u.copy}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          });
        })()}
      </div>
    </section>
  );
}

/* ---------- 7. Responsible AI (dark) ---------- */
function GovResponsible() {
  return (
    <section className="gh-section gh-dark">
      <div className="container">
        <SectionHead eyebrow={responsible.eyebrow} title={responsible.title} light />
        <div className="row g-4">
          {responsible.items.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="gh-dark-card">
                  <span className="gh-dark-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Delivery model ---------- */
function GovDelivery() {
  return (
    <section className="gh-section">
      <div className="container">
        <SectionHead eyebrow={delivery.eyebrow} title={delivery.title} sub={delivery.sub} />
        <ol className="gh-steps">
          {delivery.steps.map((s, i) => (
            <li key={s.number} data-aos="fade-up" data-aos-delay={i * 70}>
              <span className="gh-step-num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </li>
          ))}
        </ol>
        <div className="gh-note gh-note--icon" data-aos="fade-up">
          <span className="gh-note-icon">
            <FiTarget size={22} aria-hidden="true" />
          </span>
          <div>
            <span className="gh-note-label">{delivery.measureLabel}</span>
            <p>{delivery.measure}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Skills initiative ---------- */
function GovSkills() {
  return (
    <section className="gh-section gh-band">
      <div className="container">
        <SectionHead eyebrow={skills.eyebrow} title={skills.title} />
        <div className="row g-4">
          {skills.programmes.map((p, i) => (
            <div key={p.number} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="gh-card gh-card--num">
                <span className="gh-card-num">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gh-flow" data-aos="fade-up">
          <span className="gh-flow-label">{skills.modelLabel}</span>
          <ol>
            {skills.model.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Foundation ---------- */
function GovFoundation() {
  return (
    <section className="gh-section">
      <div className="container">
        <SectionHead eyebrow={foundation.eyebrow} title={foundation.title} />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-3" data-aos="fade-up">
            <div className="gh-years">
              <span className="gh-years-num">
                <CountUp end={foundation.years} duration={1800} />+
              </span>
              <span className="gh-years-label">{foundation.yearsLabel}</span>
              <p className="gh-years-note">{foundation.note}</p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row g-4">
              {foundation.columns.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 80}>
                    <div className="gh-column">
                      <span className="gh-card-icon">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <h3>{c.title}</h3>
                      <ul>
                        {c.items.map((it) => (
                          <li key={it}>
                            <FiCheck aria-hidden="true" /> {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. Partnership ---------- */
function GovPartnership() {
  return (
    <section className="gh-section gh-band">
      <div className="container">
        <SectionHead eyebrow={partnership.eyebrow} title={partnership.title} />
        <ol className="gh-chain" data-aos="fade-up">
          {partnership.steps.map((s) => (
            <li key={s.number}>
              <span className="gh-chain-num">{s.number}</span>
              <span className="gh-chain-title">{s.title}</span>
              <span className="gh-chain-copy">{s.copy}</span>
            </li>
          ))}
        </ol>
        <blockquote className="gh-quote" data-aos="fade-up">
          <span className="gh-note-label">{partnership.principleLabel}</span>
          <p>{partnership.principle}</p>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- 11b. FAQ ---------- */
function GovFaq() {
  return (
    <section className="gh-section pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9" data-aos="fade-up">
            <SectionHead eyebrow={faqs.eyebrow} title={faqs.title} />
            <div className="gh-faq">
              <Accordion items={faqs.items} defaultOpen={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 12. CTA ---------- */
function GovCta() {
  return (
    <section className="gh-section">
      <div className="container">
        <div className="gh-cta" data-aos="fade-up">
          <span className="gh-cta-orb gh-cta-orb--1" aria-hidden="true" />
          <span className="gh-cta-orb gh-cta-orb--2" aria-hidden="true" />
          <span className="gh-eyebrow gh-eyebrow--onbrand">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.sub}</p>
          <ul className="gh-cta-pillars">
            {cta.pillars.map((p) => (
              <li key={p.tag}>
                <strong>{p.tag}</strong>
                <span>{p.copy}</span>
              </li>
            ))}
          </ul>
          <div className="gh-cta-actions">
            <Link to="/contact" className="gh-btn-light">
              Contact us
            </Link>
            <Link to="/products" className="gh-btn-ghost">
              See our products
            </Link>
          </div>
          <span className="gh-cta-regions">{cta.regions}</span>
        </div>
      </div>
    </section>
  );
}

function GovHome() {
  return (
    <>
      <GovHero />
      <GovStats />
      <GovOverview />
      <GovVision />
      <GovStack />
      <GovProducts />
      <GovUseCases />
      <GovResponsible />
      <GovDelivery />
      <GovSkills />
      <GovFoundation />
      <GovPartnership />
      <GovFaq />
      <GovCta />
    </>
  );
}

export default GovHome;
