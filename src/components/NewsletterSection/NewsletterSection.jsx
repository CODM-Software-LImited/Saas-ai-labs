import { useState } from "react";
import "./NewsletterSection.css";
import cpq from "../../assets/imgs/Certifications/CPQ.png";
import admin from "../../assets/imgs/Certifications/Admin.png";
import b2c from "../../assets/imgs/Certifications/B2C-Solution-Architect.png";
import dataArchitect from "../../assets/imgs/Certifications/DataArchitect.png";
import omniConsultant from "../../assets/imgs/Certifications/OmniStudioConsultant.jpeg";
import serviceCloud from "../../assets/imgs/Certifications/ServiceCloudConsultant.png";
import sfba from "../../assets/imgs/Certifications/SFBA.png";
import pd1 from "../../assets/imgs/Certifications/PD1.png";
import pd2 from "../../assets/imgs/Certifications/PD2.png";
import platformAppBuilder from "../../assets/imgs/Certifications/PlatformAppBuilder.png";
import omniDev from "../../assets/imgs/Certifications/OmniStudioDeveloper.png";
import appArchitect from "../../assets/imgs/Certifications/ApplicationArchitect.png";
import bgLine from "../../assets/imgs/newsletter-1/bg-line.png";
import { Link } from "react-router-dom";
import DotBtn from "../../utils/Dotbtn/Dotbtn";

const Certifications = [
    { img: cpq, text: "Certified Agentforce Specialist" },
    { img: admin, text: "Admin Certified" },
    { img: b2c, text: "B2C Solution Architect" },
    { img: dataArchitect, text: "Data Architect Certified" },
    { img: omniConsultant, text: "OmniStudio Consultant" },
    { img: serviceCloud, text: "Service Cloud Consultant" },
    { img: sfba, text: "SFBA Certified" },
    { img: pd1, text: "Platform Developer 1" },
    { img: pd2, text: "Platform Developer 2" },
    { img: platformAppBuilder, text: "Platform App Builder" },
    { img: omniDev, text: "OmniStudio Developer" },
    { img: appArchitect, text: "Application Architect" },
]

function NewsletterSection() {

  const [message,setMessage] = useState('');
  const [email,setEmail]   = useState('');

  // for accesing the token 
    //   async function getAccessToken() {
    //   const params = new URLSearchParams(); 
    //   params.append("grant_type",import.meta.env.VITE_grant_type);
    //   params.append("client_id",import.meta.env.VITE_client_id);
    //   params.append("client_secret",import.meta.env.VITE_client_secret);
    
    //   const response = await fetch(
    //     "https://codmsoftwarepvtltd9-dev-ed.develop.my.salesforce.com/services/oauth2/token",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",    
    //       },
    //       body: params,
    //     }
    //   );
    //   const data = await response.json();
    //   return data.access_token;
    //  }

   // for sending the email
//    const handleSubmit = async (e) => {
//     e.preventDefault();
//      const token = await getAccessToken();

//     try {
//       const response = await fetch(
//         "https://codmsoftwarepvtltd9-dev-ed.develop.my.salesforce.com/services/apexrest/news_letter",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const result = await response.text();
//       setMessage(result);
//       setEmail('')
//     } catch (error) {
//       console.error(error);
//       setMessage("Something went wrong");
//     }
//   };

    return (
        <>
        <section className="section-newsletter pb-120 pt-120 fix position-relative mt-4">
            <div className="container position-relative fix">
                <div className="row align-items-center fix text-center position-relative z-1">

                    {/* Left side (Salesforce Expertise) */}
                    <div className="col-lg-6 my-5">
                        <h3 className="fw-bold mb-3">Our Salesforce Expertise</h3>
                        <p className="mb-4 px-10">
                            Our team of certified Salesforce experts brings deep <br /> knowledge and
                            experience to every project.
                        </p>

                        <div className="carouse_expertise carouse_container">
                            {Certifications.map((item, idx) => (
                                <div key={idx} className="carousel_item">
                                    <img
                                        className="dynamicImage img-fluid mb-3"
                                        src={item.img}
                                        alt={`certification-${idx}`}
                                    />
                                    <h6 className="carousel_text">{item.text}</h6>
                                </div>
                            ))}
                        </div>

                        <Link
                            to={"/ItServices"}
                            className="learnMore_btn btn fw-bold px-4 py-2"
                        >
                            Learn More About Our Expertise
                        </Link>
                    </div>

                    {/* Right side (Newsletter) */}
                    <div className="col-lg-6 mt-lg-0 mt-5 px-3">
                        <div className="px-lg-5 text-lg-start text-center">
                            <div className="NewsletterUpdatedBtn"> 
                                <DotBtn text="Stay Updated"/>
                            </div>     
                            
                            <h1
                                className="mt-3 mb-3 aos-init"
                                data-aos="fade-zoom-in"
                                data-aos-delay="100"
                            >
                                Subscribe to our Blogs! 
                            </h1>
                            <p
                                className="fs-6 fw-medium aos-init"
                                data-aos="fade-zoom-in"
                                data-aos-delay="200"
                            >
                                Join 52,000+ people on our newsletter
                            </p>

                            <div className="getInput mb-5 mt-4 position-relative pb-3">
                              {/* <form className="d-flex flex-wrap" onSubmit={handleSubmit}> */}
                                <form className="d-flex flex-wrap">
                                <input
                                    className="inputEmailBtn"
                                    placeholder="Enter your mail.." 
                                    type="email"
                                    name="name"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                               
                                    <button
                                        className="joinBtn"
                                        type="submit"
                                        data-aos="fade-zoom-in"
                                        data-aos-delay="100"
                                    >
                                        Join Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle z-0">
                    <img src={bgLine} alt="Codm"  width={'100%'}/>
                </div>
            </div>
        </section>
        </>
    );
}
export default NewsletterSection;
