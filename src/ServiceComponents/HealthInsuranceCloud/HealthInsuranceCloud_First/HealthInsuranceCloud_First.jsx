import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
// import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import img1 from '../../../assets/imgs/services-details-2/Health&InsuranceCloud/Healthcare-1.webp';
import img2 from '../../../assets/imgs/services-details-2/Health&InsuranceCloud/Healthcare-specific-role.webp';
import img3 from '../../../assets/imgs/services-details-2/Health&InsuranceCloud/Agentforce-Industries-Health.webp';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import BlogFormSection from "../../../BlogsComponents/ui/BlogFormSection/BlogFormSection";
import BlogSection from "../../../components/BlogSection/BlogSection";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";

function HealthInsuranceCloud_First() {

    const items = [
        {
            icon: icon1,
            title: "Healthcare-specific Roles",
            description:
                "Industry expertise on the unique jobs-to-be-done across health organizations."
        },
        {
            icon: icon2,
            title: "Deep Industry Data",
            description:
                "Unstructured and structured healthcare data, across sources, harmonized for the right context and used through industry data models."
        },
        {
            icon: icon1,
            title: "Seamless Integration with Healthcare Systems",
            description:
                "Easily integrates with healthcare systems and connects disparate health data for comprehensive patient and member insights."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                        title="What is Health Cloud & Insurance Cloud ?"
                        />

                        <img
                            className="rounded-3 border"
                            src={img1}
                            alt="Codm"
                            width={'100%'}
                        />
                        <HeadingContent
                            title=""
                            content={
                                <>
                                    <p>
                                        Salesforce Health Cloud & Insurance Cloud are industry specific Salesforce platforms designed to help healthcare providers, payers, and insurance companies manage data, improve customer experiences, and streamline operations. Salesforce Health Cloud, Salesforce Health Cloud is built on the world's 1th AI CRM and powered by Agentforce. It serves as a trusted, connected platform for healthcare, bringing together clinical and nonclinical data in one place with actionable intelligence. Health Cloud helps healthcare organizations collaborate efficiently, deliver personalized care, and automate health operations.
                                    </p>
                                </>
                            }
                        />


                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h4>Agentforce for Healthcare cloud</h4>
                            <p>We can use Agentforce with Salesforce Health & Insurance Cloud to build AI agents that automate tasks like patient intake, scheduling, follow-ups, claims processing, and provider matching, integrating directly.

                            </p>
                        </div>

                        {/* filp img and content */}

                        <div className="col-8">
                            <FlipImgwithContent items={items} />

                        </div>


                        {/* next section */}

                        {/* next section  */}

                        <div className="implementation-section pt-4">
                            <h4 className="mb-4">How Salesforce Health & Insurance Cloud Works</h4>

                            <div className="mb-3">
                                <h5>
                                    Salesforce Health & Insurance Cloud unifies patient, member, and policy
                                    data into a single, intelligent platform. It enables organizations to:
                                </h5>
                                <ul>
                                    <li>Centralize patient and member profiles across care and policy journeys</li>
                                    <li>Automate care coordination, claims, and policy servicing workflows</li>
                                    <li>Enable secure data sharing across providers, payers, and care teams</li>
                                    <li>Deliver personalized, compliant engagement at every touchpoint</li>
                                </ul>
                                <p>
                                    With low-code tools and industry-specific data models, healthcare and
                                    insurance teams can configure workflows quickly without heavy IT
                                    dependency.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-black">Use Cases & Measurable Impact</h4>
                                <p>Healthcare and insurance organizations are already seeing real-world value:</p>

                                <ul>
                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.humana.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Humana : </strong>
                                            </a>
                                            improving member engagement and personalized care coordination
                                            with a connected platform powered by Salesforce Health Cloud.
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://bsmhealth.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Bon Secours Mercy Health : </strong>
                                            </a>
                                            leveraged Health Cloud to unify patient access and deliver coordinated
                                            patient experiences across digital channels and care teams. 
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            <a
                                                className="text-decoration-none"
                                                href="https://www.hellomolina.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <strong className="text-black">Molina Healthcare : </strong>
                                            </a>
                                            streamlines member services and claims workflows using Salesforce
                                            solutions for improved operational efficiency.
                                        </span>
                                    </li>
                                </ul>

                                <h5>Key Benefits</h5>
                                <ul>
                                    <li>
                                        <span>
                                            <strong>Unified Data Foundation:</strong> Connects clinical, claims,
                                            policy, and engagement data into a single source of truth.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Personalized Care & Member Journeys:</strong> Tailors
                                            interactions based on health history, coverage, and preferences.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Built-In Compliance & Security:</strong> Designed to support
                                            HIPAA and regulatory data privacy requirements.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Operational Efficiency:</strong> Automates manual processes
                                            across care management, claims, and policy servicing.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Improved Outcomes & Satisfaction:</strong> Enables proactive
                                            care, faster resolutions, and stronger trust with patients and members.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* next section */}
                        <div className="p-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/buQ48j8Zr94?si=PNNv3ezPItGRex-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        {/* next section */}
                        <div className="pt-3">
                            <h4 className="pb-4">Advantages of Healthcare & Insurance Cloud</h4>
                            <ul>
                                <li>
                                    <span>
                                        <strong>Better Patient Care:</strong>Real-time data access for providers, personalized treatment plans, easier care coordination, and support for telemedicine and wearables..
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Enhanced Data & Security:</strong>Secure storage, advanced encryption, and disaster recovery for sensitive patient data.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Streamlined Onboarding:</strong> Faster underwriting, claims management, and risk assessment through automated processes and data.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Scalability:</strong> Easily handle growth and fluctuating business demands.
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <strong>Improved Customer Experience:</strong>Faster policy issuance, personalized offerings, and better service through accessible data.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Summary div*/}
                        <div>
                            <h4 class="mt-3 pt-3 border-top mb-3">Summary</h4>
                            <p class="fw-mediu text-gray">At<b> CODM, </b>we help healthcare organizations and insurers unlock the full potential of Salesforce Health Cloud & Insurance Cloud by unifying data, automating care and policy workflows, and ensuring compliance with industry regulations. Our expertise empowers organizations to improve outcomes, enhance member and patient engagement, and deliver smarter, more personalized healthcare and insurance experiences.</p>
                        </div>

                        {/* next content section */}

                        {/* 
                        <div className='border-bottom'></div> */}

                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        <ServiceSidebar/>
                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img2} className="" width={'100%'} />
                        </div>

                         <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img3} className="" width={'100%'} />
                        </div>
                    </div>


                    {/* code section */}
                    {/* <CodeSection/> */}

                    {/* form section */}
              
                    {/* last section */}

                </div>
            
            </div>
        </>
    )
}

export default HealthInsuranceCloud_First;