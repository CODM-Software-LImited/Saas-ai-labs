import "./Testimonial.css";
import DotBtn from "../../utils/Dotbtn/Dotbtn";
import avatar1 from "../../assets/imgs/testimonial-1/avatar-1.png";
import avatar2 from "../../assets/imgs/testimonial-1/avatar-2.png";
import avatar3 from "../../assets/imgs/testimonial-1/avatar-3.png";

const testimonials = [
  {
    text: "Working with CODM was a turning point for us. Their expertise in building customised CRM solutions has transformed our customer interactions.",
    author: "Kendrick Shaw",
    role: "Operations Director",
    img: avatar1,
    rating: 5,
  },
  {
    text: "The team modernised our Salesforce org end to end — automation that used to take days now runs in minutes, and adoption across our sales team has never been higher.",
    author: "Sarah Smith",
    role: "Head of Sales",
    img: avatar2,
    rating: 5,
    featured: true,
  },
  {
    text: "From data migration to go-live support, everything was handled professionally and on schedule. They feel like an extension of our own team.",
    author: "David Miller",
    role: "IT Manager",
    img: avatar3,
    rating: 5,
  },
];

function Stars({ rating, light }) {
  return (
    <div className="tsm-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className={
            n <= rating
              ? `tsm-star tsm-star--filled${light ? " tsm-star--light" : ""}`
              : "tsm-star"
          }
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26 6.6.72-4.9 4.55 1.34 6.47L12 16.77 6.06 20l1.34-6.47-4.9-4.55 6.6-.72L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="tsm-section">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <DotBtn text="Testimonials" />
          </div>
          <h2 className="Heading3 my-3">What Our Clients Say</h2>

          <div className="tsm-trustline">
            <div className="tsm-avatar-cluster">
              {[avatar1, avatar2, avatar3].map((a, i) => (
                <img src={a} alt="" key={i} className="tsm-cluster-img" />
              ))}
            </div>
            <div className="tsm-trustline-meta">
              <Stars rating={5} />
              <span className="tsm-trustline-text">Trusted by 50+ businesses worldwide</span>
            </div>
          </div>
        </div>

        <div className="tsm-marquee" data-aos="fade-up">
          <div className="tsm-track">
            {[0, 1].map((copy) => (
              <div
                className="tsm-track-group"
                key={copy}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {testimonials.map((t) => (
                  <figure
                    className={`tsm-card ${t.featured ? "tsm-card--featured" : ""}`}
                    key={`${copy}-${t.author}`}
                  >
                    <svg className="tsm-quote-icon" width="34" height="26" viewBox="0 0 34 26" aria-hidden="true">
                      <path d="M0 26V15.6C0 6.933 4.4 1.733 13.2 0l1.6 3.9c-4.934 1.3-7.4 4.117-7.4 8.45H13V26H0zm19.4 0V15.6c0-8.667 4.4-13.867 13.2-15.6l1.6 3.9c-4.933 1.3-7.4 4.117-7.4 8.45h5.6V26H19.4z" />
                    </svg>
                    <blockquote className="tsm-quote">{t.text}</blockquote>
                    <figcaption className="tsm-footer">
                      <img src={t.img} alt={t.author} className="tsm-avatar" />
                      <div className="tsm-person-meta">
                        <span className="tsm-name">{t.author}</span>
                        <span className="tsm-role">{t.role}</span>
                      </div>
                      <div className="tsm-footer-stars">
                        <Stars rating={t.rating} light={t.featured} />
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
