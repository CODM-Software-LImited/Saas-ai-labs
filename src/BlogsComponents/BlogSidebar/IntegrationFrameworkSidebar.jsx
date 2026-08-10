import BlogSidebar from './BlogSidebar';
import { Link } from "react-router-dom";
import img1 from '../../assets/imgs/services-details/icon-contact.svg';
import img2 from '../../assets/imgs/services-details-2/Integration_Framework/img-3.jpg';
import yaminiImage from '../../assets/imgs/services-details-2/Integration_Framework/yamini image.png';
import bgImg from '../../assets/imgs/services-details/bg-line-3.png';

function IntegrationFrameworkSidebar() {
  return (
    <div className=''>
        <BlogSidebar/>
                        {/* video section */}
        
                        <div className="mt-5" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                            <iframe
                                src="https://www.youtube.com/embed/19aPJtvZC_k"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                }}
                            ></iframe>
                        </div>
        
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
        
        
                        {/* next section  */}
        
                        <div class="developer-info mt-4 pt-3">
                            <div class="d-flex align-items-center">
                                <img src={yaminiImage} alt="Yamini Sharma" class="rounded-circle me-3" width={'100%'} />
                            </div><p class="mb-1 text-muted">Written by:</p><p class="mb-0 fw-semibold">Yamini Sharma – Senior Developer
                                <br />  <a href="https://www.linkedin.com/in/yamini-sharma-b33102221/" target="_blank" rel="noopener noreferrer" class="purple-text text-decoration-underline">View LinkedIn Profile</a></p>
                        </div>
        
                        {/* new section */}
                        <div className="my-4">
                            <h6>Share this post:</h6>
                            <a href="https://www.linkedin.com/company/codm-software-limited/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                </svg>
                            </a>
        
                            <a className="btn" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcodmsoftware.co.uk%2Fintegrationframework.html&amp;text=Check%20out%20this%20post!" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                                </svg>
                            </a>
        
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                                </svg>
                            </a>
        
                        </div>
        
                        {/* img container */}
                        <div className="zoom-img mt-5 rounded-4">
                            <img src={img2} className="" width={'100%'} />
                        </div>
                        
    
    </div>
  )
}

export default IntegrationFrameworkSidebar;