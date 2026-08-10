// import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/imgs/features-3/img-1.png";
import { Link, NavLink } from "react-router-dom";
import './Hero4.css';
import CountUp from "../../utils/CountUp/CountUp";
import FreeQuote from "./FreeQuote";

function Hero4() {
  return (
    <section>
      <div className="Hero4_container container-fluid position-relative section-padding py-lg-5 px-lg-5 pb-5">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Image */}
            <div className="col-lg-6 text-lg-end">
              <div className="position-relative d-inline-block mb-lg-0 mb-8">
                <img
                  className="rounded-4 aos-init aos-animate"
                  src={img1}
                  width={'100%'}
                  alt="Codm"
                  data-aos="fade-zoom-in"
                  data-aos-delay="200"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="ps-lg-5 hero4_rightContainer">
                <h6 className="hero4_righth6" data-aos="fade-zoom-in" data-aos-delay="100">
                  Our vision
                </h6>
                <h6
                  className="hero4_Heading ds-3 mt-2 mb-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay="200"
                >
                  Driven by<br /> Innovation.<br /> Focused on <br />Impact.
                </h6>
                <p className="mb-5 custom-p">
                  Our vision is to revolutionize the digital world by creating ai driven, scalable, and user-friendly technology that empowers businesses and enriches lives globally.
                </p>

                {/* Buttons */}
                <div className="hero4_btns d-flex flex-column flex-sm-row 
                align-items-center align-items-sm-center 
                justify-content-center justify-content-sm-start 
                text-center text-sm-start
                pb-4 border-bottom gap-3 pb-lg-5">


                  <FreeQuote/>

                  <a
                    href="/HowWeWork.pdf"
                    className="text-decoration-underline fw-bold text-black px-3"
                    data-aos="fade-zoom-in"
                    data-aos-delay="300"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    How We Work
                  </a>

                </div>

                <div className="row text-center text-md-start">

                  {/* LEFT COLUMN */}
                  <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-center border-md-end mt-4 mt-md-5 gap-2">

                    <div className="d-flex align-items-center">
                      <h2 className="odometer mb-0">
                        <CountUp end={99} duration={6000} enableScrollSpy />
                      </h2>
                      <span className="fs-4 fw-medium ms-1">%</span>
                    </div>

                    <p
                      className="ms-md-3 mb-0"
                      data-aos="fade-zoom-in"
                      data-aos-delay="200"
                    >
                      Genuine repeated happy customers.
                    </p>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4 mt-md-5 gap-2">

                    <div className="d-flex align-items-center">
                      <h2 className="odometer mb-0">
                        <CountUp end={98} duration={6000} enableScrollSpy scrollSpyOnce={false} />
                      </h2>
                      <span className="fs-4 fw-medium ms-1">%</span>
                    </div>

                    <p
                      className="ms-md-3 mb-0"
                      data-aos="fade-zoom-in"
                      data-aos-delay="300"
                    >
                      Trusted by <br className="d-none d-md-block" /> companies
                    </p>
                  </div>

                </div>

              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero4;