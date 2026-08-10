import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import FlipImgwithContent from "../../ui/FlipImgwithContent/FlipImgwithContent";
import FslAutomationSidebar from '../../BlogSidebar/FslAutomationSidebar';

function FslAutomation_First() {

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

                        {/* Video */}
                        <div className=''>
                            <iframe width="100%" height="335" className="rounded-1" src="https://www.youtube.com/embed/4fbNbjpInAs?si=dqegwSJ1G3zOGNpN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        {/* Heading Section */}
                        <HeadingContent
                            title="Field Service Automation: Transforming Real World Operations"
                            content={
                                <>
                                    <p>
                                        Imagine a typical day for a field technician. Multiple calls, manual scheduling,
                                        missed appointments, and incomplete job information often lead to delays and frustration.
                                    </p>

                                    <p>
                                        Now imagine the same workflow powered by Field Service Automation. Jobs are automatically
                                        assigned, routes are optimized, customer details are available instantly, and updates are
                                        sent in real time. This transformation helps businesses improve efficiency, reduce errors,
                                        and deliver better customer experiences.
                                    </p>
                                </>
                            }
                        />

                        {/* Flip Section */}
                        <FlipImgwithContent items={items} />

                        {/* Real Life Scenario */}
                        <div className="implementation-section pt-4">
                            <h4 className="mb-4 fS26">Real Life Scenario: Before vs After Automation</h4>

                            <p>
                                Rahul, a field technician, used to manage his daily tasks manually. He often faced delays due to
                                poor route planning and lack of job details. Missing parts and unclear instructions affected his productivity.
                            </p>

                            <p>
                                After implementing Field Service Automation, Rahul receives a structured schedule, optimized routes,
                                and complete job details on his mobile device. This allows him to complete more jobs efficiently
                                and deliver better service to customers.
                            </p>
                        </div>

                        {/* How it Works */}
                        <div className="pt-3">
                            <h4 className='fS26'>How Field Service Automation Works</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong>Smart Scheduling:</strong> Automatically assigns tasks based on priority, location, and skills.
                                </li>
                                <li className="pb-2">
                                    <strong>Automated Dispatching:</strong> Ensures the right technician is sent to the right job.
                                </li>
                                <li className="pb-2">
                                    <strong>Real Time Tracking:</strong> Monitor field operations with live updates.
                                </li>
                                <li className="pb-2">
                                    <strong>Mobile Access:</strong> Technicians get job details, history, and checklists on mobile apps.
                                </li>
                                <li className="pb-2">
                                    <strong>Automated Reporting:</strong> Generate service reports and invoices instantly.
                                </li>
                                <li>
                                    <strong>Customer Notifications:</strong> Keep customers informed with real time updates.
                                </li>
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="pt-3">
                            <h4 className='fS26'>Benefits of Field Service Automation</h4>
                            <ul>
                                <li className="pb-2">
                                    <strong>Increased Productivity:</strong> Reduce manual tasks and complete more jobs daily.
                                </li>
                                <li className="pb-2">
                                    <strong>Better First Time Fix Rate:</strong> Technicians arrive prepared with the right tools and data.
                                </li>
                                <li className="pb-2">
                                    <strong>Optimized Routes:</strong> Minimize travel time and fuel costs.
                                </li>
                                <li className="pb-2">
                                    <strong>Improved Customer Experience:</strong> Faster service with real time updates.
                                </li>
                                <li className="pb-2">
                                    <strong>Real Time Insights:</strong> Monitor performance with dashboards and analytics.
                                </li>
                                <li>
                                    <strong>Cost Reduction:</strong> Lower operational expenses through efficiency.
                                </li>
                            </ul>
                        </div>

                        {/* Comparison */}
                        <div className="pt-3">
                            <h4 className='fS26'>Traditional vs Automated Field Service</h4>
                            <ul>
                                <li className="pb-2"><strong>Manual Scheduling vs Smart Scheduling</strong></li>
                                <li className="pb-2"><strong>Phone Calls vs Automated Dispatch</strong></li>
                                <li className="pb-2"><strong>Limited Tracking vs Real Time Visibility</strong></li>
                                <li className="pb-2"><strong>Paper Reports vs Digital Reports</strong></li>
                                <li className="pb-2"><strong>Manual Updates vs Automated Notifications</strong></li>
                            </ul>
                            <p className="pt-2">
                                Overall, switching from traditional methods to field service automation helps businesses reduce delays,
                                eliminate manual errors, and improve overall efficiency. By automating routine tasks like scheduling,
                                dispatching, and reporting, companies can focus more on delivering quality service and enhancing
                                customer satisfaction while scaling their operations smoothly.
                            </p>

                            <p className="pt-2">
                                In today’s fast paced environment, customers expect quick responses and real time updates. Field service
                                automation helps meet these expectations by improving communication, reducing response time, and ensuring
                                that technicians arrive fully prepared. This not only builds customer trust but also gives businesses a
                                competitive advantage in delivering faster and more reliable services.
                            </p>
                        </div>


                        <div className='border-bottom pb-3'></div>

                        <div className="pt-3">
                            <h4 className='fS26'>Why is Field Service Automation Important?</h4>

                            <p className="pt-2">
                                Field Service Automation makes work easier, faster, and more organized. It helps businesses reduce mistakes,
                                get real time updates, and manage daily operations smoothly. This not only saves time but also reduces pressure
                                on your team and improves the overall customer experience. Most field workers also find that automation helps
                                them focus more on customers instead of repetitive tasks.
                            </p>

                            <p>
                                In contrast, manual processes can slow everything down. Technicians often spend too much time on paperwork and
                                data entry instead of solving real problems, which increases errors and reduces productivity.
                            </p>

                            <p>
                                Scheduling also becomes difficult without automation, as dispatchers rely on spreadsheets or paper to manage
                                multiple technicians. This can lead to confusion, delays, and miscommunication between teams.
                            </p>

                            <p>
                                Customers may feel frustrated due to a lack of timely updates and smooth service. Over time, this creates stress
                                for technicians and leads to lower satisfaction and burnout.
                            </p>

                            <p>
                                Overall, Field Service Automation helps simplify operations, improve efficiency, and deliver a better experience
                                for both teams and customers.
                            </p>
                        </div>

                    </div>

                    {/* SIDEBAR */}
                    <div className="col-lg-4 sidebar">
                        <FslAutomationSidebar />
                    </div>

                </div>
            </div>
        </>
    )
}

export default FslAutomation_First;