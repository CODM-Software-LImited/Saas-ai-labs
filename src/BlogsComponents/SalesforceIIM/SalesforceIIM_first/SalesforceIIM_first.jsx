import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import FlipImgwithContent from "../../ui/FlipImgwithContent/FlipImgwithContent";
import FslAutomationSidebar from '../../BlogSidebar/FslAutomationSidebar';
import Salesforcellm_Sidebar from '../../BlogSidebar/SalesforcellM_Sidebar';
import salesforceImg from '../../../assets/imgs/salesforceIIM/salesforceLLM3.png';
import salesforceImg1 from '../../../assets/imgs/salesforceIIM/salesforceLLM1.png';

function SalesforceIIM_first() {
    const items = [
        {
            icon: icon1,
            title: "Smart Scheduling & Dispatching",
            description:
                "Automatically assigns jobs based on technician availability, skills, and location, ensuring faster and more efficient service delivery."
        },
        {
            icon: icon2,
            title: "Real Time Tracking & Insights",
            description:
                "Track field technicians in real time, monitor job progress, and gain actionable insights to improve operational efficiency."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* LEFT CONTENT */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <img src={salesforceImg} className='rounded' width={'100%'} alt="" />
                        <HeadingContent
                            title={'What is LLM in Salesforce?'}
                            content={"In Salesforce, LLM (Large Language Model) refers to AI models capable of understanding and generating human-like text. These models are typically based on transformer architectures (like those used by OpenAI or Google), and they're integrated into Salesforce's ecosystem to support various intelligent features."}
                        />

                        <div className="pt-4">
                            <h4 className='fS26'>Salesforce LLM for EdTech Building a Custom AI Learning Ecosystem</h4>

                            <p className="pt-2">
                                The education industry is rapidly evolving, and students today expect personalized, intelligent, and real-time learning experiences. Traditional CRM systems help manage student records, admissions, and communication but they often lack true intelligence.<br />This is where Salesforce powered Large Language Models (LLMs) change everything.
                            </p>

                            <ul className="pt-2">
                                <li className="pb-2">
                                    At Codm Software, we built a custom LLM-powered EdTech ecosystem on Salesforce that goes beyond automation it creates an intelligent academic assistant capable of helping students, faculty, and administrators across the entire learning journey.
                                </li>
                                <li className="pb-2">
                                    Instead of using AI in just one place, our custom LLM model can be integrated anywhere inside Salesforce student portals, admission workflows, fee management, support systems, academic dashboards, and even faculty operations.
                                </li>
                                <li className="pb-2">
                                    Salesforce supports multiple approaches for using LLMs: training your own model, customizing open-source models, or using existing models securely through APIs. Their recommended fastest path is using existing models with Prompt Builder and the Einstein Trust Layer, which protects sensitive company data through secure gateways, masking, zero-retention agreements, and audit logging.
                                </li>

                            </ul>


                        </div>

                        {/* =========== */}

                        <div className="pt-4">
                            <h4 className='fS26'>Why This Is Better Than Traditional Automation</h4>

                            <p className="pt-2">
                                Traditional automation systems operate on fixed, rule-based logic, where predefined conditions trigger predefined actions. For example, a system might send a warning email if a student’s attendance falls below 75%. While this approach improves efficiency, it lacks the ability to understand context or make intelligent decisions.
                                <br />
                                Large Language Model (LLM) systems go far beyond these static rules. Instead of just reacting, they analyze patterns, identify underlying causes, and recommend actions. They can answer deeper questions such as why attendance is declining, which students are at the highest academic risk, what interventions faculty should prioritize, and which applicants are most likely to convert.
                                <br />
                                This shift transforms educational institutions from simple automation to true intelligence-driven operations. As Salesforce highlights, the real competitive advantage is no longer just the model itself, but the systems built around it including memory, reasoning capabilities, APIs, and workflows that turn an LLM into a fully functional, intelligent business system.
                            </p>
                        </div>


                        <div className="pt-4">
                            <h4 className='fS26'>LLM to Power Intelligent Experiences</h4>

                            <p className="pt-2">
                                Salesforce integrates Large Language Models through its AI layer, especially within Einstein
                                and Agentforce, to transform how businesses interact with data, customers, and workflows.
                                These capabilities go beyond automation, enabling smarter, faster, and more contextual decision making.
                            </p>

                            <ul className="pt-2">
                                <li className="pb-2">
                                    Conversational AI enables chatbots and virtual agents to handle customer interactions naturally and efficiently.
                                </li>
                                <li className="pb-2">
                                    Content generation helps teams create emails, summaries, and knowledge articles instantly with AI assistance.
                                </li>
                                <li className="pb-2">
                                    Data insights allow users to query CRM data using natural language, eliminating the need for complex queries or reports.
                                </li>
                                <li className="pb-2">
                                    Code generation and automation streamline development and repetitive tasks, improving productivity across teams.
                                </li>
                                <li>
                                    Personalisation at scale delivers tailored customer experiences by leveraging AI driven insights and behavior patterns.
                                </li>
                            </ul>

                        </div>

                        {/*  */}
                        <div className="pt-4">
                            <h4 className='fS26'>Salesforce LLM Transforms Higher Education</h4>

                            <p className="pt-2">
                                Salesforce LLM is not just transforming businesses it is redefining how institutions operate at every level.
                                By embedding AI directly into workflows, teams can access insights, automate decisions, and act faster without
                                relying on technical expertise.
                            </p>

                            <ul className="pt-2">
                                <li className="pb-2">
                                    Admissions teams can query enrollment pipelines in plain English no SOQL, no dashboards, and no dependency on analysts.
                                </li>
                                <li className="pb-2">
                                    Advancement officers receive AI generated donor engagement summaries before every interaction, improving personalization.
                                </li>
                                <li className="pb-2">
                                    Student success advisors get proactive alerts for at risk students based on behavioral and academic data signals.
                                </li>
                                <li>
                                    Leadership gains real time narrative insights instead of static charts, enabling faster and smarter decision making.
                                </li>
                            </ul>

                            {/* <p className="pt-3">
                                This is not automation for the sake of efficiency alone. It is intelligent augmentation empowering people with
                                the right context, insights, and recommendations exactly when they need them.
                            </p> */}
                        </div>


                        {/* <HeadingContent
                            title="Salesforce LLM: Transforming Modern Business Operations"
                            content={
                                <>
                                    <p>
                                        Imagine managing customer data, writing emails, analyzing reports, and responding to queries manually every day.
                                        These repetitive tasks consume time and often lead to delays and inefficiencies.
                                    </p>

                                    <p>
                                        Now imagine the same workflow powered by Salesforce LLM. Emails are generated automatically, customer conversations
                                        are summarized instantly, and AI suggests the next best actions based on real time data. This transformation helps
                                        businesses work faster, make smarter decisions, and deliver highly personalized customer experiences.
                                    </p>
                                </>
                            }
                        /> */}

                        {/* Flip Section */}
                        {/* <FlipImgwithContent items={items} /> */}

                        {/* Real Life Scenario */}
                        <div className="implementation-section pt-4">
                            <h4 className="mb-4 fS26">Real Life Scenario: Before vs After AI Integration</h4>

                            <p>
                                Before AI Riya, a college student, had to constantly switch between portals and wait for responses to get basic information. She would email the admin team to check her fee status, ask faculty about attendance eligibility, and manually track assignment deadlines. Sometimes, it would take hours or even days to get clear answers, especially during busy academic periods. This not only slowed her down but also created unnecessary stress.
                            </p>
                            <p>
                             After implementing a custom Salesforce LLM, everything changed for Riya.
                            </p>
                            <p>
                            Now, she can simply ask questions like, “Am I eligible for exams?” or “What are my pending fees?” and get instant, accurate answers based on her real-time data. She receives reminders for assignments, updates on attendance, and even suggestions on improving her academic performance all without chasing multiple departments.
                            </p>
                        </div>

                        {/* How it Works */}
                        <div className="pt-3">
                            <h4 className='fS26'>How Salesforce LLM Works</h4>

                            <ul>
                                <li className="pb-2">
                                    <strong>Natural Language Processing:</strong> Understands and processes human language to generate meaningful responses.
                                </li>
                                <li className="pb-2">
                                    <strong>AI-Powered Content Generation:</strong> Creates emails, reports, and summaries instantly.
                                </li>
                                <li className="pb-2">
                                    <strong>Context Aware Insights:</strong> Uses CRM data to provide relevant and personalized outputs.
                                </li>
                                <li className="pb-2">
                                    <strong>Automation Integration:</strong> Works with Salesforce flows and processes to automate tasks.
                                </li>
                                <li className="pb-2">
                                    <strong>Real time Recommendations:</strong> Suggests next best actions for sales and service teams.
                                </li>
                                <li>
                                    <strong>Data Security Layer:</strong> Ensures sensitive customer data is handled securely within Salesforce.
                                </li>
                            </ul>
                            <img src={salesforceImg1} className='rounded' width={'100%'} alt="" />
                        </div>


                        <div className="pt-4">
                            <h4 className='fS26'>Key Architectural for Salesforce LLM</h4>

                            <div className="pt-2">
                                <p className="pb-2">
                                    <strong>1. Data Readiness:</strong> Clean, well governed, and unified data within Salesforce is essential.
                                    AI amplifies both high quality data and poor data, so a strong data foundation is critical.
                                </p>

                                <p className="pb-2">
                                    <strong>2. AI Integration Layer:</strong> Whether using Einstein Copilot, external LLM APIs, or
                                    retrieval augmented generation (RAG), the architecture should be modular, scalable, and model agnostic.
                                </p>

                                <p>
                                    <strong>3. Human Centered Design:</strong> Adoption is key to success. AI experiences should feel natural
                                    and conversational, enabling users to interact intuitively rather than forcing them to learn complex tools.
                                </p>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="pt-3">
                            <h4 className='fS26'>Real Business Impact</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong>Increased Productivity:</strong> Automates repetitive tasks like writing emails and reports.
                                </li>
                                <li className="pb-2">
                                    <strong>Faster Decision Making:</strong> Provides instant insights and recommendations.
                                </li>
                                <li className="pb-2">
                                    <strong>Personalized Customer Experience:</strong> Tailors interactions based on customer data.
                                </li>
                                <li className="pb-2">
                                    <strong>Improved Efficiency:</strong> Reduces manual effort across teams.
                                </li>
                                <li className="pb-2">
                                    <strong>Better Data Utilization:</strong> Converts raw CRM data into actionable insights.
                                </li>
                                <li>
                                    <strong>Scalable Operations:</strong> Supports business growth with AI-driven automation.
                                </li>
                            </ul>
                        </div>

                        {/* Comparison */}
                        {/* <div className="pt-3">
                            <h4 className='fS26'>Traditional CRM vs AI powered Salesforce</h4>
                            <ul>
                                <li className="pb-2"><strong>Manual Work vs AI Automation</strong></li>
                                <li className="pb-2"><strong>Static Data vs Intelligent Insights</strong></li>
                                <li className="pb-2"><strong>Manual Emails vs AI-Generated Content</strong></li>
                                <li className="pb-2"><strong>Basic Reporting vs Predictive Analytics</strong></li>
                                <li className="pb-2"><strong>Reactive Actions vs Proactive Recommendations</strong></li>
                            </ul>

                            <p className="pt-2">
                                Moving from a traditional CRM to an AI-powered Salesforce system allows businesses to automate repetitive processes,
                                reduce human errors, and improve overall efficiency. Instead of just storing data, Salesforce LLM transforms it into
                                actionable intelligence that helps teams perform better.
                            </p>

                            <p className="pt-2">
                                In today’s competitive environment, businesses need faster insights and personalized engagement. Salesforce LLM enables
                                organizations to meet these expectations by providing real-time responses, improving communication, and enhancing customer
                                satisfaction at scale.
                            </p>
                        </div> */}

                        <div className='border-bottom pb-3'></div>

                        <div className="pt-3">
                            <h4 className='fS26'>Why is Salesforce LLM Important?</h4>

                            <p className="pt-2">
                                Salesforce LLM simplifies complex workflows and helps teams work smarter. It reduces manual effort, provides real time
                                insights, and enhances productivity across departments. Employees can focus more on strategic tasks instead of repetitive work.
                            </p>

                            <p>
                                Without AI, teams often spend excessive time on data analysis, content creation, and decision making. This not only slows
                                down operations but also increases the chances of errors.
                            </p>

                            <p>
                                With Salesforce LLM, businesses gain a competitive advantage by delivering faster, more accurate, and highly personalized
                                customer experiences. It empowers organizations to scale efficiently while maintaining quality and consistency.
                            </p>

                            <p>
                                Overall, Salesforce LLM is not just an upgrade it represents the future of CRM, where AI and data work together to drive
                                smarter business outcomes.
                            </p>
                        </div>
                        


                    </div>

                    {/* SIDEBAR */}
                    <div className="col-lg-4 sidebar">
                        {/* Sidebar content */}
                        <Salesforcellm_Sidebar />
                    </div>

                </div>
            </div>
        </>
    )
}

export default SalesforceIIM_first;