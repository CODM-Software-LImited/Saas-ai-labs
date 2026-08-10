
import img1 from '../../../assets/imgs/services-details-2/Revenue-Cloud/img-1.png';
import checkImg from '../../../assets/imgs/services-details/check.svg';
import img2 from '../../../assets/imgs/services-details-2/Revenue-Cloud/img-3.jpg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
// icons
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

import img3 from '../../../assets/imgs/services-details-2/Education-Cloud/img-4.png';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import SalesforceRevenueCloudAccordion from './SalesforceRevenueCloudAccordion/SalesforceRevenueCloudAccordion';
import SalesforceRevenueCloudSidebar from '../../BlogSidebar/SalesforceRevenueCloudSidebar';

function SalesforceRevenueCloud_first() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row pt-8">
                        {/* Main content */}
                        {/* left container  */}
                        <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
                            <img
                                className="rounded-3"
                                src={img1}
                                alt="Codm"
                                width={'100%'}
                            />

                            <HeadingContent
                                title="Salesforce CPQ to Revenue Cloud Advanced (RCA)"
                                content={
                                    <>
                                        <p>There is a strong buzz in the Trailblazer community right now Is CPQ dying? What's the future of CPQ now that Salesforce has launched Revenue Cloud Advanced (RCA)? Well, Salesforce CPQ is entering the 'End of Sale'(EOS) phase. Now, to clarify—EOS doesn't mean End-of-Life. It means Salesforce will no longer sell CPQ to new customers. At least, no official announcement regarding retirement has been made yet.<b className='text-black'>Revenue Cloud Advanced (RCA) </b> This shift didn't come out of the blue. The suspicion in the Salesforce ecosystem and partner community was growing strong as many had already picked up on the signs—no major updates in 4 years, and a clear focus on newer products like Revenue Cloud Advanced (RCA) the writing was on the wall Migrating from Salesforce CPQ to Salesforce Revenue Cloud (Revenue Cloud Advanced/RCA) requires a strategic, phased approach to minimize disruption and maximize long-term value. Below is a detailed breakdown of each step, synthesized from multiple sources.</p>
                                    </>
                                }
                            />

                            {/* Phase items */}
                            <PhaseItems items={[
                                ["Document Customizations", "Evaluate Data Health"],
                                ["Map Future Requirements to RCA Features", "Reconfigure Data Models"],
                                ["Redesign Pricing Logic", "Simplify Workflows"],
                            ]} />

                            <HeadingContent
                                title="What's new in Salesforce Revenue Cloud (RCA)?"
                                content={
                                    <>
                                        <p>Fully built on the core Salesforce platform, Revenue Cloud Advanced (RCA) is Salesforce's new and improved way to handle everything from quoting to payments, all in one place.What makes RCA different? For starters, it's more flexible and modern. It doesn't use the old-school managed package setup. With API-first approach, Revenue Cloud Advanced is more scalable and can handle a wide range of revenue models—whether you're selling one-time products, offering subscriptions, or charging based on usage. Everything runs from a single system that's easier to integrate with other tools and is ready to work alongside AI-powered agents like Agentforce across the entire sales process.</p>
                                    </>}
                            />

                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="d-flex">
                                        <div className="position-relative icon-shape icon-xxl rounded-3">
                                            <div className="S_secondLineImg">
                                                <img src={icon1} alt="Codm" />
                                                <span className="customLine"></span>
                                            </div>
                                        </div>
                                        <div className="ps-5">
                                            <h4 className='font-20'>Built Natively on Salesforce</h4>
                                            <p>
                                                RCA is fully native to the Salesforce platform, meaning it works seamlessly within the Salesforce ecosystem. This native architecture enables it to handle high transaction volumes, large and complex quotes and orders, and extensive rule-based configurations — all with better speed and performance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3">
                                        <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                            <div className="S_secondLineImg">
                                                <img src={icon2} alt="Codm" />
                                                <span className="customLine"></span>
                                            </div>
                                        </div>
                                        <div className="ps-5">
                                            <h4 className='font-20'>AI-Ready for Smarter Selling  </h4>
                                            <p>
                                                RCA is designed with an API-first mindset, making it modular and easy to integrate with other complex systems and business processes. This flexibility ensures RCA fits into your existing tech stack without heavy lifting, allowing smooth data flow and consistent user experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 mt-lg-0 mt-5">
                                    <img
                                        className="rounded-3"
                                        src={img2}
                                        width={'100%'}
                                        alt="Codm"
                                    />

                                </div>
                            </div>

                            {/* next div */}
                            <div className='border-bottom pb-3'></div>
                            <HeadingContent
                                title="Sticking with Salesforce CPQ or Moving to Revenue Cloud Advanced?"
                                content={
                                    <>
                                        <p>Salesforce CPQ isn't going anywhere just yet. It's still a solid tool, especially for small to mid-sized businesses with straightforward sales processes. If you've got a simple B2B sales flow and don't often need to make changes after the deal is signed, CPQ may still do the job just fine.
                                        But if you're looking for more flexibility, scalability, and advanced features, Revenue Cloud Advanced (RCA) is the way to go. It's built for the future, ready to handle complex sales processes, and integrates seamlessly with AI tools like Agentforce. Plus, it's designed to adapt to your business as it grows.</p>
                                    </>
                                }
                            />
                             <div className='border-bottom pb-3'></div>

                             {/* next section */}
                                <HeadingContent
                                title="Why RCA over CPQ?"
                                content={
                                    <>
                                    <p><b className='text-black'>End-to-End Automation:</b> RCA connects quoting, contracting, billing, and compliance in one seamless flow.</p>
                                    <p><b className='text-black'>AI-Driven Efficiency:</b>Predictive analytics and automation tools accelerate deal cycles and reduce errors.</p>
                                    <p><b className='text-black'>Built for Scale:</b> Supports complex pricing models, subscriptions, and usage-based billing natively.</p>
                                    <p><b className='text-black'>Connected Experience:</b>Natively integrates with Salesforce CRM, Slack, and MuleSoft for real-time collaboration.</p>
                                    </>
                                }
                                />
                                
                            {/* Accordion */}
                            <SalesforceRevenueCloudAccordion/>

                            {/* main div end */}
                        </div>


                        {/* right container */}
                        {/* sidebar will come here */}
                        <div className="col-lg-4 sidebar">
                          <SalesforceRevenueCloudSidebar/>
                        </div>

                    </div>




                </div>

            </section>


        </>
    )
}

export default SalesforceRevenueCloud_first;
