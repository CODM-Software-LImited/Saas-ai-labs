import { Link } from "react-router-dom";
import './S_rightContainer.css';
import img1 from '../../../assets/imgs/services-details/icon-contact.svg';
import img2 from '../../../assets/imgs/services-details-2/Education-Cloud/img-4.png';
import bgImg from '../../../assets/imgs/services-details/bg-line-3.png';
import { NavLink } from "react-router-dom";

function S_rightContainer() {
    return (
        <>
            <div className="mt-5">
                <NavLink
    to="/ItServices/marketing-cloud"
    className={({ isActive }) =>
      `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${
        isActive ? "active" : ""
      }`
    }
  >
    Marketing Cloud
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        className="fill-neutral-100"
        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
        fill="#f3f4f6"
      />
    </svg>
  </NavLink>

  <NavLink
    to="/ItServices/higher-education"
    className={({ isActive }) =>
      `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${
        isActive ? "active" : ""
      }`
    }
  >
    Higher Education Cloud
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        className="fill-neutral-100"
        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
        fill="#f3f4f6"
      />
    </svg>
  </NavLink>

  <NavLink
    to="/ItServices/financial-service"
    className={({ isActive }) =>
      `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${
        isActive ? "active" : ""
      }`
    }
  >
    Financial Services Cloud
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        className="fill-neutral-100"
        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
        fill="#f3f4f6"
      />
    </svg>
  </NavLink>

  <NavLink
    to="/ItServices/data-cloud-ai"
    className={({ isActive }) =>
      `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${
        isActive ? "active" : ""
      }`
    }
  >
    Data Cloud + A.I Integration
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        className="fill-neutral-100"
        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
        fill="#f3f4f6"
      />
    </svg>
  </NavLink>



                {/* next container */}
                <div className="S_right_Container purple-bg rounded-4 mt-7 position-relative">

                    <h4 class="text-white">Providing the <br />Ultimate <br /> Experience <br />in Education<br /> Cloud</h4>
                    <div className="S_right_Container_img d-flex align-items-center mt-4 position-relative">
                        <img src={img1} alt="Contact Us" className="" />
                        <div class="ms-3">
                            <span class="text-white mb-0 fs-4">Contact Us
                            </span>
                            <h5 class="text-white d-block">(+44) 0121 818 6924</h5>
                        </div>
                    </div>

                    {/* btn container */}
                    <div className="S_right_Container_btn">
                        <Link class="purple-text btn text-start bg-white fs-6 d-flex align-items-center justify-content-between hover-up w-100" to='#'>
                            <span>Get a free POC for your project </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2"></path>
                            </svg></Link>
                    </div>

                    <div className="position-absolute top-0 end-0">
                        <img src={bgImg} alt="" width={'100%'} />
                    </div>
                </div>


                {/* img container */}
                {/* <div className="zoom-img mt-5 rounded-4">
                    <img src={img2} className="" width={'100%'}/>
                </div> */}
            </div>
        </>
    )
}

export default S_rightContainer;