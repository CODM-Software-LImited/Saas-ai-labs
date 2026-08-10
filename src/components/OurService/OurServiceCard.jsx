import { Link, Links } from "react-router-dom";
import icon1 from "../../assets/imgs/service-1/icon-1.svg";
import icon2 from "../../assets/imgs/service-1/icon-2.svg";
import './OurServiceCard.css';


function OurServiceCard({ title, description, imageSrc, imageAlt, linkHref }) {
    return (
        <>
            {/* First Card */}
            <div
                className="servicecard_container aos-init aos-animate"
                data-aos="fade-zoom-in"
                data-aos-delay="100"
            >
                <div className="card-service_container p-6 rounded-4">
                    <div className="card-service p-4 rounded-4">

                        {/* <img src={icon1} alt="Salesforce CRM" /> */}
                        <img src={imageSrc} alt={imageAlt} />
                        <h5 className="my-3">{title}</h5>
                        <p className="mb-6">
                            {description}
                        </p>
                        {/* learn more */}
                        <div className="btn_container">
                            
                            <Link to={linkHref} className="text-black text-decoration-none"></Link>
                             <div className="addbtn">
                                <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_226_5470)">
                                        <path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827"></path>
                                    </g>
                                    <defs><clipPath><rect width="16" height="16" fill="white"></rect></clipPath></defs>
                                </svg>

                                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                    <path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827"></path>
                                </svg>

                               
                                 <span className="btn-text text-black">
                                    <Link to={linkHref} className="text-black text-decoration-none">learn more</Link>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default OurServiceCard;