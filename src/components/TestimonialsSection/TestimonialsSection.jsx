import React from "react";
import { Link } from "react-router-dom";
import dotsImg from "../../assets/imgs/features-1/dots.png";
import bgLine from "../../assets/imgs/testimonial-1/bg-line.png";
import avatar1 from "../../assets/imgs/testimonial-1/avatar-1.png";
import avatar2 from "../../assets/imgs/testimonial-1/avatar-2.png";
import avatar3 from "../../assets/imgs/testimonial-1/avatar-3.png";
import avatar4 from "../../assets/imgs/testimonial-1/avatar-4.png";
import flag2 from "../../assets/imgs/testimonial-1/flag-2.png";
import flag3 from "../../assets/imgs/testimonial-1/flag-3.png";
import flag4 from "../../assets/imgs/testimonial-1/flag-4.png";
import "./TestimonialsSection.css";
import DotBtn from "../../utils/Dotbtn/Dotbtn";
import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";

const TestimonialsSection = () => {
  return (
    <section className="section-testimonial-1 position-relative">
      <div className="container position-relative z-1">
        <div className="row">
          {/* Left Column */}
          <div className="testimonial_leftcolumn col-lg-4">
            <div className="pe-8 mt-10">
              <DotBtn text="Testimonials"/>

              <h1
                className="testimonial_heading"
                data-aos="fade-zoom-in"
                data-aos-delay="100"
              >
                What our <br/> clients <br/> say
              </h1>

              <p
                className="fs-5 fw-medium"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
              >
                Our clients consistently praise<br/> our dedication, technical <br/>
                expertise, and timely<br/> delivery. Their positive feedback<br/> reflects
                our commitment to<br/> quality and long-term <br/>partnerships
              </p>


            {/* contact btn and help center */}
              <div className="testimonial_btn d-flex flex-wrap align-items-center mt-8">
                <Link
                  to="/contact"
                  className="hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                >
                 <ContactUsBtn/>
                </Link>

                <Link
                  to="/help-center"
                  className="ms-5 ms-md-5 mt-5 mt-md-0 text-decoration-none text-black"
                  data-aos="fade-zoom-in"
                  data-aos-delay="300"
                >
                  Help Center
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                  >
                    <path
                      d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>



          {/* Middle Column */}
          <div className="testimonial_middleColumn col-lg-4">
            <div
              className="testimonials_card bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
              data-aos="fade-zoom-in"
              data-aos-delay="100"
            >
              <p className="text-900">
                Working with CodM was a turning point for us. Their expertise in
                building customised CRM solutions has transformed our customer
                interactions.
              </p>
              <div className="d-flex align-items-center mt-5">
                <img className="avatar-lg" src={avatar1} alt="Codm" />
                <div className="d-flex flex-column">
                  <h6 className="ms-3 fs-6 mb-0">Kendrick Shaw</h6>
                  <div className="flag ms-3"></div>
                </div>
              </div>
              <Link
                to="#"
                className="position-absolute top-0 start-0 end-0 bottom-0"
              />
            </div>

            <div 
              className="testimonials_card bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
              data-aos="fade-zoom-in"
              data-aos-delay="200"
            >
              <p className="text-900">
                CodM has given our company a strategic boost. Customised
                solutions improved our workflows and supply chain management.
              </p>
              <div className="d-flex align-items-center mt-5">
                <img className="avatar-lg" src={avatar2} alt="Emily" />
                <div className="d-flex flex-column">
                  <h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
                  <div className="flag ms-3">
                    <img src={flag2} alt="Codm" />
                    <span className="fs-8">Healthcare</span>
                  </div>
                </div>
              </div>
              <Link
                to="#"
                className="position-absolute top-0 start-0 end-0 bottom-0"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <div
              className="testimonials_card bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover"
              data-aos="fade-zoom-in"
              data-aos-delay="300"
            >
              <p className="text-900">
                Thanks to CodM, our marketing efforts skyrocketed. The
                personalized CRM solution enhanced our targeting, resulting in
                higher conversion rates.
              </p>
              <div className="d-flex align-items-center mt-5">
                <img className="avatar-lg" src={avatar3} alt="Codm" />
                <div className="d-flex flex-column">
                  <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                  <div className="flag ms-3">
                    <img src={flag3} alt="Codm" />
                    <span className="fs-8">Manufacturing Director</span>
                  </div>
                </div>
              </div>
              <Link
                to="#"
                className="position-absolute top-0 start-0 end-0 bottom-0"
              />
            </div>

            <div
              className="testimonials_card bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
              data-aos="fade-zoom-in"
              data-aos-delay="400"
            >
              <p className="text-900">
                CodM transformed our customer service. Their CRM
                solutioncentralized information, enabling prompt and
                personalized support.
              </p>
              <div className="d-flex align-items-center mt-5">
                <img className="avatar-lg" src={avatar4} alt="Codm" />
                <div className="d-flex flex-column">
                  <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                  <div className="flag ms-3">
                    <img src={flag4} alt="Codm" />
                    <span className="fs-8">Finance Manager</span>
                  </div>
                </div>
              </div>
              <Link
                to="#"
                className="position-absolute top-0 start-0 end-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Line */}
      <div className="position-absolute top-0 start-0 z-0">
        <img src={bgLine} alt="Codm"  width={'100%'}/>
      </div>
    </section>
  );
};

export default TestimonialsSection;
