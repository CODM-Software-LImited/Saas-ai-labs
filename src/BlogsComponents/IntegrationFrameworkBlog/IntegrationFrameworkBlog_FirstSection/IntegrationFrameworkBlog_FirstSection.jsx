import img1 from '../../../assets/imgs/services-details-2/Integration_Framework/img-2.png';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg'
import img from '../../../assets/imgs/services-details-2/Integration_Framework/img-5.jpg';
import img2 from '../../../assets/imgs/services-details-2/Integration_Framework/img-6.jpg';
import img3 from '../../../assets/imgs/services-details-2/Integration_Framework/img-4.jpg';
import Accordion from '../../ui/Accordion/Accordion';
import AccordionDataSection from '../accordionDataSection/accordionDataSection';
import CodeSection from '../CodeSection/CodeSection';
import BlogFormSection from '../../ui/BlogFormSection/BlogFormSection';
import BlogSection from '../../../components/BlogSection/BlogSection';
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import IntegrationFrameworkSidebar from '../../BlogSidebar/IntegrationFrameworkSidebar';

function IntegrationFrameworkBlog_FirstSection() {

    const items = [
        {
            icon: icon1,
            title: "Plug-and-Play Architecture",
            description:
                "Pre-built connectors and adapters for leading platforms like Salesforce, HubSpot, Microsoft Dynamics, NetSuite, and more. This allows you to quickly integrate with your existing systems without extensive custom development."
        },
        {
            icon: icon2,
            title: "Event-Driven & API-First",
            description:
                "Supports REST, SOAP, GraphQL, and event-driven patterns (Pub/Sub, Webhooks) to handle both synchronous and asynchronous communication. This flexibility allows you to choose the best integration method for your use case."
        }]

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
                            title="What is Integration Framework?"
                            content={
                                <>
                                    In Integration Framework, we focus on creating a seamless connection
                                    between Salesforce and other applications, enabling businesses to
                                    automate processes, synchronize data, and enhance overall efficiency.
                                    Our approach is centered around understanding your unique business
                                    needs and designing integrations that not only meet current
                                    requirements but also scale with your growth.
                                    <b> Integration Framework </b> is a powerful tool that allows businesses
                                    to connect their Salesforce environment with other applications,
                                    ensuring data flows smoothly across platforms. It supports a wide range
                                    of integration patterns, including real-time data synchronization,
                                    batch processing, and event-driven architectures. This flexibility is
                                    crucial for organizations looking to streamline their operations and
                                    enhance customer experiences.
                                </>
                            }
                        />

                        <PhaseItems items={[
                            ["Plug-and-Play Architecture", "Event-Driven & API-First"],
                            ["Low-Code Integration Tools", "Secure & Compliant"],
                            ["Real-Time Monitoring & Logging", "Scalable & Future-Ready"],
                        ]} />

                        <HeadingContent
                            title={"Integration Framework: Connect, Automate, and Scale Your Business"}
                            content={
                                <>
                                    In today's rapidly evolving digital ecosystem, businesses rely on multiple applications—CRM, ERP, finance, e-commerce, and more. Our Integration Framework empowers you to seamlessly connect all your systems, enabling real-time data exchange, automated workflows, and enhanced customer experiences.Whether you're integrating cloud platforms like Salesforce, SAP, Oracle, or third-party services via REST APIs, our framework is designed to be secure, scalable, and future-ready.
                                </>
                            }
                        />

                        {/* filp img and content */}
                        <FlipImgwithContent items={items}/>
                        <div className='border-bottom'></div>
                    

                        {/* next content section */}
                        <HeadingContent
                            title={"Why Integration is needed?"}
                            content={
                                <>
                                    Integration in Salesforce is needed to connect Salesforce with other systems (like websites, apps, databases, or third-party tools) so that data can flow smoothly between them.
                                    This is important because it helps businesses automate processes, keep data up-to-date, and improve overall efficiency. For example, if a company uses Salesforce for customer relationship management but also has an e-commerce website, integration allows them to automatically sync customer orders and information between the two systems without manual data entry.
                                </>
                            }
                        />
                          <div className='border-bottom pt-4'></div>

                        {/* next para */}
                        <HeadingContent 
                            title={"Fire and Forget"}
                            content={<>
                                When you implement this pattern, Salesforce calls the remote system to create the order, but doesn't wait for the call's successful completion. The remote system can optionally update Salesforce with the new order number and status in a separate transaction.
                            </>}
                        />

                        <img
                            className="rounded-3 pb-4"
                            src={img}
                            alt="Codm"
                            width={'100%'}
                        />
                        <div className='border-bottom'></div>


                        {/* next  */}
                        <HeadingContent 
                        title={"Error Handling and Recovery"}
                        content={<>
                           It’s important to include an error handling and recovery strategy as part of the overall solution. Error handling—When an error occurs (exceptions or error codes are returned to the caller), the caller manages error handling. For example, an error message displayed on the end user’s page or logged to a table requiring further action.Recovery—Changes aren’t committed to Salesforce until the caller receives a successful response. For example, the order status isn’t updated in the database until a response that indicates success is received. If necessary, the caller can retry the operation
                        </>}
                        />

                        <img src={img2} alt="error handling img" className='pt-3 pb-3 rounded-5' width={'80%'} />
                        <div className='border-bottom pb-5'></div>

                        {/* next content */}
                        <HeadingContent 
                        title={"Request & Reply/ Request & Response Pattern"}
                        content={<>
                          You use Salesforce to track leads, manage your pipeline, create opportunities, and capture order details that convert leads to customers. But, the Salesforce system doesn’t contain or process orders. After the order details are captured in Salesforce, the order is created in the remote system, which manages the order to conclusion.When you implement this pattern, Salesforce calls the remote system to create the order and then waits for successful completion. If successful, the remote system synchronously replies with the order status and order number. As part of the same transaction, Salesforce updates the order number and status internally. The order number is used as a foreign key for subsequent updates to the remote system.
                        </>}/>
                        <div>
                        </div>

                        {/* img and content */}
                       <div>
                         <img src={img3} alt="request and reply img" className='pt-3 pb-3 rounded-3'
                        //   style={{width:"40rem" ,height:'21rem'}}
                        width={'100%'}
                          />
                         <p className='custom-p'>The browser (via a client-side controller in the case of a Lightning component) performs an HTTP POST that in turn performs an action on the corresponding Apex controller</p>
                         <p className='custom-p'>An action is initiated on the Visualforce or Lightning page (for example, a button click).</p>
                         <p className='custom-p'>The controller invokes the actual call to the remote web service.</p>
                         <p className='custom-p'>The response from the remote system is returned to the Apex controller. The controller processes the response, updates data in Salesforce as required, and re-renders the page</p>
                       </div>
                    
                        <div className='border-bottom pb-3'></div>

                        <AccordionDataSection/>

                    </div>

                    {/* sidebar */}
                    <div className="col-lg-4 sidebar">
                          {/* need to create different componets with useState */}
                          <IntegrationFrameworkSidebar/>
                    </div>

                          {/* code section */}
                         <CodeSection/>

                         {/* form section */}
                         <BlogFormSection/>

                         {/* last section */}
                         <BlogSection/>


                </div>
            </div>
        </>
    )
}

export default IntegrationFrameworkBlog_FirstSection;