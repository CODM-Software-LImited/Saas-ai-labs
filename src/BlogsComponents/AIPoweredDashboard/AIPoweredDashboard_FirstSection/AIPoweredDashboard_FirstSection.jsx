import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import AlPoweredDashboardSidebar from '../../BlogSidebar/AIPoweredDashboardSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import img1 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-1.png';
import img2 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-3.png';
import img5 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-5.png';
import img6 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-6.png';

function AIPoweredDashboard_FirstSection() {

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
                        <video
                            className="w-100 rounded"
                            src={PharmaDemo}
                            controls
                            autoPlay
                            muted
                            loop
                        />

                        <HeadingContent
                            title="Revolutionizing Pharmaceutical Operations with Our AI-Powered Salesforce Dashboard For one of our client"
                            content="In today's fast-paced pharmaceutical industry, data moves faster than decisions. Managing vast inventories, ensuring strict compliance, monitoring sales performance, and predicting demand are challenges that require more than just a basic reporting tool they demand intelligence. Salesforce Einstein AI & LLM Model is the solution that transforms your Salesforce CRM into a powerful AI-driven dashboard, enabling you to make data-driven decisions with unprecedented speed and accuracy."
                        />

                        <HeadingContent
                            title="Our AI-Optimized Solution"
                            content="We designed and developed a custom pharmaceutical dashboard fully integrated with AI capabilities to handle real-time data, predictive analytics, and automation. The solution empowers decision-makers to move from reactive problem-solving to proactive strategy building. Make intelligent predictions about inventory needs, sales trends, and compliance requirements, ensuring your operations are always one step ahead."
                        />

                        {/* next section  */}
                        <PhaseItems items={[
                            ["Smart Inventory Forecasting", "Predictive Sales Analysis"],
                            ["Compliance Intelligence", "Automated Reporting & Analytics"],
                            ["AI-Driven Decision Support", "Strategic AI Roadmapping"],
                        ]} />

                        {/* next section */}
                        <HeadingContent
                            title="Why This Matters for the Pharmaceutical Industry"
                            content="In an industry where speed, accuracy, and compliance can make or break operations, AI is not just an advantage — it's a necessity. Our solution proves that intelligent dashboards can reshape how pharma companies operate, making them more agile, compliant, and competitive."
                        />

                        {/* filp img and content */}
                        <FlipImgwithContent items={items} />
                        <div className='border-bottom pb-3'></div>

                        {/* next content section */}
                        <div>
                            <HeadingContent
                                title="Overview of the Solution"
                                content="We developed a next-generation Pharmaceutical Admin Dashboard in Salesforce, leveraging Lightning Web Components (LWC), Apex, advanced admin configurations, and AI-driven intelligence. Designed to streamline operations and reduce manual effort, the dashboard automates critical tasks like report generation, inventory monitoring, compliance tracking, and sales/service performance analysis."
                            /><br />
                            <p><b>The solution is tailored for both Sales and Service teams—each with its own specialized dashboard view—offering:</b></p>

                            <img src={img1} alt="AI-Powered Dashboard" width={'100%'} />
                            <p className="pt-3"><b>Forecasting tools</b> to predict sales trends and stock requirements.</p>

                            <img src={img2} alt="AI-Powered Dashboard" width={'100%'} />
                            <p className="pt-3"><b>Automated reporting</b> to reduce manual data entry and compliance checks.</p>

                            <img src={img3} alt="AI-Powered Dashboard" width={'100%'} />
                            <p className="pt-3"><b>Dynamic dashboards</b> that adapt to user roles, providing relevant data at a glance.</p>
                            <p><b>Lead Scoring</b> to prioritize high-value prospects based on historical data and AI predictions.</p>

                            <img src={img5} alt="" width={'100%'} />
                            <p className="pt-3"><b>Performance summary</b> for both sales and service teams, highlighting key metrics and KPIs.</p>

                            <img src={img6} alt="" width={'100%'} />
                            <p className="pt-2"><b>Smart inventory management</b>with predictive alerts for low stock or overstock situations.</p>
                            <p className="pt-2"><b>User-friendly LWC interface</b>optimized for speed, clarity, and responsiveness.</p>
                            <p>By integrating Salesforce AI with custom Apex logic and real-time data visualization, this dashboard empowers pharmaceutical businesses to work proactively instead of reactively, ensuring agility, compliance, and growth.</p><br />
                        </div>

                        <div className='border-bottom'></div>

                        {/* next section  */}
                        <HeadingContent
                            title="AI-Powered Healthcare"
                            content={
                                <>
                                    <p><b className="text-black">Adverse Event Intelligence:</b>This will spot and act on safety concerns early for instance- if several patients report dizziness, Einstein flag the pattern immediately allowing team to investigate before it escalates.</p>

                                    <p><b className="text-black">Clinical Trial Optimization:</b> Einstein identifies the most promising trial sites and predict participant engagement before problem arise.</p>

                                    <p><b className="text-black">Patient Adherence Prediction:</b> This assist patients to stick to treatment plans for instance- einstein detects that a patient with hypertension is likely to stop refilling after 60 days , it triggers personalized SMS reminder.</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>

                        {/* next content section */}
                        <HeadingContent
                            title="Technologies We Leverage"
                            content={
                                <>
                                    <p><b className="text-black">AI & Analytics :</b>Custom LLM models, Salesforce Einstein GPT, Prediction Builder, Natural Language Processing (NLP), AI-powered insights</p>

                                    <p><b className="text-black">Integration & Development :</b>Lightning Web Components (LWC), Apex, Salesforce Flow, APIs, External Service Integrations</p>

                                    <p><b className="text-black">Data & Platform Foundations :</b>Salesforce Data Cloud (CDP), Customer 360, Governance Frameworks, Data Modeling, Real-time Dashboards</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>

                        {/* next para */}
                        <HeadingContent
                            title="Conclusion"
                            content="The implementation of our AI-powered Pharmaceutical Admin Dashboard transformed our client's day-to-day operations. By combining Salesforce LWC, Apex, Admin configurations, and AI-driven insights, we eliminated manual bottlenecks, improved data accuracy, and empowered teams with actionable intelligence."
                        />
                        <div className='border-bottom pb-3'></div>

                        {/* next */}
                        <HeadingContent
                            title="Key Benefits to the Client :"
                            content={
                                <>
                                    <p><b className="text-black">Time Savings :</b>Automated reporting and AI insights reduced monthly reporting effort by up to 70%.</p>

                                    <p><b className="text-black">Improved Accuracy :</b>Real-time inventory and compliance monitoring significantly minimized human errors.</p>

                                    <p><b className="text-black">Proactive Decision-Making :</b> AI forecasting enabled the client to anticipate stock requirements, sales trends, and service demands.</p>

                                    <p><b className="text-black">Enhanced Productivity :</b>Operational costs were reduced by up to 20% through automation and intelligent recommendations.</p>

                                    <p><b className="text-black">Operational Cost Reduction :</b>Smarter inventory management and optimized workflows led to cost savings of over 20%.</p>
                                </>
                            }
                        />
                        <div className='border-bottom pb-3'></div>
                        {/* next section */}
                        <HeadingContent
                            title="Outcome of the Project"
                            content="The client now operates with a centralized, intelligent, and scalable dashboard that delivers real-time visibility, ensures compliance, and drives growth. Their teams are empowered to make faster, data-backed decisions, positioning them for long-term success in the competitive pharmaceutical industry."
                        />
                        <div className='border-bottom pb-3'></div>

                        {/* next section */}
                        <HeadingContent
                            title="Why Choose Codm Software for Your AI-Powered Pharmaceutical Dashboard?"
                            content={
                                <>
                                    <p><b className="text-black">Salesforce Expertise: </b>Over years of experience in LWC, Apex, and Salesforce Admin development, delivering tailored, high-performance solutions.</p>

                                    <p><b className="text-black">Industry-Focused Approach: </b>We understand the unique challenges of the pharmaceutical industry—from compliance to forecasting—and design dashboards that address them head-on.</p>

                                    <p><b className="text-black">AI-Driven Innovation: </b>Seamless integration of Salesforce AI for predictive analytics, smart inventory alerts, and actionable insights.</p>

                                    <p><b className="text-black">End-to-End Development: </b>From design and development to deployment and training, we handle every step for a smooth implementation.</p>

                                    <p><b className="text-black">Proven Results: </b>Our dashboards cut reporting time by up to 70% and reduce operational costs by up to 20% through automation and intelligent recommendations.</p>

                                    <p><b className="text-black">User-Centric Design: </b>Intuitive, responsive interfaces built with LWC for both sales and service teams, ensuring ease of adoption and maximum productivity.</p>

                                    <p>With Codm Software, you're not just getting a dashboard—you're getting a strategic partner dedicated to optimizing your operations and driving measurable growth.</p>
                                </>
                            }
                        />

                    </div>

                    <div className="col-lg-4 sidebar">
                        <AlPoweredDashboardSidebar />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AIPoweredDashboard_FirstSection;