// import img from '../../assets/imgs/contact-5/icon-1.svg';
// import img1 from '../../assets/imgs/contact-4/img-5.png';
// import img2 from '../../assets/imgs/contact-4/img-3.png';
// import bgLine from '../../assets/imgs/contact-4/img-bg-1.png';
import './ContactSection_SecondSection.css';
import icon1 from '../../assets/imgs/contact-5/icon-1.svg';
import icon2 from '../../assets/imgs/contact-5/icon-2.svg';
import icon3 from '../../assets/imgs/contact-5/icon-3.svg';
import icon4 from '../..//assets/imgs/contact-5/icon-4.svg';

import flag1 from '../../assets/imgs/contact-4/Flag of UK.png';
import flag2 from '../../assets/imgs/contact-4/Flag of UK.png';
import flag3 from '../../assets/imgs/contact-4/Flag_of_India.png';
import flag4 from '../../assets/imgs/contact-4/Flag_of_the_United_States.png';

const ContactSection_SecondSection = () => {
  return (
    <section className="ContactSection_SecondSection p-md-2 text-center text-md-start">
      <div className="container">
        <div className="row">
          {/* Help & Support */}
          <div className="ContactSection_SecondSectionContainer col-12 col-md-6 col-lg-3 mb-md-0 pt-md-5 pt-3">
            <div className="feature-item mb-5 mb-lg-0 pe-md-5 hover-up text-center text-md-start">
              <div className="icon-flip position-relative rounded-3 mb-4">
                <div className="S_secondLineImg">
                  <img src={icon1} alt="Codm" />
                  <span className="customLine"></span>
                </div>
              </div>
              <h6 className='contactHeading'>Help &amp; Support</h6>
              <p className="text-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span className='text-black'>info@codmsoftware.co.uk</span>
              </p>
              <p>Contact us for help with products, services, or developer tools.</p>
              <p>We aim to respond within 24 hours on business days</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="col-12 col-md-6 col-lg-3 mb-md-0 text-center text-md-start d-flex justify-content-center pt-md-5 pt-3">
            <div className="feature-item mb-5 mb-lg-0 pe-md-5 hover-up text-center text-md-start">

              <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4 mx-auto mx-md-0">
                <div className="S_secondLineImg">
                  <img src={icon2} alt="Codm" />
                  <span className="customLine"></span>
                </div>
              </div>

              <h6 className="contactHeading">Call Us</h6>

              <p className="text-center text-md-start">
                <span>
                  <img
                    src={flag1}
                    alt="UK Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  UK: (+44)01218186924 <br />
                </span>

                <span>
                  <img
                    src={flag4}
                    alt="USA Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  USA: (+1) 201 623 3132 <br />
                </span>

                <span>
                  <img
                    src={flag3}
                    alt="India Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  India: (+91) 9717116432
                </span>
              </p>
            </div>
          </div>


          {/* Business Department */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 pt-5 d-flex justify-content-center">
            <div className="feature-item mb-5 mb-lg-0 pe-md-5 hover-up text-center text-md-start">

              <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4 mx-auto mx-md-0">
                <div className="S_secondLineImg text-center text-md-start">
                  <img src={icon3} alt="Codm" />
                  <span className="customLine"></span>
                </div>
              </div>

              <h6 className="contactHeading text-center text-md-start">
                Business Department
              </h6>

              <p className="text-500 text-center text-md-start" style={{ display: "grid" }}>
                <span>
                  <img
                    src={flag1}
                    alt="UK Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  Regus - Edmund house, 12-22 Newhall St, Birmingham B3 3AS,UK
                </span>
                <br />

                <span>
                  <img
                    src={flag2}
                    alt="London Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  London: 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UK
                </span>
              </p>

            </div>
          </div>


          {/* Global Branch */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 pt-5 d-flex justify-content-center">
            <div className="feature-item mb-5 mb-lg-0 pe-md-5 hover-up text-center text-md-start mb-3">

              <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4 mx-auto mx-md-0">
                <div className="S_secondLineImg text-center text-md-start">
                  <img src={icon4} alt="Codm" />
                  <span className="customLine"></span>
                </div>
              </div>

              <h6 className="contactHeading text-center text-md-start">
                Global Branch
              </h6>

              <p className="text-500 text-center text-md-start" style={{ display: "grid" }}>
                <span>
                  <img
                    src={flag4}
                    alt="USA Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  USA: Talent4World LLC 4501 Nightland Dr Plano, TX 75024 - USA
                </span>

                <br />

                <span>
                  <img
                    src={flag3}
                    alt="India Flag"
                    style={{ width: "28px", height: "20px", marginRight: "6px" }}
                  />
                  <b>SaaS AI Labs</b><br />
                  Ihdp Business Park Plot Number 7, Serenia second floor,
                  Sector 127, Noida Uttar Pradesh 201304
                </span>
              </p>

            </div>
          </div>


        </div>
      </div>
    </section>

  );
};

export default ContactSection_SecondSection;
