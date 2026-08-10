import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
// import img1 from '../../../assets/imgs/services-details-2/Health&InsuranceCloud/Healthcare-1.webp';
import img2 from '../../../assets/imgs/services-details-2/SalesCloud/img1.avif';
import img1 from '../../../assets/imgs/services-details-2/SalesCloud/Salesforce-Sales-Cloud-features.webp';
import img3 from '../../../assets/imgs/services-details-2/SalesCloud/salesforce-activity-management.webp';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

function SalesCloud_First() {

    const items = [
        {
            icon: icon1,
            title: "Lead and Opportunity Management",
            description:
                "Track and manage leads and opportunities efficiently."
        },
        {
            icon: icon2,
            title: "Sales Forecasting",
            description:
                "Get accurate sales forecasts to make informed decisions."
        }
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                            title="What is Salesforce Sales Cloud ?"
                        />
                        <img
                            className="rounded-3 border"
                            src={img1}
                            alt="Codm"
                            width={'100%'}
                        />
                        <HeadingContent
                            title=""
                            content={
                                <>
                                    <p>
                                        Sales Cloud is Salesforce's CRM platform designed to help businesses manage their sales processes efficiently. It empowers sales teams with tools for lead management, opportunity tracking, sales forecasting, and AI-driven insights to close deals faster and improve productivity.
                                    </p>
                                </>
                            }
                        />


                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for Sales cloud</h4>
                            <p>Agentforce for Sales is designed to revolutionise your sales cycle with predictive, generative, and agentic AI at every step. It includes features like pipeline management, unmetered employee agents, and AI-driven tools to summarise calls, understand sales signals, and draft follow-ups.
                            </p>
                        </div>

                        {/* filp img and content */}

                        <div className="col-8">
                            <FlipImgwithContent items={items} />

                        </div>

                        {/* next section */}

                        {/* next section  */}

                        <div className="implementation-section pt-4">
                            <h4 className="mb-4">Salesforce Sales Cloud</h4>

                            <div className="mb-3">
                                <h5 className="pb-3">key features:</h5>
                                <ul>
                                    <li className="pb-3"> <strong className="text-black"> AI Integration:</strong> Predictive AI helps sales teams make smarter decisions by analysing data trends and customer behaviours.It prioritises leads and opportunities, enabling sales reps to focus on high-value prospects.
                                    </li>
                                    <li className="pb-3"><strong className="text-black"> Salesforce Spiff and Sales Planning:</strong>These tools streamline the management of sales incentive programs (Spiff) and planning processes.They help align sales strategies with business goals, ensuring better performance tracking and execution.
                                    </li>
                                    <li className="pb-3"><strong className="text-black"> Advanced Analytics : </strong>
                                        Provides in-depth data insights to help businesses understand sales performance and customer trends.
                                        Enables real-time visualisation of data for better decision making.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Collaboration Tools with Slack Enterprise:</strong>
                                        Facilitates seamless communication and collaboration among sales teams.Integrates with Salesforce to provide updates, notifications, and shared workspaces for team projects.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Unified Data:</strong>
                                        All customer and sales data is centralised, providing a 360-degree view of customer interactions.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Enhanced Productivity:</strong>
                                        Automation and AI reduce manual tasks, allowing sales teams to focus on closing deals.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-black">Use Cases & Measurable Impact</h4>
                                <p>Organizations Using Salesforce Sales Cloud Are Already Seeing Real-World Business Value:</p>

                                <ul>
                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/uk/customer-stories/cognism/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Cognism : </strong>
                                            </a>
                                            Achieved 500% growth in three years by leveraging Salesforce for demand generation and sales automation.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/uk/customer-stories/american-express/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">American Express : </strong>
                                            </a>
                                            Transformed customer service with real-time data insights and AI-driven tools.Enhanced customer trust and convenience, enabling smarter business decisions.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/uk/customer-stories/bionic/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Bionic : </strong>
                                            </a>
                                            Automated customer intake processes, reducing wait times and improving service efficiency.Expected to resolve 50% of customer queries through automation, freeing up reps for personalised support.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/uk/customer-stories/capita/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Capita: </strong>
                                            </a>
                                            Streamlined high-volume recruitment processes, reducing hiring timelines from months to just 24 hours.Launched recruitment-as-a-service to support surge hiring and predict staffing needs.
                                        </span>
                                    </li>
                                </ul>

                                {/* <h5>Key Benefits</h5>
                                <ul>
                                    <li>
                                        <span>
                                            <strong>Unified Data Foundation:</strong> Connects clinical, claims,
                                            policy, and engagement data into a single source of truth.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Personalized Care & Member Journeys:</strong> Tailors
                                            interactions based on health history, coverage, and preferences.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Built-In Compliance & Security:</strong> Designed to support
                                            HIPAA and regulatory data privacy requirements.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Operational Efficiency:</strong> Automates manual processes
                                            across care management, claims, and policy servicing.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Improved Outcomes & Satisfaction:</strong> Enables proactive
                                            care, faster resolutions, and stronger trust with patients and members.
                                        </span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        {/* next section */}
                        <div className="p-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2ZkjhgBNI-Y?si=_Ht6dKfWUflxYk5F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        {/* next section */}
                        <div className="pt-4">
                            <h4 className="pb-3">Who Should Use Salesforce Sales Cloud?</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong className="text-black">B2B Sales Teams:</strong> Manage long sales cycles, complex pipelines, and multi-stakeholder deals.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">SMEs & Startups:</strong> Scale sales operations quickly with automation and real-time insights.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Enterprise Organizations:</strong> Handle global sales teams, forecasting, and territory management.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Inside & Field Sales Teams:</strong> Track activities, mobile access, and performance metrics.
                                </li>
                            </ul>
                        </div>

                        {/* next section */}
                        <div className="pt-1">
                            <h4>Sales Cloud vs Traditional CRM</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong className="text-black">Automation:</strong> Automates repetitive tasks like data entry, follow-ups, and reporting and traditional CRM is relies more on manual data entry and lacks advanced automation.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">AI-Driven Insights:</strong> Features like Einstein AI provide predictive analytics, lead scoring, and sales forecasting and traditional CRM is typically lacks advanced AI capabilities for predictive insights.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Scalability:</strong> Easily scales with business growth without the need for additional hardware or infrastructure and traditional CRM customisation options are often restricted and require significant IT involvement.
                                </li>
                                <li className="pb-2">
                                    <strong className="text-black">Cloud-Based: </strong> Accessible from anywhere with an internet connection, enabling remote work and real-time updates traditional CRM often requires physical servers and infrastructure, limiting accessibility.
                                </li>
                            </ul>
                        </div>


                        {/* Summary div*/}
                        <div>
                            <h4 class="mt-3 pt-3 border-top mb-3">Summary</h4>
                            <p class="fw-mediu text-gray">At<b> CODM, </b>we help sales-driven organizations unlock the full potential of Salesforce Sales Cloud by centralizing customer data, automating sales workflows, and enabling real-time pipeline visibility. Our expertise empowers sales teams to close deals faster, improve forecast accuracy, and deliver smarter, more personalized customer experiences across every stage of the sales cycle.
                            </p>
                        </div>

                        {/* next content section */}

                        {/* 
                        <div className='border-bottom'></div> */}

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
                            <p className="pt-3 text-center">Activity management</p>
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

export default SalesCloud_First;