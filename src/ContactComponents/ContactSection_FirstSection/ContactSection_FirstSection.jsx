import './ContactSection_FirstSection.css';
import img from '../../assets/imgs/contact-4/img-4.avif';
import img1 from '../../assets/imgs/contact-4/img-5.png';
import img2 from '../../assets/imgs/contact-4/img-3.png';
import bgLine from '../../assets/imgs/contact-4/img-bg-1.png';

import avatar1 from '../../assets/imgs/hero-1/avatar-1.png';
import avatar2 from '../../assets/imgs/hero-1/avatar-2.png';
import avatar3 from '../../assets/imgs/hero-1/avatar-3.png';

const ContactSection_FirstSection = () => {
  return (
    <section className="ContactSection_FirstSection bg-4 section-padding">
      <div className="container">
        <div className="row">
          {/* Left text section */}
          <div className="col-lg-6">
            <div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
              <h6 className="reactbtn purple-text text-center text-md-start">Reach Out</h6>
              <h3 className="contactSectionHeading mb-4 d-none d-md-block">Thinking about<br/> a project? Get <br/>in touch with <br/>us.</h3>
              <h3 className='contactSectionHeading mb-4 d-md-none'>Thinking about a project? Get in touch with us.</h3>
              <p className="contactSectionPara text-center text-md-start w-100 pe-md-5">
                We're here to listen, collaborate, and bring your
                vision to life.Reach out today let's start building
                something amazing together.
              </p>
            </div>
          </div>

          {/* Right images */}
          <div className="contactSectionDiv col-lg-6 rounded-3">
            <div className="rounded-5 border border-5 border-white zoom-img mb-5">
              <img
                className="rounded-5 w-100"
                src={img} 
                alt="Codm"
              />
            </div>
          </div>

          {/* Bottom 3 columns */}
          <div className="col-lg-4">
            <div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
              <img
                className="rounded-4 w-100"
                src={img1}
                alt="Codm"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="h-100 purple-bg rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
              <div className="position-relative z-1 fix text-center">

                <div className="d-flex justify-content-center mb-3">
                  <img src={avatar1} alt="Codm" />
                  <img
                    className="avt-hero"
                    src={avatar2}
                    alt="Codm"
                  />
                  <img
                    className="avt-hero"
                    src={avatar3}
                    alt="Codm"
                  />
                </div>

                <h1 className="count fw-black text-white my-0">
                  +<span className="odometer"></span>
                  <span>20</span>
                </h1>
                <p className="fs-5 text-100-keep mb-0">Active Projects</p>
              </div>
               
               <div className='overflow-hidden d-none d-md-block'>
                 <img
                className="position-absolute top-50 start-50 translate-middle overflow-hidden"
                src={bgLine} width={'100%'}
                alt="Codm"
              />
               </div>
             
            </div>
          </div>

          <div className="col-lg-4">
            <div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
              <img
                className="rounded-4 w-100"
                src={img2}
                alt="Codm"
              />
            </div>
          </div>

          

        </div>
      </div>
    </section>

    // second section
  );
};

export default ContactSection_FirstSection;