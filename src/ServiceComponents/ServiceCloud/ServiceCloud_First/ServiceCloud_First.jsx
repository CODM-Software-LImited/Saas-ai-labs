import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';

// OmnichannelCustomerService.webp
import img2 from '../../../assets/imgs/services-details-2/service-Cloud/Salesforce-Service-Cloud.jpg';
import img1 from '../../../assets/imgs/services-details-2/service-Cloud/salesforceServiceCloud.png';
import img3 from '../../../assets/imgs/services-details-2/service-Cloud/business-person-looking-finance-graphs.jpg';
import img4 from '../../../assets/imgs/services-details-2/service-Cloud/Service-img3.png';
import img5 from '../../../assets/imgs/services-details-2/service-Cloud/OmnichannelCustomerService.webp';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

function ServiceCloud_First() {

    const items = [
        {
            icon: icon1,
            title: "Unified Platform",
            description:
                "Combines AI, CRM, and automation tools to centralize customer data, enabling accurate and consistent service."
        },
        {
            icon: icon2,
            title: "Autonomous AI Agents",
            description:
                "These agents handle customer inquiries, resolve issues, and provide personalized responses "
        }
        // ,
        // {
        //     icon: icon1,
        //     title: "Scalability",
        //     description:
        //         "Supports high volumes of customer interactions"
        // }
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                            title="What is Salesforce Service Cloud?"
                        />
                        <img
                            className="rounded-3 border pt-1"
                            src={img1}
                            alt="Codm"
                            width={'100%'}
                        />
                        <HeadingContent
                            title=""
                            content={
                                <>
                                    <p>
                                        Salesforce Service Cloud is a customer relationship management (CRM) platform.That help  designed to enhance and automate customer service and support interactions. It centralizes customer data and service tools into one interface, providing service reps with a complete view of the customer's history. This helps prevent repetitive converations and enables faster, more personalized service.It include omnichannel support, AI powered assistance, and automation tools to improve service rep productivity, boost customer satisfaction, and lower service costs. It supports various use cases like highvolume case management, self service, and field service operations.
                                    </p>
                                </>
                            }
                        />


                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for service cloud</h4>
                            <p>Agentforce for Salesforce Service Cloud is an advanced AI-powered solution designed to enhance customer service operations. It integrates AI, automation, and CRM tools to provide autonomous customer service capabilities.
                            </p>
                        </div>

                        {/* filp img and content */}

                        <div className="col-8">
                            <FlipImgwithContent items={items} />

                        </div>


                        <div className="implementation-section pt-4">
                            <h4 className="mb-4">Salesforce service Cloud</h4>

                            <div className="mb-3">
                                <h5 className="pb-3">key features:</h5>
                                <ul>
                                    <li className="pb-3"> <strong className="text-black">Omnichannel Support:</strong> The Omnichannel manage customer interactions across different channels like phone, email, chat, social media, and more from a single platform. Easily add new channels as your business grows.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">AI-Powered Assistance:</strong>
                                        AI-Powered Assistance in Salesforce Service Cloud uses advanced tools like Einstein AI and Agentforce to transform customer service operations. It also automates routine tasks .
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Service Console: </strong>
                                        The Service Console in Salesforce Service Cloud is a unified workspace designed to enhance agent productivity and streamline customer service operations. It provides agents with a 360 degree view of customer interactions, consolidating case details, customer history. It also integrates with other Salesforce tools, enabling seamless collaboration and data sharing across teams.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Self Service Portals: </strong>
                                        Self-service portals in Salesforce Service Cloud empower customers to find answers and resolve issues independently, reducing the need for direct agent involvement.They also integrate seamlessly with Service Cloud, ensuring that agents have full visibility into customer interactions when escalation is needed.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Field Service Management: </strong>
                                        Field Service Management in Salesforce Service Cloud streamlines the coordination of field operations, ensuring efficient scheduling, dispatching, and tracking of field technicians. It provides real-time updates, allowing businesses to assign the right technician to the right job based on skills, location, and availability.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Knowledge Management: </strong>
                                        Knowledge Management in Salesforce Service Cloud centralizes critical information into a digital library, making it easily accessible to agents, field technicians, and customers. It allows businesses to capture, organize, and share knowledge articles, FAQs, and solutions, ensuring consistent and accurate information across all service channels.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Case Management: </strong>
                                        Case Management in Salesforce Service Cloud streamlines the process of tracking, managing, and resolving customer issues efficiently. It provides a centralized system where agents can view all case details, customer history, and interactions in one place. With features like automated case routing, prioritization, and escalation, cases are assigned to the right agents based on skills and workload.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Analytics and Reporting: </strong>
                                        Analytics and reporting in Salesforce Service Cloud provide businesses with powerful tools to gain insights into their customer service performance. With customizable dashboards and real-time reporting, managers can track key metrics like case resolution times, agent productivity, and customer satisfaction.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Integration with Other Salesforce Products: </strong>
                                        Integration with other Salesforce products in Service Cloud allows businesses to create a seamless and unified customer experience. By connecting with tools like Sales Cloud, Marketing Cloud, and Commerce Cloud, Service Cloud provides a 360-degree view of customer interactions across all touchpoints. This integration enables teams to share data effortlessly, collaborate effectively, and deliver personalized service.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Mobile Access: </strong>
                                        Mobile access in Salesforce Service Cloud empowers agents and service teams to manage customer interactions and resolve cases on the go. With the Salesforce mobile app, agents can access customer data, view case details, and collaborate with team members from anywhere. It supports real-time updates, enabling agents to stay connected and respond quickly to customer needs.
                                    </li>
                                </ul>
                            </div>

                            {/* next section */}
                            <div className="pt-3">
                                <div className="ratio ratio-16x9 overflow-hidden rounded-3">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4iFHgOXmMQo?si=-4FKpwyU_UwVysi3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>


                            <div className="mb-4 pt-4">
                                <h4 className="text-black">Use Cases & Measurable Impact</h4>
                                <p>Organizations Using Salesforce Service Cloud Are Already Seeing Real World Business Value:</p>

                                <ul>
                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/salesforce-stories/slack-improves-customer-service/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Slack for Customer Support : </strong>
                                            </a>
                                            Salesforce's support team improved their case close rate by 29% and reduced backlog by 64% using Slack for cross-functional collaboration and case swarming.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/customer-stories/agentforce-for-customer-support/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Agentforce for Customer Support: </strong>
                                            </a>
                                            Agentforce resolves 76% of customer queries without human intervention, handling over 1.7 million conversations and reducing wait times significantly.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/customer-stories/swissbit/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Swissbit's Transformation: </strong>
                                            </a>
                                            Swissbit streamlined operations with Agentforce Manufacturing, improving visibility, forecasting, and customer service, while stabilizing their supply chain.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/salesforce-stories/data-cloud-personalizes-marketing/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Data Cloud for Personalization: </strong>
                                            </a>
                                            Salesforce's Data Cloud harmonized billions of data records, driving a 60% increase in marketing lead revenue and reducing support cases by 98,000 in six months.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.salesforce.com/customer-stories/good360/?d=afx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Good360's Disaster Relief: </strong>
                                            </a>
                                            Good360 used Agentforce to triple the speed of disaster recovery donation routing, saving over 1,000 hours annually and reducing their carbon footprint by 20%.
                                        </span>
                                    </li>
                                </ul>



                                <h4 className="pt-3">How does Service Cloud work?</h4>
                                <p>Service Cloud operates by bringing all customer data and service tools into a single, unified platform, giving agents a complete 360 degree view of the customer. This centralized approach is the foundation for delivering fast, consistent, and personalized support.Customer inquiries from multiple channels such as phone, email, web forms, social media, and live chat are automatically captured and converted into cases. Using intelligent Omni-Channel routing, these cases are assigned to the most suitable service representative based on skills, availability, and workload, ensuring faster and more accurate responses. Agents handle cases through a unified service console that displays the customer's full history, previous interactions, and relevant CRM data, enabling informed and personalized conversations. AI powered tools further assist agents by providing realtime insights, suggested actions, call transcriptions, and chatbots that can resolve simple issues independently. Once an issue is resolved, the case is closed and key insights are stored in the knowledge base, helping teams and customers resolve similar issues more efficiently in the future.</p>
                            </div>
                        </div>

                        {/* Summary div*/}
                        <div>
                            <h4 class="mt-3 pt-3 border-top mb-3">Summary</h4>
                            <p class="fw-mediu text-gray">At<b> CODM, </b>we help service focused organizations unlock the full potential of Salesforce Service Cloud by centralizing customer interactions, automating support workflows, and delivering a unified 360 degree view of every customer. Our expertise empowers support teams to resolve cases faster, improve agent productivity, and deliver consistent, personalized service experiences across every customer touchpoint.
                            </p>
                        </div>


                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        <ServiceSidebar />
                         <div className="pt-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tRhzdHSMgLI?si=h9ZvqrtDkqkVLEli" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                
                            </div>
                        </div>

                        {/* <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img2} className="" width={'100%'} />
                        </div> */}

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img3} className="" width={'100%'} />
                        </div>

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img4} className="" width={'100%'} />
                            <p className="pt-3 text-center">Salesforce Service Cloud Features </p>
                        </div>

                        <div className="zoom-img mt-5 rounded-4 border mb-3">
                            <img src={img5} className="" width={'100%'} />
                            <p className="pt-3 text-center">Omnichannel Support</p>
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

export default ServiceCloud_First;