import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectManagementImg from "../../../assets/imgs/features-7/img-6.jpg";
import developmentImg from "../../../assets/imgs/features-7/img-2.png";
import securityImg from "../../../assets/imgs/features-7/img-4.jpg";
import integrationImg from "../../../assets/imgs/features-7/img3.png";
import supportImg from "../../../assets/imgs/features-7/img-5.png";
import { Link } from "react-router-dom";
import "./ServiceMainBlogSection.css";

const blogData = [
  {
    image: projectManagementImg,
    category: "Project Management",
    title: "Salesforce Project Management",
    description:
      "Structured delivery with agile planning, clear milestones, and full lifecycle project ownership.",
    link: "/projectmanagement.html",
  },
  {
    image: developmentImg,
    category: "Development",
    title: "Scalable Salesforce Development",
    description:
      "High-performance solutions using Async Apex, bulk processing, and scalable system design.",
    link: "/asyncapex.html",
  },
  {
    image: securityImg,
    category: "Security",
    title: "Salesforce Shield & Encryption",
    description:
      "Protect critical data using platform encryption, event monitoring, and compliance best practices.",
    link: "/shield.html",
  },
  {
    image: integrationImg,
    category: "Integration",
    title: "Salesforce Integrations",
    description:
      "Seamless integration with external systems using secure APIs and enterprise-ready frameworks.",
    link: "/integrationframework.html",
  },
  {
    image: supportImg,
    category: "Support",
    title: "Salesforce Support & Optimization",
    description:
      "Ongoing support, performance tuning, and enhancements to maximize Salesforce ROI.",
    link: "/support.html",
  },
];


function ServiceMainBlogSection() {
  return (
    <div className="slide-container">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        centeredSlides={false}
        // grabCursor={true}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}

        autoplay={{
          delay: 2500,  
          disableOnInteraction: false,
        }}

        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}

        className="slide-content"
      >

        {blogData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="blogCardCustom bg-white p-4 rounded-2 mb-5" style={{height:"25rem"}}>
              <img src={item.image} className="blogImg" width={'100%'} alt={item.title} />

              <div className="blogInfo pt-3">
                <Link className="no-decoration" to={item.link}>
                  {/* <p className="blogCategory">{item.category}</p> */}
                </Link>

                <h5 className="blogTitle">{item.title}</h5>
                <p className="blogDesc">{item.description}</p>
              </div>

              {/* whole card clickable */}
              <a className="cardClickable" href={item.link}></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons
      <div className="swiper-btn-prev swiper-navBtn"></div>
      <div className="swiper-btn-next swiper-navBtn"></div> */}
    </div>
  );
}
export default ServiceMainBlogSection;









//  {
//     image: blog1,
//     category: "Project Management", 
//     title: "Project Management",
//     description:
//       "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
//     link: "/integrationframework.html",
//   },
  // {
  //   image: blog1,
  //   category: "Apex",
  //   title: "Mastering Async Apex for Large Scale Systems",
  //   description:
  //     "Queueable, Future, Batch, and Scheduled Apex explained for scalable apps.",
  //   link: "/asyncapex.html",
  // },
  // {
  //   image: blog1,
  //   category: "Security",
  //   title: "Salesforce Shield Encryption Best Practices",
  //   description:
  //     "How to secure your org with Platform Encryption, Event Monitoring, and more.",
  //   link: "/shield.html",
  // },
  // {
  //   image: blog1,
  //   category: "Security",
  //   title: "Salesforce Shield Encryption Best Practices",
  //   description:
  //     "How to secure your org with Platform Encryption, Event Monitoring, and more.",
  //   link: "/shield.html",
  // }