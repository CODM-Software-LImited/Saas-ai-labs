
import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg'
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import img1 from '../../../assets/imgs/services-details-2/EinsteinAI/img-1.png';
import img2 from '../../../assets/imgs/services-details-2/EinsteinAI/img-3.webp';
import img3 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-3.png';
import img5 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-5.png';
import img6 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-6.png';
import AgentforcePara from "../../ui/AgentforcePara/AgentforcePara";
import SalesforceEinsteinSidebar from "../../BlogSidebar/SalesforceEinsteinSidebar";

function SalesforceEinstein_first() {

    const items = [
        {
            icon: icon1,
            title: "Strategic AI Roadmapping",
            description:
                "Align your Einstein + AI strategy with business goals—identifying where automation and predictive insights can drive maximum ROI."
        },
        {
            icon: icon2,
            title: "Enterprise-Ready & Scalable",
            description:
                "Whether deploying Prediction Builder at scale or integrating custom LLMs into Experience or Industries Cloud, your solution is robust and future-proof."
        }]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
                        <img src={img1} className="rounded-3" alt="Salesforce Einstein" width={"100%"} />

                        <HeadingContent
                            title="Salesforce Einstein + AI Synergy"
                            content={
                                <>
                                    <p>Elevate your Salesforce CRM with the power of embedded Artificial Intelligence. Our Salesforce Einstein AI integration allows you to leverage the power of AI to enhance your CRM and improve customer engagement. <b className="text-black">Salesforce Einstein AI</b>is a powerful tool that allows you to create custom logic and automate processes within your Salesforce environment. It provides a structured approach to writing Apex triggers, ensuring that they are efficient, maintainable, and scalable.
                                    </p>
                                </>
                            }
                        />

                        {/* next section */}

                        <HeadingContent
                            title="What is Salesforce Einstein + AI Synergy?"
                            content={
                                <>
                                    <p>Salesforce Einstein is an AI layer embedded within Salesforce that brings predictive analytics, natural language processing, and automation directly to your business workflows. By extending Einstein's native capabilities with external AI tools like OpenAI, Azure AI, and custom ML models, we help you.<b className="text-black">Make intelligent predictions</b> AI models analyze historical data to forecast trends, customer behavior, and sales opportunities, enabling proactive decision-making.</p>
                                </>
                            }
                        />

                        <PhaseItems items={[
                            ["Seamless AI Integration", "AI-Enhanced Customer Journeys"],
                            ["Automated Workflows & Insights At Scale", "Data Intelligence & Governance"],
                            ["Cross-Cloud Enablement", "Strategic AI Roadmapping"],
                        ]} />


                        <HeadingContent
                            title="Why Choose Einstein + AI with Us?"
                            content="We specialize in integrating Salesforce Einstein with leading AI platforms like OpenAI and Azure AI, ensuring you get the most out of your CRM investment. Our team of experts will work with you to create custom AI solutions that fit your unique business needs."
                        />

                        {/* filp img and content */}
                        <FlipImgwithContent items={items} />

                        <div className='border-bottom pb-3'></div>

                        {/* next section */}
                        <HeadingContent
                            title="AI-Powered Sales"
                            content={
                                <>
                                    <p><b className="text-black">Predictive Sales Forecasting:</b> Einstein analyses historical sales data and market trends to predict future demand for instance , flagging an upcoming surge in drug demand during flu season, allowing production to ramp up in time.</p>
                                    <p><b className="text-black">Optimized Field Force Execution :</b>Instead of manually planning visits , representatives get smart suggestions based on past engagement for instance , it might suggest a doctor who's shown interest but hasn't prescribed yet.</p>
                                    <p><b className="text-black">Real-Time Sales Intelligence Dashboard:</b> Sales leaders can access live dashboards showing performance , product trends and representative activity-for instance , if one region sees a sudden drop in orders , they get notified instantly and can act much before the revenue gets impacted.</p>
                                    <p><b className="text-black">Dynamic Content Generation:</b> Generate marketing emails, chatbot responses, or sales summaries with AI powered prompts.</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>

                        {/* next para */}
                        <HeadingContent
                            title="AI-Powered Marketing"
                            content={
                                <>
                                    <p><b className="text-black">Personalized Campaign Messaging:</b> Einstein helps pharma marketers connect more meaningfully by personalizing outreach , for instance a cardiologist instead of getting generic blasts gets follow up emails focused on hypertension trials making it more relevant .</p>
                                    <p><b className="text-black">Einstein Engagement Scoring: </b>This helps in identifying which HCPs are most likely to engage with your campaigns ,for instance if Dr Singh frequently opens emails and check on product updates einstein will flag.</p>
                                    <p><b className="text-black">Intelligent Channel Optimization:</b> Intelligent Channel Optimization uses AI to determine the best channels for each HCP, for instance if Dr William prefers WhatsApp over email, Einstein will suggest sending updates via WhatsApp.</p>
                                </>}
                        />
                        <div className='border-bottom pb-3'></div>
                        <HeadingContent
                            title="AI-Powered Healthcare"
                            content={
                                <>
                                    <p><b className="text-black">Adverse Event Intelligence: </b>This will spot and act on safety concerns early for instance if several patients report dizziness, Einstein flag the pattern immediately allowing team to investigate before it escalates.</p>
                                    <p><b className="text-black">Einstein identifies: </b>The most promising trial sites and predict participant engagement before problem arise.</p>
                                    <p><b className="text-black">Patient Adherence Prediction:</b>This assist patients to stick to treatment plans for instance- einstein detects that a patient with hypertension is likely to stop refilling after 60 days , it triggers personalized SMS reminder.</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>
                        <HeadingContent
                            title="AI Powered Use Cases in Action"
                            content={
                                <>
                                    <p><b className="text-black">Einstein GPT for Support & Sales:</b> Generate case summaries, suggest responses, automate email workflows, and enable voice activated support.</p>
                                    <p><b className="text-black">Predictive Lead Scoring: </b>Use intelligent decision logic for complex quote and order approvals. Automatically prioritize leads based on likelihood to convert using Einstein Prediction Builder.</p>
                                    <p><b className="text-black">Automated Approval Chains:</b> Use intelligent decision logic for complex quote and order approvals.</p>
                                    <p><b className="text-black">Dynamic Content Generation:</b> Generate marketing emails, chatbot responses, or sales summaries with AI powered prompts.</p>
                                </>
                            }
                        />

                        <img src={img2} className="rounded-3" width={'100%'} alt="einstein_img" />
                        <div className='border-bottom pb-3'></div>

                        <HeadingContent
                            title="Salesforce Einstein vs Agentforce"
                            content={
                                <>
                                    <p>Explore the distinct features and strengths of Salesforce Einstein and Agentforce in modern CRM workflows.</p>
                                </>
                            }
                        />
                        {/* table */}
                        <table class="table table-bordered text-start table-sm table-striped mt-4">
                            <thead class="table-light">
                                <tr>
                                    <th>Feature</th>
                                    <th>Salesforce Einstein</th>
                                    <th>Agentforce</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Type</td>
                                    <td>Native Salesforce AI layer</td>
                                    <td>Salesforce-native intelligent assistant framework (powered by Einstein + GPT)</td>
                                </tr>
                                <tr>
                                    <td>Core Function</td>
                                    <td>Predictive analytics, NLP, computer vision, automation</td>
                                    <td>Human-like assistant for conversations, task execution, summarization, and follow-up</td>
                                </tr>
                                <tr>
                                    <td>Powered By</td>
                                    <td>Salesforce AI + ML models + user data</td>
                                    <td>Einstein GPT + external LLMs (OpenAI, Anthropic, etc.)</td>
                                </tr>
                                <tr>
                                    <td>Focus</td>
                                    <td>Decision support & prediction</td>
                                    <td>Agentic workflows & human-like interaction</td>
                                </tr>
                                <tr>
                                    <td>Interface</td>
                                    <td>Built into Salesforce apps (Sales, Service, Marketing, etc.)</td>
                                    <td>Chat-based + action-based assistant inside Salesforce console</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* next section */}
                        <HeadingContent
                            title="Technologies We Leverage"
                            content={
                                <>
                                    <p><b className="text-black">Salesforce Einstein:</b> GPT, Language, Vision, Discovery, Prediction Builder</p>
                                    <p><b className="text-black">External AI Platforms:</b> OpenAI, Google Vertex AI, Azure AI, custom ML.</p>
                                    <p><b className="text-black">Integration Tools:</b> OmniStudio (formerly Vlocity), APIs, LWC, Apex, Salesforce Flow</p>
                                    <p><b className="text-black">Data Foundations:</b> Salesforce CDP/Data Cloud, customer 360, governance frameworks</p>
                                </>
                            }
                        />

                        <div className='border-bottom pb-3'></div>
                        {/* next section */}
                        <h1 className="HeadingContent_heading pt-3">Use Case Comparison: Einstein vs Agentforce</h1>
                        {/* table */}
                        <table class="table table-bordered table-striped text-start">
                            <thead class="table-light">
                                <tr>
                                    <th>Use Case Area</th>
                                    <th>Salesforce Einstein</th>
                                    <th>Agentforce</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sales Forecasting</td>
                                    <td>Predicts future revenue and deal closures using historical CRM data</td>
                                    <td>Supports sales reps by summarizing calls, auto-logging deals, and suggesting follow-ups</td>
                                </tr>
                                <tr>
                                    <td>Lead &amp; Opportunity Scoring</td>
                                    <td>Ranks leads and opps by win likelihood using Einstein Prediction Builder</td>
                                    <td>Provides agents with real-time nudges or actions to contact high-priority leads</td>
                                </tr>
                                <tr>
                                    <td>Customer Support Automation</td>
                                    <td>Classifies and routes cases, suggests replies, powers Einstein Bots</td>
                                    <td>Responds to customers directly with AI-written emails or case resolutions, learns from previous agent behavior</td>
                                </tr>
                                <tr>
                                    <td>Marketing Personalization</td>
                                    <td>Powers journey orchestration and content personalization in Marketing Cloud</td>
                                    <td>Drafts personalized marketing emails, SMS, or follow-ups based on customer segment behavior</td>
                                </tr>
                                <tr>
                                    <td>Service Agent Productivity</td>
                                    <td>Suggests next best actions in real time, recommends KB articles</td>
                                    <td>Summarizes past customer interactions, surfaces recommended actions, logs case notes autonomously</td>
                                </tr>
                                <tr>
                                    <td>Email Content Generation</td>
                                    <td>Uses Einstein GPT to suggest email copy or subject lines</td>
                                    <td>Writes and schedules the email, tags the customer intent, and suggests next best offer</td>
                                </tr>
                                <tr>
                                    <td>Field Service Optimization</td>
                                    <td>Predicts part failures, job duration, and routes field agents efficiently</td>
                                    <td>Summarizes on-site visit outcomes, initiates work orders, or books follow-ups automatically</td>
                                </tr>
                                <tr>
                                    <td>Reporting &amp; Insights</td>
                                    <td>Creates AI-driven dashboards, trend reports, and recommendations</td>
                                    <td>Enables voice-based or typed prompts like 'Show me accounts with highest churn risk this quarter'</td>
                                </tr>
                                <tr>
                                    <td>Experience Cloud Personalization</td>
                                    <td>Suggests articles, products, or layouts based on visitor persona or segment</td>
                                    <td>Acts as a concierge agent guiding users through site content or actions via conversation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        <SalesforceEinsteinSidebar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalesforceEinstein_first;