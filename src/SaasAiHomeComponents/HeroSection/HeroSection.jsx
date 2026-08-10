import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import {
  initParticles,
  initNeuralNetwork,
  startParallax,
  initCounters,
  initSmoothScroll,
  initButtonHover
} from "./heroAnimations";
import {
  FaRobot,
  FaBolt,
  FaRocket,
  FaChartLine,
  FaLock,
  FaCog
} from "react-icons/fa";


const HeroSection = () => {
  const particlesRef = useRef(null);
  const neuralRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100
    });

    initParticles(particlesRef.current);
    initNeuralNetwork(neuralRef.current);
    startParallax();
    initCounters();
    initSmoothScroll();
    initButtonHover();
  }, []);

  return (
    <section className="hero-section">
      <div className="particles-container">
        <canvas id="particles-canvas" ref={particlesRef}></canvas>
      </div>

      <div className="neural-network">
        <canvas id="neural-canvas" ref={neuralRef}></canvas>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="badge mt-4 p-3" data-aos="fade-up">
              {/* <span className="badge-icon">✦</span> */}
              AI-Powered SaaS Solutions
            </div>

            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Welcome to <span className="highlight-text">SaaS AI Labs</span>
            </h1>

            <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Innovating the Future of AI-Powered SaaS Solutions
            </h2>

            <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
              Welcome to <strong>SaaS AI Labs</strong>, where innovation meets intelligence.
              We specialize in building smart, scalable, and secure SaaS applications powered
              by Artificial Intelligence.
            </p>

            <p className="hero-description" data-aos="fade-up" data-aos-delay="350">
              <strong>SaaS AI Labs</strong> is a company of <strong>CODM Software Limited, UK</strong>
              — together, we bring global expertise in software development, automation, and
              intelligent system design.
            </p>

            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://codmsoftware.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary p-3"
              >
                <span>Explore CODM Software</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
          </div>

          <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
            <div className="ai-illustration">
              <div className="tech-cube">
                <div className="cube-face front">AI</div>
                <div className="cube-face back">ML</div>
                <div className="cube-face right">DL</div>
                <div className="cube-face left">NLP</div>
                <div className="cube-face top">CV</div>
                <div className="cube-face bottom">IoT</div>
              </div>

              <div className="orbit orbit-1"><div className="orbit-icon">🤖</div></div>
              <div className="orbit orbit-2"><div className="orbit-icon">⚡</div></div>
              <div className="orbit orbit-3"><div className="orbit-icon">🚀</div></div>
              <div className="float-card card-1"><div className="card-icon"></div><span>Analytics</span></div>
              <div className="float-card card-2"><div className="card-icon"></div><span>Secure</span></div>
              <div className="float-card card-3"><div className="card-icon"></div><span>Automated</span></div>

              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;