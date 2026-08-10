
import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';


import img1 from '../../../assets/imgs/services-details-2/AgentforceFinancialServices/AgentfinanceService.webp';


import AgentforcePara from "../../ui/AgentforcePara/AgentforcePara";
import FlipImgwithContent from "../../ui/FlipImgwithContent/FlipImgwithContent";
import BlogFormSection from "../../ui/BlogFormSection/BlogFormSection";
import BlogSection from "../../../components/BlogSection/BlogSection";
import AgentforceFinancialServicesBlog from "../../BlogSidebar/AgentforceFinancialServicesBlog";


function AgentforceFinancialServices_FirstSection() {


    const items = [
        {
            icon: icon1,
            title: "Banking Service Agent",
            description:
                "Handles inquiries like account balances, loan updates, and transaction disputes, reducing call center load."
        },
        {
            icon: icon2,
            title: "Insurance Service Agent",
            description:
                "Automates policy lookups, claim statuses, and quote comparisons, improving first-call resolution."
        },
        {
            icon: icon1,
            title: "Relationship Agent",
            description:
                "Prepares meeting briefs, summarizes interactions, and suggests next best actions, boosting advisor productivity."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <img
                            className="rounded-3"
                            src={img1}
                            alt="Codm"
                            width={'100%'}
                        />

                        <HeadingContent
                            title="How are financial services using Agentforce"
                            content={
                                <>
                                    <p>
                                        Agentforce for Financial Services is an AI-driven solution built on the Salesforce platform, purpose-designed for banks, insurers, and wealth managers. Unlike traditional automation tools, it uses agentic AI, autonomous, intelligent agents that can understand financial data in context, make decisions, and collaborate with teams to complete tasks end-to-end.Operating 24/7 and governed by Salesforce’s Einstein Trust Layer, Agentforce ensures that every AI-driven action remains secure, compliant, and auditable also aligning with financial regulations like Financial Industry Regulatory Authority(FINRA), General Data Protection Regulation(GDPR), and Payment Card Industry Data Security Standard(PCI-DSS).
                                    </p>
                                    <h5 className="text-black">Built for Financial Service?</h5>
                                    <p>Imagine a client applying for a loan at midnight. No branch, no call center, yet everything moves forward smoothly.</p>
                                </>
                            }
                        />
                        <p>That's the power of Agentforce for Financial Services</p>
                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for Financial Services</h4>
                            <p>Agentforce comes with prebuilt, industry-specific AI assistants, reducing the need for heavy customization.</p>
                        </div>

                        {/* filp img and content */}
                        <div className="col-7">
                            <FlipImgwithContent items={items} />
                        </div>


                        {/* next section  */}

                        <div className="implementation-section">
                            <h4 className="mb-4">How Agentforce Works</h4>

                            <div className="mb-3">
                                <h5>
                                    Agentforce goes beyond chatbots, it acts autonomously within your
                                    defined workflows. It can:
                                </h5>
                                <ul>
                                    <li>Update KYC and compliance documents</li>
                                    <li>Log call summaries and generate reports</li>
                                    <li>Trigger follow-up actions and assign cases</li>
                                    <li>Automate onboarding and servicing journeys</li>
                                </ul>
                                <p>
                                    With low-code tools like Agent Builder, business users can design or
                                    extend AI agents without needing IT intervention.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-black">Use Cases & Measurable Impact</h5>
                                <p>Salesforce customers are already realizing tangible gains:</p>

                                <ul>
                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.herofincorp.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Hero FinCorp : </strong>
                                            </a>
                                            shortened loan approvals from 2 days to 30 minutes, reducing
                                            handoffs and improving CX.
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://good360.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Good360 : </strong>
                                            </a>
                                            accelerated disaster recovery routing 3× faster, using AI agents
                                            to lower their carbon footprint by 20%.
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.rbcwealthmanagement.com/en-asia/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">RBC Wealth Management : </strong>
                                            </a>
                                            enhanced advisor productivity with unified data and AI-driven
                                            insights, enabling faster, more personalized client engagement.
                                        </span>
                                    </li>
                                </ul>

                                <h5>Key Benefits</h5>
                                <ul>
                                    <li>
                                        <span>
                                            <strong>Automation at Scale:</strong> Frees teams from routine
                                            tasks, focusing human talent on relationship building.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>24/7 Omnichannel Support:</strong> Consistent, proactive
                                            service across chat, email, mobile, and web.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Improved Compliance:</strong> Every action is logged,
                                            traceable, and compliant with regulatory standards.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Smarter Decision-Making:</strong> Unified data and AI
                                            insights enable predictive service and better financial advice.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Faster Onboarding &amp; Turnaround:</strong> Reduces
                                            time-to-service with intelligent data collection and validation.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* next section */}
                        <div className="p-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">
                                <iframe
                                    src="https://www.youtube.com/embed/Is9TB6xSh9U?autoplay=1&mute=0&enablejsapi=1&si=kH_tOitUTznZdC0-"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    width="560"
                                    height="315"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* next section */}
                        <div className="pt-3">
                            <h4>Advantages of Agentforce for Financial Services Cloud</h4>
                            <ul>
                                <li>
                                    <span>
                                        <strong>AI-powered Task Automation:</strong> Agentforce automates routine tasks like client meeting preparation, loan recommendations, and service requests, freeing up human agents to focus on more complex issues.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Personalized Customer Engagement:</strong> By unifying financial data and leveraging AI, the system helps agents and firms deliver personalized advice and experiences based on a customer's complete financial picture.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Streamlined Onboarding:</strong> It accelerates the customer onboarding process by using pre-configured templates and intelligent discovery tools, ensuring a faster and more seamless first impression.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Increased Agent Productivity:</strong> Agentforce provides real-time insights and smart suggestions, enabling agents to close cases faster and deliver more consistent service. It also facilitates real-time coaching for sales and service teams.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Improved Customer Experience:</strong> By providing a more unified and personalized experience across all channels, Agentforce helps build trust and loyalty.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Enhanced Data Utilization:</strong> Agentforce breaks down data silos by connecting multiple systems, enabling organizations to create a unified customer profile. This enriched data foundation powers predictive analytics and smarter AI recommendations, turning information into measurable business impact.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Predictive Decision-Making:</strong> By leveraging predictive analytics and machine learning, Agentforce identifies potential customer churn, cross-sell opportunities, and market trends before they occur, allowing firms to act strategically and stay ahead of competitors.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Regulatory Compliance and Risk Management:</strong> With built-in compliance monitoring and AI-powered anomaly detection, Agentforce helps financial institutions stay aligned with evolving regulations. It minimizes operational risk through automated checks, documentation, and alerts.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Summary div*/}
                        <div>
                              <h4 class="mt-3 pt-3 border-top mb-3">Summary</h4>
                            <p class="fw-mediu text-gray">Agentforce for Financial Services blends human expertise with AI-driven precision, empowering financial institutions to deliver faster, more secure, and more personalized services. It's not just automation; it's an intelligent digital partnership.At CODM Software Limited, we help financial institutions harness the power of Salesforce's Agentforce to streamline workflows, strengthen compliance, and deliver smarter, more personalized customer experiences through intelligent AI-driven automation.</p>
                        </div>                      

                        <div className='border-bottom pb-3'></div>

                    </div>

                    {/* sidebar */}


                    <div className="col-lg-4 sidebar">
                        <AgentforceFinancialServicesBlog/>
                    </div>

                    {/* form section */}
                        <BlogFormSection heading="Share Your Thoughts on Our Financial Service Cloud"/>
                    <BlogSection/>
                    
                </div>
            </div>
        </>
    )
}

export default AgentforceFinancialServices_FirstSection;