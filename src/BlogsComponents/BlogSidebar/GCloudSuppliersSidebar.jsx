import BlogSidebar from './BlogSidebar';
import { Link } from "react-router-dom";
import img1 from '../../assets/imgs/services-details/icon-contact.svg';
import bgImg from '../../assets/imgs/services-details/bg-line-3.png';
import gcaLogo from '../../assets/imgs/gcloud/gca-supplier-black.png';

function GCloudSuppliersSidebar() {
  return (
    <div className=''>
      <BlogSidebar />

      {/* contact container */}
      <div className="S_right_Container purple-bg rounded-4 mt-7 position-relative">
        <h4 className="text-white">Supporting <br />Public Sector <br />Cloud <br />Programmes</h4>
        <div className="S_right_Container_img d-flex align-items-center mt-4 position-relative">
          <img src={img1} alt="Contact Us" className="" />
          <div className="ms-3">
            <span className="text-white mb-0 fs-4">Contact Us</span>
            <h5 className="text-white d-block">(+44) 0121 818 6924</h5>
          </div>
        </div>

        {/* btn container */}
        <div className="S_right_Container_btn">
          <Link className="purple-text btn text-start bg-white fs-6 d-flex align-items-center justify-content-between hover-up w-100" to='/g-cloud-15'>
            <span>View our G&#8209;Cloud 15 services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2"></path>
            </svg></Link>
        </div>

        <div className="position-absolute top-0 end-0">
          <img src={bgImg} alt="" width={'100%'} />
        </div>
      </div>

      {/* share section */}
      <div className="my-4">
        <h6>Share this post:</h6>
        <a href="https://www.linkedin.com/company/codm-software-limited/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
          </svg>
        </a>

        <a className="btn" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcodmsoftware.co.uk%2Fblog%2Fg-cloud15&text=Check%20out%20this%20post!" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
          </svg>
        </a>

        <a className="ms-2 text-decoration-underline text-900 fs-7 black-text" href="mailto:info@codmsoftware.co.uk">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
          </svg>
        </a>
      </div>

      {/* GCA supplier logo */}
      <Link to="/g-cloud-15" className="text-decoration-none">
        <div className="zoom-img mt-5 rounded-4 border p-4 bg-white text-center">
          <img src={gcaLogo} alt="Government Commercial Agency Supplier" width={'70%'} />
          <p className='text-center pt-3 mb-0 custom-p'>CODM Software Limited, G&#8209;Cloud 15 supplier, Lot 3: Cloud Support</p>
        </div>
      </Link>
    </div>
  )
}

export default GCloudSuppliersSidebar;
