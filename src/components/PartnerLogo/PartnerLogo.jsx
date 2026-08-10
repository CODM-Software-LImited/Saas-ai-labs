import "./PartnerLogo.css";
import img1 from "../../assets/imgs/CLI logo/191-1914774_dynamic-signal-logo-electric-blue-clipart.png";
import img2 from '../../assets/imgs/CLI logo/absa-logo-red-bg.png';
import img3 from '../../assets/imgs/CLI logo/bellhop.png';
import img4 from '../../assets/imgs/CLI logo/Coventry University.png';
import img5 from '../../assets/imgs/CLI logo/change-machine-logo-large.png';
import img7 from '../../assets/imgs/CLI logo/Phase_Trust.png';
import img6 from '../../assets/imgs/CLI logo/smartestEnergy.png';
import img8 from '../../assets/imgs/CLI logo/Yamaha-Logo.png';

const logos = [
  { src: img1, className: "w-120" },
  { src: img2, className: "w-80" },
  { src: img3, className: "w-100" },
  { src: img4, className: "w-150"},
  { src: img5, className: "w-110"},
  { src: img6, className: "w-90" },
  { src: img7, className: "w-130"},
  { src: img8, className: "w-160"},
];

const PartnerLogo = () => {

  const infiniteLogos = [...logos, ...logos];

  return (
    <>
      <div className="px-5 py-3 container mt-lg-0 pt-5">
           <h4 className='text-center Heading3 pb-2 pb-5'>Clients We Serve</h4>
        <div className="container">
          <div className="row">
            <div className="logo-fade position-relative z-1">
              <div className="logo-track">
                {infiniteLogos.map((logo, index) => (
                  <div className="logo-item" key={index}>
                    <img src={logo.src} alt={`Logo ${index + 1}`} className={logo.className} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PartnerLogo;