import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
import bgImg from "../../assets/imgs/hero-1/background.png";

import { heroSection } from "../../data";
import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";
import AnimatedPill from "./AnimatedPill";
import saleforceLogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import Appexchangelogo from '../../assets/imgs/cta-15/Appexchange_logo.png';
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <>
    <section className="hero-Section hero"> 
      <div className="container heroContainer">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-6 mb-0">
            <span className="agentBtn d-inline-flex align-items-center border border-2 border-white rounded-pill px-3 mt-5 py-1">
              AgentForce
            </span>

            <h1 className="Heading3 mt-4">
              {heroSection.HEADING}
            </h1>
            <p className="text-sm text-gray-600 mt-4">
             We deliver enterprise scale Salesforce solutions and AI driven transformations that drive measurable business impact. From Sales Cloud optimization to intelligent automation, we partner with you to modernize, streamline, and scale operations using cutting edge technologies and industry best practices. Our certified experts bring proven expertise across 8+ industries, delivering 50+ successful implementations with average ROI improvements of 300-400%.
            </p>

          </div>

          {/* Right Content */}
          <div className="col-12 col-md-6 pt-5">

            <div className="rightsidePillSection">
              <div className="animatedPillsContainer">
                <div className="animatedPills1">
                  <AnimatedPill text="CRM"/>
                </div>
                <div className="animatedPills2">
                  <AnimatedPill text="LLM" />
                </div>
                <div className="animatedPills3">
                  <AnimatedPill text="EINSTEIN" />
                </div>
                <div className="animatedPills4">
                  <AnimatedPill text="AI" />
                </div>
                <div className="animatedPills5">
                  <AnimatedPill text="AgentForce" />
                </div>
                <div className="animatedPills6">
                  <AnimatedPill text="Salesforce" />
                </div>
              </div>

              <div
                className="robot_Container d-flex justify-content-center align-items-center pt-md-5"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "360px",
                }}
              >
                <img
                  src={robotImg}
                  alt="Robot"
                  className="hero-img img-fluid"
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      <div className="container py-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
              <Link 
                to="/ItServices"
                className="explorebtn btn-gradient text-decoration-none"
              >
                Explore Now
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.25 15.25V6.75H8.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L6.75 17.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <ContactUsBtn />
              
              <img src={saleforceLogo} alt="" width={'16%'} className="salesforceLogo d-none d-md-block"/>
              <img src={Appexchangelogo} alt="" width={'16%'} className="Appexchangelogo d-none d-md-block"/>
              
       </div>
    </>
  );
}
export default Hero;