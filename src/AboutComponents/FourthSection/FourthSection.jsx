
import img1 from '../../assets/imgs/Certifications/Admin.png';
import img2 from '../../assets/imgs/Certifications/ApplicationArchitect.png';
import img3 from '../../assets/imgs/Certifications/Certified-Agentforce.png';
import img4 from '../../assets/imgs/Certifications/SFBA.png';
import img5 from '../../assets/imgs/Certifications/CPQ.png';
import img6 from '../../assets/imgs/Certifications/DataArchitect.png';
import img7 from '../../assets/imgs/Certifications/OmniStudioConsultant.jpeg';
import img8 from '../../assets/imgs/Certifications/OmniStudioDeveloper.png';
import img9 from '../../assets/imgs/Certifications/PlatformAppBuilder.png';
import img10 from '../../assets/imgs/Certifications/PD1.png';
import img11 from '../../assets/imgs/Certifications/PD2.png';
import img12 from '../../assets/imgs/Certifications/ServiceCloudConsultant.png';
import Dotbtn from '../../utils/Dotbtn/Dotbtn.jsx';

import cyberEssentialsimg from '../../assets/imgs/cta-15/cyber-essentials-logo.png';
import gearsetlogo from '../../assets/imgs/cta-15/gearset-logo.png';
import googlecloudlogo from '../../assets/imgs/cta-15/googlecloud-logo.png';
import salesforcelogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import isologo from '../../assets/imgs/cta-15/isologo.png';
import './fourthSection.css';
import { Link } from 'react-router-dom';

// for slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


// import EventsGallery from '../EventsGallery/EventsGallery.jsx';

const certificateImages = [
  { src: img1, alt: "Admin" },
  { src: img2, alt: "ApplicationArchitect" },
  { src: img3, alt: "Certified-Agentforce" },
  { src: img4, alt: "SFBA" },
  { src: img5, alt: "CPQ" },
  { src: img6, alt: "DataArchitect" },
  { src: img7, alt: "OmniStudioConsultant" },
  { src: img8, alt: "OmniStudioDeveloper" },
  { src: img9, alt: "PlatformAppBuilder" },
  { src: img10, alt: "PD1" },
  { src: img11, alt: "PD2" },
  { src: img12, alt: "ServiceCloudConsultant" },
  { src: cyberEssentialsimg, alt: "Cyber Essentials" },
  { src: gearsetlogo, alt: "Gearset" },
  { src: googlecloudlogo, alt: "Google Cloud" },
  { src: salesforcelogo, alt: "Salesforce", extraPadding: true },
  { src: isologo, alt: "ISO Certification", extraPadding: true },


];

const FourthSection = () => {
  return (
    <section className="section-team-4 position-relative overflow-hidden pt-5">
      <div className="container">
        {/* Header */}
        <div className="fourthSection_Header text-center">
          <div className='d-flex justify-content-center'>
            <Dotbtn text="OUR EXCELLENCE" data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <h3 className="ds-3 my-3">Our Certificates</h3>
          <p className="fs-5">
            Our certifications validate expertise in cutting edge technologies,
            <br />
            showcasing professional skills and industry readiness.
          </p>
        </div>

        {/* Certificates grid */}
        {/* <div className="FourthSection_certificates row mt-8 mb-lg-8 m-0">
          {certificateImages.map((item, i) => (
            <div className="CertificatesCards col-lg-2 col-md-4 mb-lg-4 mb-4 text-center" key={i}>
              <div className="position-relative d-inline-block z-1">
                <div className="CertificatesCards_Img zoom-img rounded-3">
                  <img
                    className={`img-fluid ${i === 2 || i === 11 ? "img-12-custom" : "img-normal"
                      }`}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="FourthSection_certificates mt-8 mb-lg-8">

          {/* Swiper for mobile & tablet */}
          <div className="d-lg-none">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 1000 }}
              loop={true}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
              }}
            >
              {certificateImages.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="CertificatesCards text-center">
                    <div className="position-relative d-inline-block z-1">
                      <div className="CertificatesCards_Img zoom-img rounded-3">
                        {/* <img
                          className={`img-fluid ${i === 2 || i === 11 ? "img-12-custom" : "img-normal"
                            }`}
                          src={item.src}
                          alt={item.alt}
                        /> */}

                        <img
                          className={`img-fluid 
                            ${i === 2 || i === 11 || cyberEssentialsimg ?  "img-12-custom" : "img-normal"} 
                            ${item.extraPadding ? "pt-4rem" : ""}
                          `}
                          src={item.src}
                          alt={item.alt}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="row m-0 d-none d-lg-flex">
            {certificateImages.map((item, i) => (
              <div
                // className="CertificatesCards col-lg-2 mb-lg-4 text-center"
                className={`CertificatesCards col-lg-2 mb-lg-4 text-center ${item.extraPadding ? "pt-4rem" : ""}`}
                key={i}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="CertificatesCards_Img zoom-img rounded-3"> 
                    <img
                      className={`img-fluid ${i === 2 || i === 11 ? "img-12-custom" : "img-normal"
                        }`}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>


      </div>
    </section>
  );
};
export default FourthSection;