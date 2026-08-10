import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import img1 from '../../../assets/imgs/services-details-2/NonprofitCloud/nonprofitTechnology.webp';
import img2 from '../../../assets/imgs/services-details-2/NonprofitCloud/nonProfitImg3.webp';
import img3 from '../../../assets/imgs/services-details-2/NonprofitCloud/nonProfitImg2.webp';
import img4 from '../../../assets/imgs/services-details-2/NonprofitCloud/nonProfitImg4.webp';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

function NonprofitCloud_First() {

    const items = [
        {
            icon: icon1,
            title: "AI-Powered Automation",
            description:
                "Automates repetitive tasks like donor research and data analysis, freeing up staff for mission-critical work."
        },
        {
            icon: icon2,
            title: "Donor Engagement",
            description:
                "Enhances donor satisfaction with personalized and timely communication."
        }
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                            title="What is Salesforce Nonprofit Cloud ?"
                        />
                        <img
                            className="rounded-3 border"
                            src={img1}
                            alt="Codm"
                            width={'90%'}
                        />  
                        <HeadingContent
                            title=""
                            content={
                                <>
                                    <p>
                                        Nonprofit Cloud is a Salesforce solution designed specifically for nonprofits, charities, and social organizations. It leverages the power of Salesforce's platform to provide tools for fundraising, program management, volunteer management, and donor engagement. Nonprofit Cloud helps organizations streamline operations, engage supporters, and achieve their missions more effectively.
                                        <br/>
                                        We help nonprofits apply for and secure free Salesforce licenses through the Power of Us Program by guiding them through eligibility verification and the application process. Our support ensures a smooth setup so organizations can start using Salesforce quickly and efficiently.
                                    </p>
                                </> 
                            }
                        />


                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for NonProfit cloud</h4>
                            <p>
                                Agentforce for Nonprofits is an AI-driven solution designed to support nonprofit organizations by streamlining operations, enhancing donor engagement, and personalizing marketing efforts. It integrates seamlessly with Nonprofit Cloud and other Salesforce tools, enabling nonprofits to automate tasks like donor research, program management, and stakeholder engagement. This allows staff to focus on mission-critical activities while improving efficiency and impact.
                            </p>
                        </div>

                        {/* filp img and content */}

                        <div className="col-12 col-md-8">
                            <FlipImgwithContent items={items} />

                        </div>

                        {/* next section */}

                        {/* next section  */}

                        <div className="implementation-section pt-4">
                            <h4 className="mb-4">Salesforce Nonprofit Cloud</h4>

                            <div className="mb-3">
                                <h5 className="pb-3">key features:</h5>
                                <ul>
                                    <li className="pb-3"> <strong className="text-black">Fundraising: </strong>Manage donor lifecycles with tools like Donor Profiles and Fundraising Portfolios.Build reusable segments and track appeal performance across channels.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Program Management: </strong>Centralize program and service information for real-time reporting.Track program enrollment, attendance, and participant trends.
                                    </li>
                                    <li className="pb-3"><strong className="text-black"> Outcome Management: </strong>
                                        Define desired outcomes and track progress with consistent indicators.Use dynamic assessments to collect outcomes data efficiently.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">AI and Automation: </strong>
                                        Automate donor research and program management tasks.Leverage AI for personalized communication and data-driven insights.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Integration and Security:</strong>
                                        Seamlessly integrate with other Salesforce tools and external systems.Ensure data privacy and compliance with built-in security features.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-black">Use Cases & Measurable Impact</h4>
                                <p>Nonprofit Organizations Using Salesforce Nonprofit Cloud Are Driving Greater Mission Impact:</p>

                                <ul>
                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.org/nonprofit/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">International Rescue Committee : </strong>
                                            </a>
                                            Unified global fundraising and program management on a single platform, improving donor engagement and increasing operational transparency across multiple countries.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.org/nonprofit/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">The American Red Cross : </strong>
                                            </a>
                                            Leveraged real-time data to coordinate disaster response efforts more efficiently, improving volunteer mobilization and accelerating aid delivery.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.org/nonprofit/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Feeding America : </strong>
                                            </a>
                                            Streamlined donor and partner management processes, enabling better resource allocation and increasing fundraising effectiveness nationwide.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.org/nonprofit/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Habitat for Humanity : </strong>
                                            </a>
                                            Improved volunteer coordination and grant tracking, reducing administrative workload and allowing teams to focus more on community impact.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* next section */}
                        <div className="p-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xqDGwXDu0uw?si=lzHcW3gBwF7aiGzh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2ZkjhgBNI-Y?si=_Ht6dKfWUflxYk5F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            </div>
                        </div>

                        {/* next section */}
                        <div className="pt-4">
                            <h4 className="pb-3">Who Should Use Salesforce Nonprofit Cloud?</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong className="text-black">Nonprofit Organizations:</strong> Manage donors, volunteers, programs, and beneficiaries from a unified platform.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Foundations & Grantmaking Bodies:</strong> Track grants, applications, funding cycles, and impact reporting with full transparency.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">International NGOs:</strong> Coordinate global teams, monitor program outcomes, and centralize data across regions.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Community & Advocacy Groups:</strong> Engage supporters, manage campaigns, and measure outreach effectiveness.
                                </li>
                            </ul>
                        </div>


                        {/* Summary div*/}
                        <div>
                            <h4 className="mt-3 pt-3 border-top mb-3">Summary</h4>
                            <p className="fw-medium text-gray">
                                At <b>CODM,</b> we help mission driven organizations unlock the full potential of Salesforce Nonprofit Cloud by centralizing donor, volunteer, and program data on a unified platform. Our expertise enables nonprofits to streamline fundraising, enhance stakeholder engagement, improve grant and case management, and gain real-time visibility into impact metrics empowering teams to focus more on their mission and less on administrative complexity.
                            </p>
                        </div>

                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        <ServiceSidebar />
                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img2} className="" width={'100%'} />
                        </div>

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img3} className="" width={'100%'} />
                            {/* <p className="pt-3 text-center">Activity management</p> */}
                        </div>

                         <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img4} className="" width={'100%'} />
                        </div>

                    </div>


                    {/* code section */}
                    {/* <CodeSection/> */}

                    {/* form section */}

                    {/* last section */}

                </div>

            </div>
        </>
    )
}

