import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './CarouselSectionCard.css';
import Energy from '../../assets/imgs/Carousel/energy-hero.jpg';
import ngoImg from '../../assets/imgs/Carousel/ngo-hero.jpg';
import educationImg from '../../assets/imgs/Carousel/education-hero.jpg';

const slides = [
  {
    img: educationImg,
    alt: 'Students celebrating graduation',
    badge: 'Education',
    title: (
      <>
        Empowering Future <span className="cs-highlight">Through Education</span>
      </>
    ),
    text: 'We build digital solutions that transform learning into limitless opportunities.',
    link: '/ItServices/salesforce-education-cloud',
  },
  {
    img: ngoImg,
    alt: 'Children smiling at a community outreach program',
    badge: 'Nonprofit',
    title: (
      <>
        Technology for <span className="cs-highlight">Social Good</span>
      </>
    ),
    text: 'Partnering with NGOs to create platforms that amplify impact and reach communities.',
    link: '/ItServices/salesforce-nonprofit-cloud',
  },
  {
    img: Energy,
    alt: 'Wind turbines in a field at sunset',
    badge: 'Energy & Utilities',
    title: (
      <>
        Powering the <span className="cs-highlight">Future of Energy</span>
      </>
    ),
    text: 'Modernizing operations and customer experiences to accelerate the transition to sustainable energy.',
    link: '/ItServices/salesforce-energy-utilities-cloud',
  },
];

export default function CarouselSectionCard() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide cs-carousel"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      {/* Indicators */}
      <div className="carousel-indicators cs-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <img src={slide.img} className="d-block w-100 carousel-img" alt={slide.alt} />
            <div className="cs-overlay"></div>
            <div className="cs-caption">
              <span className="cs-badge">
                <span className="cs-badge-dot"></span>
                {slide.badge}
              </span>
              <h2 className="cs-title">{slide.title}</h2>
              <p className="cs-text">{slide.text}</p>
              <div className="cs-actions">
                <Link to={slide.link} className="cs-btn cs-btn-primary">
                  Explore Solutions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/contact" className="cs-btn cs-btn-ghost">
                  Talk to Us
                </Link>
              </div>
            </div>
            <span className="cs-counter" aria-hidden="true">
              0{i + 1} <span className="cs-counter-total">/ 0{slides.length}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev cs-control"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="cs-control-circle" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next cs-control"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="cs-control-circle" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
