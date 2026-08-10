import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/services-details/icon-1.svg';
import icon2 from '../../../assets/imgs/services-details/icon-2.svg';
import icon3 from '../../../assets/imgs/services-details/icon-3.svg';
import icon4 from '../../../assets/imgs/services-details/icon-4.svg';

import img1 from '../../../assets/imgs/services-details-2/agentforce/img-1.png';
import img2 from '../../../assets/imgs/services-details-2/agentforce/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/agentforce/img-3.png';
import img4 from '../../../assets/imgs/services-details-2/agentforce/img-4.png';
import img5 from '../../../assets/imgs/services-details-2/agentforce/img-5.png';

import AgentforcePara from "../../ui/AgentforcePara/AgentforcePara";
import FlipImgwithContentAgentforce from "./FlipImgwithContentAgentforce";
import AgentforceImplementationBlog from "../../BlogSidebar/AgentforceImplementationBlog";

function AgentforceImplementation_First() {

    const items = [
        {
            icon: icon1,
            title: "Step 1: Enable Einstein Generative AI in Salesforce",
            description:
                "Agentforce runs on Einstein's generative AI capabilities. From Setup, search for Einstein Setup and toggle on Einstein Generative AI."
        },
        {
            icon: icon2,
            title: "Step 2: Enable Agentforce",
            description:
                "Still in Setup, search for Agentforce Agents and flip the switch to enable Agentforce. This unlocks the tools you’ll use to design and manage your AI-powered agents."
        },
        {
            icon: icon3,
            title: "Step 3: Go to Agentforce Agents to Create Your First Agent",
            description:
                "In the Setup menu, search for Agentforce Agents. This is your central hub for creating new agents and managing existing ones."
        }, {
            icon: icon2,
            title: "Step 4: Create a New Agent",
            description:
                "Click + New Agent. You'll be prompted to select a starting template."
        }, {
            icon: icon4,
            title: "Step 5: Choose a Template",
            description:
                "Salesforce provides out-of-the-box templates like the Agentforce Service Agent. Templates give you a solid foundation, so you can focus on tailoring the agent to your business needs rather than starting from scratch."
        }, {
            icon: icon2,
            title: "Step 6: Open the Agent Builder",
            description:
                "Once the agent is created, click into the Agent Builder. Think of it as your design studio—this is where you configure how the agent listens, understands, and responds."
        }, {
            icon: icon2,
            title: "Step 7: Define Topics",
            description:
                "Topics represent the kinds of requests your customers might have, like Order Status, Billing Questions, or Returns. Defining clear topics helps guide conversations and keeps your agent organized."
        }, {
            icon: icon4,
            title: "Step 8: Add Actions to Topics",
            description:
                "Topics represent the kinds of requests your customers might have, like Order Status, Billing Questions, or Returns. Defining clear topics helps guide conversations and keeps your agent organized."
        }, {
            icon: icon1,
            title: "Step 9: Ground Your Agent in Data (Optional but Powerful)",
            description:
                "Whether deploying Prediction Builder at scale or integrating custom LLMs into Experience or Industries Cloud, your solution is robust and future-proof."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/SXgDcefKprU?si=BPkuQGhVXzSdTPBl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <HeadingContent
                            title="Agentforce at Work : Streamlining Sales Process Every Step of the Way"
                            content={
                                <>
                                    <p>Implementing Agentforce in Salesforce is transforming how sales teams work by combining AI, automation, and CRM data into one intelligent assistant. Instead of spending hours on repetitive tasks like quote creation, margin calculations, or comparing deals, sales reps can now instruct Agentforce to handle these tasks instantly.<b className="text-black"> AI, automation, and CRM data into one intelligent assistant</b>.This article explores real-world Agentforce use cases for sales teams, based on business requirements and user stories, to show how AI can simplify quoting, improve accuracy, and enhance productivity.</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>
                        {/* next section  */}
                        <AgentforcePara />

                        {/* filp img and content */}
                        <FlipImgwithContentAgentforce items={items} />

                        <div className="implementation-section">
                            <h1 className="mb-4">Agentforce Implementation Use Cases</h1>

                            {/* 1 */}
                            <div className="mb-5">
                                <h3>1. Automated Quote Creation with Margin Control</h3>
                                <p>
                                    <strong>User Prompt :</strong> “As a sales rep, I want to instruct the
                                    agent to create a quote with a specified margin, so that I can quickly
                                    prepare accurate quotes for customers.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>Automatically applies margins (e.g., “Apply 10% margin”).</li>
                                    <li>Ensures accuracy with rounding to two decimal places.</li>
                                    <li>Validates margins (no negative values or over 100%).</li>
                                    <li>
                                        Provides error handling if a line item cannot accept the margin.
                                    </li>
                                    <li>
                                        Saves quotes with timestamps and user details for compliance.
                                    </li>
                                </ul>

                                <p>Benefit: Sales reps save time while ensuring consistency and accuracy in quotes.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img1}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* 2 */}
                            <div className="mb-5">
                                <h3>2. Quote Grouping for Complex Deals</h3>
                                <p>
                                    <strong>User Prompt:</strong> “As a sales rep, I want to instruct the
                                    agent to create quote groups from specific line items, so that I can
                                    organize complex quotes logically.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>
                                        Groups items logically (e.g., “Create a Hardware Group with line items
                                        1, 3, and 5”).
                                    </li>
                                    <li>Confirms items included in the group.</li>
                                    <li>Allows custom group naming.</li>
                                    <li>Provides validation for incorrect inputs.</li>
                                    <li>Keeps groups editable for flexibility.</li>
                                </ul>

                                <p>Benefit: Complex deals become easier to manage and present to clients.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img2}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* 3 */}
                            <div className="mb-5">
                                <h3>3. Side-by-Side Quote Comparison</h3>
                                <p>
                                    <strong>User Prompt:</strong> “As a sales rep, I want to ask the agent to
                                    compare two quotes, so that I can identify differences and make informed
                                    decisions.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>Compares two quotes in detail (pricing, terms, structure).</li>
                                    <li>Displays differences in a structured table format.</li>
                                    <li>Highlights variations visually.</li>
                                    <li>Validates quote accessibility before comparison.</li>
                                    <li>Allows exporting of comparison reports.</li>
                                </ul>

                                <p>Benefit: Faster decision-making and confident client discussions.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img3}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* 4 */}
                            <div className="mb-5">
                                <h3>4. Finding Similar Historical Quotes</h3>
                                <p>
                                    <strong>User Prompt:</strong> “As a sales rep, I want the agent to find
                                    similar previous quotes based on customer needs.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>Searches past quotes by customer type and product mix.</li>
                                    <li>Retrieves top 3 relevant quotes.</li>
                                    <li>Displays quote ID, customer name, and summary.</li>
                                    <li>Provides filters for date and category.</li>
                                </ul>

                                <p>Benefit: Faster deal preparation using proven baselines.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img3}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* 5 */}
                            <div className="mb-5">
                                <h3>5. Quick Modifications to Existing Quotes</h3>
                                <p>
                                    <strong>User Prompt:</strong> “As a sales rep, I want to instruct the
                                    agent to modify specific aspects of an existing quote.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>Instant updates to discounts and pricing.</li>
                                    <li>Confirmation before applying changes.</li>
                                    <li>Authorization checks.</li>
                                    <li>Change history logging.</li>
                                    <li>Pricing rule validation.</li>
                                </ul>

                                <p>Benefit: Saves hours while maintaining compliance.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img4}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* 6 */}
                            <div className="mb-5">
                                <h3>6. Rich Text Updates Without Limitations</h3>
                                <p>
                                    <strong>User Prompt:</strong> “As a sales rep, I want the agent to update
                                    rich text fields properly.”
                                </p>

                                <strong>How Agentforce Helps:</strong>
                                <ul>
                                    <li>Supports formatting (bold, italics, links).</li>
                                    <li>Validates field limits.</li>
                                    <li>Confirms updates before saving.</li>
                                    <li>Ensures formatting consistency.</li>
                                </ul>

                                <p>Benefit: Professional, client-ready quotes.</p>

                                <img
                                    className="rounded-3 img-fluid"
                                    src={img5}
                                    alt="Codm"
                                    style={{ height: "350px" }}
                                />
                            </div>

                            {/* Outcome */}
                            <div className="mb-5">
                                <h3>Outcome of the Implementation:</h3>
                                <p>
                                    By combining Einstein Generative AI with Salesforce data and actions,
                                    Agentforce delivers instant, personalized support at scale—transforming
                                    customer engagement.
                                </p>

                                <ul>
                                    <li>Automates FAQs and customer support</li>
                                    <li>Streamlines workflows</li>
                                    <li>Manages complex interactions</li>
                                    <li>Empowers teams to focus on critical tasks</li>
                                </ul>
                            </div>
                        </div>




                        <div className='border-bottom pb-3'></div>
                    </div>

                    {/* sidebar */}
                    

                    <div className="col-lg-4 sidebar">

                       <AgentforceImplementationBlog/>
                    </div>

                </div>
            </div>  
        </>
    )
}

export default AgentforceImplementation_First;