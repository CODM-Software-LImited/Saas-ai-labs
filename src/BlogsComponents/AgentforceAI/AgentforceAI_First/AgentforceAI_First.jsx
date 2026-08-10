
import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';

import img1 from '../../../assets/imgs/services-details-2/AgentforceFinancialServices/AgentfinanceService.webp';

import AgentforcePara from "../../ui/AgentforcePara/AgentforcePara";
// import FlipImgwithContentAgentforce from "./FlipImgwithContentAgentforce";
import FlipImgwithContent from "../../ui/FlipImgwithContent/FlipImgwithContent";
import AgentforceAISidebar from "../../BlogSidebar/AgentforceAISidebar";


function AgentforceAI_First() {


    const items = [
        {
            icon: icon1,
            title: "AI-Powered Development",
            description:
                " It uses natural language and AI to turn ideas into code, apps, and workflows, significantly boosting developer productivity."
        },
        {
            icon: icon2,
            title: "Context Aware Coding",
            description:
                "The system auto detects org metadata, Apex code, and dependencies, generating accurate, test ready code tailored to the environment."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        {/* <img
                            className="rounded-3"
                            src={img1}
                            alt="Codm"
                            width={'100%'}
                        /> */}

                        <iframe width="100%" height="335" className="rounded-1" src="https://www.youtube.com/embed/lYzJoih1SSA?si=5iiPOB0eV5bgNP2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       
                        <HeadingContent
                            title="Agentforce Vibe Coding a Lead Hub"
                            content={
                                <>
                                    <p>
                                        The Agentforce Vibe Coding a Lead Hub - AgentForce in Action demonstrates how Salesforce's Agentforce Vibes, an AI powered development tool, is changing the way applications are built within Salesforce. Instead of relying on traditional manual coding, the tool uses natural language instructions to create fully functional apps and components.Agentforce generates a complete Lead Hub application from a single command, showing how quickly and efficiently complex business solutions can be developed when AI understands the business context and data structure. Rather than navigating multiple setup screens or writing code step by step, the presenter simply explains the desired features of a lead management hub, and Agentforce interprets those requirements to build a working application with real data and workflows. Overall, the demonstration highlights the future of AI assisted software development, where users can create applications by describing what they need instead of focusing on how to build them.

                                    </p>
                                </>
                            }
                        />

                        {/* filp img and content */}
                        <div className="">
                            <FlipImgwithContent items={items} />
                        </div>


                        {/* next section  */}

                        <div className="implementation-section">
                            <h4 className="mb-4">How Agentforce Vibe Coding Work</h4>

                            <div className="mb-3">
                                <h5>
                                    Agentforce Vibe Coding enables AI driven development by turning
                                    natural language instructions into enterprise ready Salesforce solutions.
                                </h5>
                                <h5>It works through six key steps:</h5>
                                <ul>
                                    <li className="pb-2">
                                        <strong>Connect to Your Salesforce Org:</strong> Agentforce securely
                                        reads your metadata, objects, fields, and existing codebase to
                                        understand your business context.
                                    </li>

                                    <li className="pb-2">
                                        <strong>Describe Requirements in Natural Language:</strong> Developers
                                        or admins simply explain what they want to build such as a Lead Hub,
                                        automation flow, or reporting dashboard.
                                    </li>

                                    <li className="pb-2">
                                        <strong>AI Planning &amp; Task Breakdown:</strong> The Agentforce agent
                                        analyzes the request and creates a structured execution plan,
                                        identifying required Apex classes, Lightning Web Components,
                                        flows, and test cases.
                                    </li>

                                    <li className="pb-2">
                                        <strong>Code &amp; Component Generation:</strong> It automatically
                                        generates production ready code, UI components, metadata
                                        configurations, and validation logic aligned with your org’s standards.
                                    </li>

                                    <li className="pb-2">
                                        <strong>Review, Governance &amp; Approval:</strong> All generated
                                        changes are presented in preview mode, allowing teams to review,
                                        modify, and approve before deployment.
                                    </li>

                                    <li>
                                        <strong>Test, Deploy &amp; Optimize:</strong> Agentforce supports
                                        automated test creation and integrates with DevOps pipelines to
                                        ensure secure deployment and continuous optimization.
                                    </li>
                                </ul>

                                <p>
                                    This approach accelerates development cycles while maintaining enterprise grade security, compliance, and governance standards within Salesforce.
                                </p>
                            </div>
                        </div>

                        {/* next section */}
                        <div className="pt-3">
                            <h4>Advantages of Agentforce Vibe Coding Work</h4>
                            <ul>
                                <li className="pt-2 pb-2">
                                    <span>
                                        <strong>AI Powered Development:</strong> It uses natural language and AI to turn ideas into code, apps, and workflows, significantly boosting developer productivity.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Enterprise Grade Security:</strong>
                                        Built on the Agentforce 360 Platform, it ensures enterprise grade security, governance, and compliance.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Context Aware Coding:</strong> The system auto detects org metadata, Apex code, and dependencies, generating accurate, test ready code tailored to the environment.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Streamlined Workflow:</strong> Developers can plan, build, review, and release within a single secure setup, with AI providing suggestions, explanations, and code analysis.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Collaboration and Accessibility:</strong>
                                        It makes development more accessible, allowing non developers to contribute using natural language instead of writing code.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong> Reusable Prompts and Community Support:</strong>
                                        Developers can leverage a library of reusable prompts, shared examples, and community discussions to enhance their workflow.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong> Focus on Innovation:</strong>
                                        By automating repetitive tasks, developers can concentrate on strategic and innovative work.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Regulatory Compliance and Risk Management:</strong> With built in compliance monitoring and AI-powered anomaly detection, Agentforce helps financial institutions stay aligned with evolving regulations. It minimizes operational risk through automated checks, documentation, and alerts.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* next section */}
                        <div className="pt-3">
                            <h4 className="pb-2">How Agentforce Vibes is different from other AI tools</h4>
                            <ul>
                                <li className="pb-2">
                                    <span>
                                        <strong>Context Aware Development with Org Level Metadata :</strong>
                                        Unlike general AI coding assistants that generate standalone code snippets, Agentforce Vibes connects directly to your Salesforce org.
                                        This ensures every output is tailored specifically to your environment not generic boilerplate code.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Enterprise Grade Security :</strong>
                                        Built on the Agentforce 360 Platform, it ensures enterprise level security, governance, auditability, and compliance aligned with Salesforce Trust standards.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Action Taking AI Agent :</strong>
                                        Unlike typical AI tools that only suggest snippets, Agentforce Vibes plans multistep tasks, generates backend logic, UI components, metadata, and test classes in one cohesive workflow.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Streamlined Workflow :</strong>
                                        Developers can plan, build, review, test, and deploy within a single secure setup, with AI providing structured planning, code explanations, validation, and optimization.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Low Code Accessibility & Collaboration :</strong>
                                        Business users and admins can contribute using natural language prompts, reducing dependency on deep coding expertise and encouraging cross team collaboration.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Built In Review & Governance Controls :</strong>
                                        All generated changes are previewed before deployment, ensuring teams can review, approve, modify, and maintain compliance before anything goes live.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Reusable Prompts and Ecosystem Support :</strong>
                                        Teams can leverage reusable prompt libraries, shared best practices, and community driven enhancements to accelerate development cycles.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Focus on Strategic Innovation :</strong>
                                        By automating repetitive development and configuration tasks, teams can focus on high value innovation, customer experience, and business growth.
                                    </span>
                                </li>

                                <li className="pb-2">
                                    <span>
                                        <strong>Regulatory Compliance and Risk Management :</strong>
                                        With built in compliance monitoring, secure audit trails, and AI driven validation checks, Agentforce minimizes operational risk and ensures alignment with regulatory standards.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className='border-bottom pb-3'></div>

                    </div>

                    {/* sidebar */}


                    <div className="col-lg-4 sidebar">
                        <AgentforceAISidebar/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentforceAI_First;