export default NonprofitCloud_First;



// import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
// import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
// import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
// import img2 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img2.png';
// import img1 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img1.png';
// import img3 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img3.png';
// import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
// import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

// function NonprofitCloud_First() {
//     const items = [
//         {
//             icon: icon1,
//             title: "Unified Data",
//             description:
//                 "Connects customer, employee, asset, and partner data for streamlined operations."
//         },
//         {
//             icon: icon2,
//             title: "Predictive Insights",
//             description:
//                 "Uses AI to forecast demand, predict equipment failures, and optimize resources."
//         }
//     ]

//     return (
//         <>
//             <div className="container">
//                 <div className="row pt-8">
//                     {/* left container  */}
//                     <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

//                         <HeadingContent
//                             title="What is Salesforce Manufacturing Cloud?"
//                         />
//                         <img
//                             className="rounded-3 border pt-1"
//                             src={img1}
//                             alt="Codm"
//                             width={'100%'}
//                         />
//                         <HeadingContent
//                             title=""
//                             content={
//                                 <>
//                                     <p>
//                                         Salesforce Manufacturing Cloud is a specialized platform designed to help manufacturers modernize operations and deliver personalized service across their value chain. It unifies data, teams, and systems to drive excellence in sales, channel engagement, and service. The platform incorporates AI to automate processes, enhance employee capabilities, and provide actionable insights.
//                                     </p>
//                                 </>
//                             }
//                         />

//                         <div className='border-bottom pb-3'></div>

//                         <div className="pt-4">
//                             <h4>Agentforce for Salesforce Manufacturing Cloud</h4>
//                             <p>Agentforce for Salesforce Manufacturing Cloud is an advanced platform designed to modernize manufacturing operations by integrating AI and automation. It unifies customer, employee, asset, and partner data to streamline processes and enhance collaboration across the value chain. With AI powered automation, it simplifies workflows, augments employee capabilities, and personalizes customer interactions. The platform also provides predictive insights to forecast demand, predict equipment failures, and optimize resources, enabling proactive decision making. Tailored specifically for the manufacturing industry, it includes specialized data models and applications to address unique business needs, while also simplifying partner engagement and strengthening relationships. This comprehensive solution helps manufacturers drive efficiency, improve customer satisfaction, and achieve sustainable growth.
//                             </p>
//                         </div>

//                         {/* filp img and content */}

//                         <div className="col-8">
//                             <FlipImgwithContent items={items} />

//                         </div>

//                         <div className="implementation-section pt-4">
//                             <h4 className="mb-4">Salesforce Manufacturing Cloud</h4>

//                             <div className="mb-3">
//                                 <h5 className="pb-3">key features:</h5>
//                                 <ul>
//                                     <li className="pb-3"> <strong className="text-black">Unified Data: </strong>
//                                         Combines customer, employee, asset, and partner data into a single platform for streamlined operations.
//                                     </li>
//                                     <li className="pb-3"><strong className="text-black">Demand Forecasting:</strong>
//                                         Aligns sales agreements with demand forecasts to improve planning and execution.

