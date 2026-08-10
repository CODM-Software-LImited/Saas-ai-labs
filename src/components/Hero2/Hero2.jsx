import './Hero2.css'
import oipimg from "../../assets/imgs/features-1/OIP.jpeg";
import eduImg from "../../assets/imgs/features-1/Education.jpeg";
import manuImg from "../../assets/imgs/features-1/coe-manufacturing-png-4.png";
import financialImg from "../../assets/imgs/features-1/financial.png";
import nonprofitImg from "../../assets/imgs/features-1/NonProfit.png";
import salesImg from "../../assets/imgs/features-1/Sales.png";
import cseImg from "../../assets/imgs/features-1/cse.jpg";
import transportImg from "../../assets/imgs/features-1/trasnport.png";

const features = [
  {
    img: oipimg,
    alt: "Healthcare",
    title: "Healthcare",
    desc: "Tailored solutions for healthcare providers.",
    cloud: "Health & Insurance Cloud",
    delay: 50,
  },
  {
    img: eduImg,
    alt: "Education",
    title: "Higher Education",
    desc: "Solutions for modern educational institutions.",
    cloud: "Education Cloud",
    delay: 100,
  },
  {
    img: manuImg,
    alt: "Manufacturing",
    title: "Manufacturing",
    desc: "Digital management systems for manufacturing facilities.",
    cloud: "Manufacturing Cloud",
    delay: 200,
  },
  {
    img: financialImg,
    alt: "Financial",
    title: "Financial Services",
    desc: "Corporate solutions for finance professionals.",
    cloud: "Financial Services Cloud",
    delay: 300,
  },
  {
    img: nonprofitImg,
    alt: "Nonprofit",
    title: "Nonprofit",
    desc: "Collaborative technology for nonprofit teams.",
    cloud: "Nonprofit Cloud",
    delay: 300,
  },
  {
    img: salesImg,
    alt: "Sales Operations",
    title: "Sales Operations",
    desc: "Cutting edge CRM to boost Sales operations.",
    cloud: "Sales Cloud",
    delay: 300,
  },
  {
    img: cseImg,
    alt: "Customer Service",
    title: "Customer Service",
    desc: "Salesforce service cloud solutions to handle cases.",
    cloud: "Service Cloud",
    delay: 300,
  },
  {
    img: transportImg,
    alt: "Energy",
    title: "Energy, Telecommunication & Transport",
    desc: "Industry clouds provide zero code capabilities.",
    cloud: "Industries Cloud",
    delay: 300,
  },
];

const Hero2 = () => {
  return (
    <>
    <div className="hero2_container container">
      <h4 className='text-center pt-lg-5 Heading3'>Industries We Serve</h4>
      <div className="row mt-5 container">
        {features.map((feature, index) => (
          <div
            className="hero2_cards feature_container col-lg-3 col-md-6 mb-4"
            key={index}
            data-aos="fade-zoom-in"
            data-aos-delay={feature.delay}
          >
            <div className="feature-item hero2div text-start h-100">
              <div className="hero2ImgContainer icon_flipbox position-relative icon-shape icon-xxl rounded-3 mb-4 d-flex align-items-center justify-content-center">
                <img src={feature.img} alt={feature.alt} className="Hero2_feature-img" />
              </div>
              <h6 className='Hero2_feature-title'>{feature.title}</h6>
              <p>{feature.desc}</p>
              <p><b>{feature.cloud}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Hero2;