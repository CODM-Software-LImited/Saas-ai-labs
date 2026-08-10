import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import img2 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img2.png';
import img1 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img1.png';
import img3 from '../../../assets/imgs/services-details-2/Manufacturing-Cloud/img3.png';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

function ManufacturingCloud_First() {
    const items = [
        {
            icon: icon1,
            title: "Unified Data",
            description:
                "Connects customer, employee, asset, and partner data for streamlined operations."
        },
        {
            icon: icon2,
            title: "Predictive Insights",
            description:
                "Uses AI to forecast demand, predict equipment failures, and optimize resources."
        }
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                            title="What is Salesforce Manufacturing Cloud?"
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
                                        Salesforce Manufacturing Cloud is a specialized platform designed to help manufacturers modernize operations and deliver personalized service across their value chain. It unifies data, teams, and systems to drive excellence in sales, channel engagement, and service. The platform incorporates AI to automate processes, enhance employee capabilities, and provide actionable insights.
                                    </p>
                                </>
                            }
                        />

                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for Salesforce Manufacturing Cloud</h4>
                            <p>Agentforce for Salesforce Manufacturing Cloud is an advanced platform designed to modernize manufacturing operations by integrating AI and automation. It unifies customer, employee, asset, and partner data to streamline processes and enhance collaboration across the value chain. With AI powered automation, it simplifies workflows, augments employee capabilities, and personalizes customer interactions. The platform also provides predictive insights to forecast demand, predict equipment failures, and optimize resources, enabling proactive decision making. Tailored specifically for the manufacturing industry, it includes specialized data models and applications to address unique business needs, while also simplifying partner engagement and strengthening relationships. This comprehensive solution helps manufacturers drive efficiency, improve customer satisfaction, and achieve sustainable growth.
                            </p>
                        </div>

                        {/* filp img and content */}

                        <div className="col-8">
                            <FlipImgwithContent items={items} />

                        </div>

                        <div className="implementation-section pt-4">
                            <h4 className="mb-4">Salesforce Manufacturing Cloud</h4>

                            <div className="mb-3">
                                <h5 className="pb-3">key features:</h5>
                                <ul>
                                    <li className="pb-3"> <strong className="text-black">Unified Data: </strong>
                                        Combines customer, employee, asset, and partner data into a single platform for streamlined operations.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Demand Forecasting:</strong>
                                        Aligns sales agreements with demand forecasts to improve planning and execution.

                                    </li>
                                    <li className="pb-3"><strong className="text-black">AI Powered Insights:</strong>
                                        Provides actionable analytics to predict equipment failures, optimize resources, and enhance decision making.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Channel Collaboration:</strong>
                                        Simplifies partner engagement and strengthens relationships for better collaboration.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Service Transformation:</strong>
                                        Enhances customer service with tools for warranty management, proactive maintenance, and real time updates.
                                    </li>
                                </ul>
                            </div>


                            <div className="pt-3">
                                <div className="ratio ratio-16x9 overflow-hidden rounded-3">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dt8xp6lmYpI?si=DLb1n0qoCfDxP9Qn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>


                            <div className="mb-4 pt-4">
                                <h4 className="text-black">Use Cases & Measurable Impact</h4>
                                <p>Salesforce Manufacturing Cloud is helping manufacturers improve visibility, efficiency, and collaboration across their operations. Here are some real world examples:</p>

                                <ul>
                                    <li className="pb-1">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.caterpillar.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Caterpillar : </strong>
                                            </a>
                                            Improved sales forecasting accuracy and demand planning by aligning sales agreements,
                                            production schedules, and revenue data in real time using Manufacturing Cloud.
                                        </span>
                                    </li>

                                    <li className="pb-1">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.honeywell.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Honeywell : </strong>
                                            </a>
                                            Enhanced collaboration between sales and operations teams by connecting account based
                                            forecasts with supply chain planning, reducing order delays and inventory issues.
                                        </span>
                                    </li>

                                    <li className="pb-1">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.schneider-electric.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Schneider Electric : </strong>
                                            </a>
                                            Increased revenue predictability and improved customer trust by using real time
                                            sales agreement data and AI driven insights to manage long term contracts.
                                        </span>
                                    </li>

                                    <li className="pb-1">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.3m.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">3M : </strong>
                                            </a>
                                            Streamlined quote to cash processes and improved forecast accuracy by synchronizing
                                            CRM data with production and finance systems.
                                        </span>
                                    </li>

                                    <li className="pb-1">
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.bosch.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Bosch :</strong>
                                            </a>
                                            Reduced planning cycles and improved operational efficiency by using predictive analytics
                                            to align customer demand with manufacturing capacity.
                                        </span>
                                    </li>
                                </ul>

                                <h4 className="pt-3 pb-3">How does manufacturing Cloud work?</h4>

                                <p>Salesforce Manufacturing Cloud operates by unifying data, teams, and systems to streamline operations and enhance collaboration across the manufacturing value chain. It consolidates customer, partner, and operational data into a single platform, providing a 360degree view of the business. The platform aligns sales agreements with demand forecasts, enabling better production planning and inventory management. With AI powered insights, it analyzes data to predict equipment failures, optimize resources, and improve decision making. Collaboration tools enhance communication with partners and distributors through shared data and streamlined workflows. Additionally, it automates customer service processes, such as warranty management and real time updates, to improve customer satisfaction. Tailored specifically for the manufacturing industry, it includes specialized data models and applications to address unique business needs. This comprehensive solution helps manufacturers modernize operations, improve efficiency, and deliver personalized customer experiences. </p>
                            </div>

                        </div>

                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                      
                        <ServiceSidebar />

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img2} width={'100%'} />
                        </div>

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img3} width={'100%'} alt="how it work"/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ManufacturingCloud_First;