//                                     </li>
//                                     <li className="pb-3"><strong className="text-black">AI Powered Insights:</strong>
//                                         Provides actionable analytics to predict equipment failures, optimize resources, and enhance decision making.
//                                     </li>
//                                     <li className="pb-3"><strong className="text-black">Channel Collaboration:</strong>
//                                         Simplifies partner engagement and strengthens relationships for better collaboration.
//                                     </li>
//                                     <li className="pb-3"><strong className="text-black">Service Transformation:</strong>
//                                         Enhances customer service with tools for warranty management, proactive maintenance, and real time updates.
//                                     </li>
//                                 </ul>
//                             </div>


//                             <div className="pt-3">
//                                 <div className="ratio ratio-16x9 overflow-hidden rounded-3">
//                                     <iframe width="560" height="315" src="https://www.youtube.com/embed/Dt8xp6lmYpI?si=DLb1n0qoCfDxP9Qn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                 </div>
//                             </div>


//                             <div className="mb-4 pt-4">
//                                 <h4 className="text-black">Use Cases & Measurable Impact</h4>
//                                 <p>Salesforce Manufacturing Cloud is helping manufacturers improve visibility, efficiency, and collaboration across their operations. Here are some real world examples:</p>

//                                 <ul>
//                                     <li className="pb-1">
//                                         <span>
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href="https://www.caterpillar.com/"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <strong className="text-black">Caterpillar : </strong>
//                                             </a>
//                                             Improved sales forecasting accuracy and demand planning by aligning sales agreements,
//                                             production schedules, and revenue data in real time using Manufacturing Cloud.
//                                         </span>
//                                     </li>

//                                     <li className="pb-1">
//                                         <span>
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href="https://www.honeywell.com/"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <strong className="text-black">Honeywell : </strong>
//                                             </a>
//                                             Enhanced collaboration between sales and operations teams by connecting account based
//                                             forecasts with supply chain planning, reducing order delays and inventory issues.
//                                         </span>
//                                     </li>

//                                     <li className="pb-1">
//                                         <span>
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href="https://www.schneider-electric.com/"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <strong className="text-black">Schneider Electric : </strong>
//                                             </a>
//                                             Increased revenue predictability and improved customer trust by using real time
//                                             sales agreement data and AI driven insights to manage long term contracts.
//                                         </span>
//                                     </li>

//                                     <li className="pb-1">
//                                         <span>
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href="https://www.3m.com/"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <strong className="text-black">3M : </strong>
//                                             </a>
//                                             Streamlined quote to cash processes and improved forecast accuracy by synchronizing
//                                             CRM data with production and finance systems.
//                                         </span>
//                                     </li>

//                                     <li className="pb-1">
//                                         <span>
//                                             <a
//                                                 className="text-decoration-none"
//                                                 href="https://www.bosch.com/"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <strong className="text-black">Bosch :</strong>
//                                             </a>
//                                             Reduced planning cycles and improved operational efficiency by using predictive analytics
//                                             to align customer demand with manufacturing capacity.
//                                         </span>
//                                     </li>
//                                 </ul>

//                                 <h4 className="pt-3 pb-3">How does manufacturing Cloud work?</h4>

//                                 <p>Salesforce Manufacturing Cloud operates by unifying data, teams, and systems to streamline operations and enhance collaboration across the manufacturing value chain. It consolidates customer, partner, and operational data into a single platform, providing a 360degree view of the business. The platform aligns sales agreements with demand forecasts, enabling better production planning and inventory management. With AI powered insights, it analyzes data to predict equipment failures, optimize resources, and improve decision making. Collaboration tools enhance communication with partners and distributors through shared data and streamlined workflows. Additionally, it automates customer service processes, such as warranty management and real time updates, to improve customer satisfaction. Tailored specifically for the manufacturing industry, it includes specialized data models and applications to address unique business needs. This comprehensive solution helps manufacturers modernize operations, improve efficiency, and deliver personalized customer experiences. </p>
//                             </div>

//                         </div>

//                     </div>

//                     {/* sidebar */}

//                     <div className="col-lg-4 sidebar">
                      
//                         <ServiceSidebar />

//                         <div className="zoom-img mt-5 rounded-4 border">
//                             <img src={img2} width={'100%'} />
//                         </div>

//                         <div className="zoom-img mt-5 rounded-4 border">
//                             <img src={img3} width={'100%'} alt="how it work"/>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default NonprofitCloud_First;