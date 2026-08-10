import './ContactSection_ThirdSection.css';
import DotBtn from '../../utils/Dotbtn/Dotbtn';
import contactBg from '../../assets/imgs/contactBg.png';

import icon1 from '../../assets/imgs/contact-1/icon-1.svg';
import icon2 from '../../assets/imgs/contact-1/icon-2.svg';
import icon3 from '../../assets/imgs/contact-1/icon-3.svg';

function ContactSection_ThirdSection() {
    return (
        <section>
            <div className="container-fluid"
                style={
                    {
                        backgroundImage: `url(${contactBg})`,
                        backgroundRepeat: "no-repeat", backgroundPosition: "50%", backgroundSize: "cover"
                    }}>
                <div className="row m-md-5 p-md-5 py-5">
                    {/* left one */}
                    <div className='contactThird_left col-lg-6 gap-5'>
                        <div className="d-flex justify-content-center justify-content-md-start">
                      <DotBtn text="Contact Us"/>
                    </div>
                       
                        <h5 className="text-white pt-5">
                            Thinking about a project? Get in touch with us.
                        </h5>
                        <span className="contactThird_leftSpan text-white fw-medium">
                            Please let us know if you have a question, want to leave 
                            <br className="d-none d-lg-block" />
                            a comment, or would like further information about 
                            <br className="d-none d-lg-block"/>
                            Infinia System
                        </span>

                        {/* btn icon div */}
                        <div className='pt-5'>

                            {/* first icon div */}
                            <div className='contactIconDiv d-flex pb-3 align-items-center gap-4'>
                                <div className="C_secondLineImg">
                                    <img src={icon1} alt="Codm" />
                                    <span className="customLine"></span>
                                </div>
                                <div className='contactLeftIconContainer text-white'>
                                    <h6>Visit the Knowledge Base</h6>
                                    <p>Browse customer support articles and step-by-step instructions for specific features.</p>
                                </div>
                            </div>

                            {/* second icon div */}
                            <div className='contactIconDiv d-flex pb-3 align-items-center gap-4'>
                                <div className="C_secondLineImg">
                                    <img src={icon2} alt="Codm" />
                                    <span className="customLine"></span>
                                </div>
                                <div className='contactLeftIconContainer text-white'>
                                    <h6>Watch Product Videos</h6>
                                    <p>Browse customer support articles and step-by-step instructions for specific features.</p>
                                </div>
                            </div>

                            {/* third icon div */}
                            <div className='contactIconDiv d-flex pb-3 align-items-center gap-4'>
                                <div className="C_secondLineImg">
                                    <img src={icon3} alt="Codm" />
                                    <span className="customLine"></span>
                                </div>
                                <div className='contactLeftIconContainer text-white'>
                                    <h6>Visit the Knowledge Base</h6>
                                    <p>Let us talk about how we can help your <br />enterprise.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right one */}
                    <div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0 gap-5">
                        <div className="position-relative z-1 p-1 rounded-3">
                            <div className="position-relative z-2 p-md-5 p-lg-8 rounded-3 purple-bg">
                                <h3 class="text-white">Get in touch</h3>
                                <p class="text-white">Do you want to know more or contact our sales department?</p>

                                {/* form */}
                                <div className="S_lastSectionForm ps-lg-0 pb-5 pb-lg-0 container-fluid">
                                    <form>
                                        <div className="row mt-5">
                                            {/* Name */}
                                            <div className="col-md-6">
                                                <div className="input_background input-group customCantact_input_group rounded-2 p-2">
                                                    <div className="icon-input ps-3">
                                                        <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        className="form-control shadow-none input_background text-white"
                                                        placeholder="Your name *"
                                                        aria-label="username"
                                                        type="text"
                                                        name="name"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="col-md-6">
                                                <div className="input_background input-group customCantact_input_group rounded-2 p-2">
                                                    <div className="icon-input ps-3">
                                                        <svg
                                                            style={{ color: "white" }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M5.5 6.5L12 12.25L18.5 6.5"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        className="form-control shadow-none input_background text-white"
                                                        placeholder="info@"
                                                        aria-label="email"
                                                        type="email"
                                                        name="email"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="col-md-6">
                                                <div className="input_background input-group customCantact_input_group rounded-2 p-2">
                                                    <div className="icon-input ps-3">
                                                        <svg
                                                            style={{ color: "white" }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        className="form-control shadow-none input_background text-white"
                                                        placeholder="Phone"
                                                        aria-label="phone"
                                                        type="tel"
                                                        name="phone"
                                                    />
                                                </div>
                                            </div>



                                            {/* Subject */}
                                            {/* Subject */}
                                            <div className="col-md-6">
                                                <div className="input_background input-group customCantact_input_group rounded-2 p-2">
                                                    <div className="icon-input ps-3">
                                                        <svg
                                                            style={{ color: "white" }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        className="form-control shadow-none input_background text-white"
                                                        placeholder="Subject"
                                                        aria-label="subject"
                                                        type="text"
                                                        name="subject"
                                                    />
                                                </div>
                                            </div>


                                            {/* Description */}
                                            {/* Description */}
                                            <div className="col-12">
                                                <div className="input_background input-group customCantact_input_group rounded-2 p-2 d-flex align-items-start">
                                                    <div className="icon-input d-flex ps-3 pt-3">
                                                        <svg
                                                            style={{ color: "white" }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <textarea
                                                        className="form-control shadow-none input_background text-white"
                                                        name="description"
                                                        placeholder="Describe Your Project in Short"
                                                        rows="6"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="col-12 hover-up">
                                            <button type="submit" className="customHoveBg btn purple-text bg-white mt-4 p-3 hover-up">
                                                Send Message
                                                <svg style={{color:"##6d4df2"}} className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="currentColor"/>
                                                </svg>
                                            </button>
                                        </div>

                                        </div>
                                    </form>
                                </div>
                            </div>







                            {/* it is for second div */}
                            <div class="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactSection_ThirdSection;



// const ContactSection_ThirdSection = () => {
//   return (
//     <section className="section-contact-1 position-relative section-padding">
//       <div className="container position-relative z-1">
//         <div className="row">
//           {/* Left Content */}

//           {/* Right Form */}
//           <div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0">
//             <div className="position-relative">
//               <div className="position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
//                 <h3 className="text-white">Get in touch</h3>
//                 <p className="text-white">
//                   Do you want to know more or contact our sales department?
//                 </p>

//                 <form
//                   action="https://formsubmit.co/info@codmsoftware.co.uk"
//                   method="POST"
//                 >
//                   <div className="row mt-5">
//                     {/* Name */}
//                     <div className="col-md-6">
//                       <div className="input-group d-flex align-items-center">
//                         <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
//                           {/* Person SVG */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               d="M12 11.25C13.79 11.25 15.25 9.79 15.25 8C15.25 6.21 13.79 4.75 12 4.75C10.21 4.75 8.75 6.21 8.75 8C8.75 9.79 10.21 11.25 12 11.25Z"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M6.85 19.25H17.15C18.29 19.25 19.17 18.27 18.64 17.26C17.86 15.77 16.07 14 12 14C7.93 14 6.14 15.77 5.36 17.26C4.83 18.27 5.71 19.25 6.85 19.25Z"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
//                           placeholder="Your name *"
//                           type="text"
//                           name="name"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div className="col-md-6 mt-4 mt-md-0">
//                       <div className="input-group d-flex align-items-center">
//                         <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
//                           {/* Email SVG */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               d="M8.89 4.75H6.07C5.34 4.75 4.75 5.34 4.75 6.07C4.75 13.35 10.65 19.25 17.93 19.25C18.66 19.25 19.25 18.66 19.25 17.93V15.11L16.14 13.04L14.53 14.65C14.25 14.93 13.83 15.01 13.48 14.83C12.89 14.52 11.92 13.95 10.96 13.04C9.99 12.1 9.42 11.1 9.13 10.49C8.97 10.15 9.06 9.76 9.33 9.49L10.96 7.86L8.89 4.75Z"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
//                           placeholder="info@"
//                           type="email"
//                           name="email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Phone */}
//                     <div className="col-md-6 mt-4">
//                       <div className="input-group d-flex align-items-center">
//                         <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
//                           {/* Phone SVG */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               d="M4.75 7.75C4.75 6.65 5.65 5.75 6.75 5.75H17.25C18.35 5.75 19.25 6.65 19.25 7.75V16.25C19.25 17.35 18.35 18.25 17.25 18.25H6.75C5.65 18.25 4.75 17.35 4.75 16.25V7.75Z"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M5.5 6.5L12 12.25L18.5 6.5"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
//                           placeholder="Phone"
//                           type="text"
//                           name="phone"
//                         />
//                       </div>
//                     </div>

//                     {/* Subject */}
//                     <div className="col-md-6 mt-4">
//                       <div className="input-group d-flex align-items-center">
//                         <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
//                           {/* Subject SVG */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               d="M6.75 19.25H17.25C18.35 19.25 19.25 18.35 19.25 17.25V9.75L12 4.75L4.75 9.75V17.25C4.75 18.35 5.65 19.25 6.75 19.25Z"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
//                           placeholder="Subject"
//                           type="text"
//                           name="subject"
//                         />
//                       </div>
//                     </div>

//                     {/* Message */}
//                     <div className="col-12 mt-4">
//                       <div className="input-group d-flex">
//                         <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
//                           {/* Message Icon */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             fill="none"
//                             viewBox="0 0 18 18"
//                           >
//                             <path
//                               d="M5.5 2.15H3C1.9 2.15 1 3.04 1 4.15V14.65C1 15.75 1.9 16.65 3 16.65H13.5C14.6 16.65 15.5 15.75 15.5 14.65V12.15"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <textarea
//                           className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
//                           name="description"
//                           placeholder="Describe Your Project in Short"
//                         ></textarea>
//                       </div>
//                     </div>

//                     {/* Submit */}
//                     <div className="col-12">
//                       <button
//                         type="submit"
//                         className="btn bg-white-keep text-primary hover-up mt-3"
//                       >
//                         Send Message
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//               <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection_ThirdSection;
