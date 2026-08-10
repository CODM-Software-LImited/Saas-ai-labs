
import HeadingContent from "../../../BlogsComponents/ui/HeadingContent/HeadingContent";
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import img1 from '../../../assets/imgs/services-details-2/DeploymentSupport/googleCloud.png';
import img2 from '../../../assets/imgs/services-details-2/DeploymentSupport/Azure.png';
import img3 from '../../../assets/imgs/services-details-2/DeploymentSupport/gearset.png';
import img4 from '../../../assets/imgs/services-details-2/DeploymentSupport/AzureFeatures.png';
import img5 from '../../../assets/imgs/services-details-2/DeploymentSupport/Bitbucket.png';
import img6 from '../../../assets/imgs/services-details-2/DeploymentSupport/github.png';
import FlipImgwithContent from "../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent";
import ServiceSidebar from "../../ServiceSidebar/ServiceSidebar";
import S_rightSidebarDataDevelopment from "../../ServiceSidebar/S_rightSidebarDataDevelopment";
import HeaderWithBg from "../../../utils/HeaderWithBg/HeaderWithBg";

function DeploymentSupport_First() {

    const items = [
        {
            icon: icon1,
            title: "Unified Platform",
            description:
                "Combines AI, CRM, and automation tools to centralize customer data, enabling accurate and consistent service."
        },
        {
            icon: icon2,
            title: "Autonomous AI Agents",
            description:
                "These agents handle customer inquiries, resolve issues, and provide personalized responses "
        }
        // ,
        // {
        //     icon: icon1,
        //     title: "Scalability",
        //     description:
        //         "Supports high volumes of customer interactions"
        // }
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">

                        <HeadingContent
                            title="Deployment & Release Management Support"
                            content={
                                <>
                                    <p>
                                        We deliver reliable, secure, and highly scalable deployment solutions across both cloud infrastructure and Salesforce platforms, carefully leveraging modern CI/CD best practices to streamline and automate the release process. By integrating robust version control, automated testing, and continuous integration and delivery pipelines, we help organizations accelerate deployment cycles while maintaining stability, security, and compliance. Our approach minimizes operational risk, reduces manual intervention, and ensures consistent, high-quality releases that support business agility and long-term growth.
                                    </p>
                                </>
                            }
                        />

                        {/* <div className='border-bottom pb-3'></div> */}

                        <div className="pt-4">
                            <h3>Google Cloud Platform (GCP)</h3>
                            <p>Google Cloud Platform (GCP) is a cloud computing service by Google that helps businesses, developers, and enterprises run applications, store data, and manage workloads on a secure, scalable, and high-performance infrastructure. Whether you're building a website, handling large datasets, or running AI models, GCP provides the tools and flexibility to do it efficiently.
                            </p>

                            <h5>How to Interact with Google Cloud Services</h5>
                            <div>
                                <ul>
                                    <li className="pb-3"> <strong className="text-black"> Google Cloud Console :</strong>
                                        The Google Cloud Console is a web based, graphical interface that allows you to manage and configure your GCP projects and resources.
                                    </li>
                                    <li className="pb-3"> <strong className="text-black"> Command-Line Interface (CLI) :</strong>
                                        A Command-Line Interface is a text based user interface used to interact with a computer's operating system or software by typing commands into a terminal or console window
                                    </li>
                                    <li className="pb-3"><strong className="text-black"> Client Libraries</strong>
                                        Google provides official client libraries for multiple programming languages.That include Python, Java, Node. js, Go, C# etc. It is also good for Application level integration , Backend services and DevOps workflows.
                                    </li>
                                    <li className="pb-3"><strong className="text-black">Infrastructure as Code (IaC)</strong>
                                        The Iac a DevOps practice that manages and provisions IT infrastructure like servers, networks, databases using configuration files and code.
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <img
                                    className="rounded-3 border pt-1"
                                    src={img1}
                                    alt="Codm"
                                    width={'70%'}
                                />
                            </div>

                        </div>
                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h3>Azure Devpos</h3>
                            <p>
                                Azure DevOps is a cloud based platform that provides integrated tools for software development teams. It includes everything you need to plan work, collaborate on code, build applications, test functionality, and deploy to production.  It is a vast collection of cloud computing services like saas ,laas paas for infrastructure, data, AI, networking.
                            </p>

                            <p>It includes:</p>
                            <ul>
                                <li className="pb-3"><strong className="text-black">Azure Repository : </strong>
                                    Azure Repos is a set of version control tools that you can use to manage your code. Version control systems are software that track changes you make in your code. Whether your project is large or small, using version control as soon as possible is a good idea. Azure Repos is like GitHub, but tightly integrated with Azure DevOps tools. It is Works well with Visual Studio, VS Code, and Git CLI.
                                </li>
                                <li className="pb-3"><strong className="text-black">Azure Pipelines : </strong>
                                    Azure Pipelines provides a quick, easy, and safe way to automate building your projects with consistent, high-quality, readily available code. It  is a CI/CD (Continuous Integration and Continuous Delivery/Deployment) service in Azure DevOps.
                                </li>
                                <li className="pb-3"><strong className="text-black">Azure Boards : </strong>
                                    Azure Boards is a web based service designed for teams to plan, track, and discuss work throughout the development lifecycle. It supports agile methodologies and offers a customizable platform for managing work items, facilitating collaboration across teams, and streamlining workflows.
                                </li>
                                <li className="pb-3"><strong className="text-black">Azure Boards : </strong>
                                    Azure Boards is a work tracking and project management tool within Azure DevOps that helps teams plan, track, and manage their work using agile methodologies. It allows teams to create and manage work items such as epics, features, user stories, tasks, and bugs, providing full visibility into the progress of a project.
                                </li>
                                <li className="pb-3"><strong className="text-black">Azure Test Plans : </strong>
                                    Azure Test Plans is a test management tool in Azure DevOps. This browser based test management solution supports planned manual testing, user acceptance testing, exploratory testing, and stakeholder feedback.
                                </li>
                            </ul>

                            <img
                                className="rounded-3 border pt-1"
                                src={img2}
                                alt="Codm"
                                width={'100%'}
                            />
                        </div>
                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h3>Gearset</h3>
                            <p> Gearset is a DevOps and deployment tool for Salesforce. It helps Salesforce teams compare, deploy, back up, and manage changes between Salesforce environments. Gearset makes it much easier to move Salesforce changes from one environment to another. It help to track changes made by developers.</p>
                            <h5 className="pb-3">key features:</h5>
                            <ul>
                                <li className="pb-3"><strong className="text-black">Org to org and Git comparisons : </strong>
                                    Gearset allows you to compare two Salesforce environments or a Git repository with an org to clearly see what has changed, helping teams understand differences before deployment.
                                </li>

                                <li className="pb-3"><strong className="text-black">Automated metadata and data deployments : </strong>
                                    It automates the deployment of Salesforce components such as objects, Apex classes, flows, and data, while automatically resolving dependencies to reduce deployment failures.
                                </li>

                                <li className="pb-3"><strong className="text-black">CI/CD pipelines : </strong>
                                    Gearset enables continuous integration and continuous deployment for Salesforce by automating build, test, and release processes across multiple environments.
                                </li>

                                <li className="pb-3"><strong className="text-black">Backup, restore, and rollback : </strong>
                                    Gearset regularly backs up Salesforce data and metadata and allows quick restoration or rollback if something goes wrong, protecting production environments.
                                </li>
                            </ul>
                            <img
                                className="rounded-3 border pt-1"
                                src={img3}
                                alt="Codm"
                                width={'100%'}

                            />
                        </div>

                        <div className='border-bottom pb-3'></div>

                        <div className="pt-4">
                            <h3>GitHub</h3>
                            <p>
                                GitHub is a source control and DevOps platform widely used for managing Salesforce
                                development and deployments. It enables teams to collaborate on code, track changes,
                                and automate Salesforce deployments using CI/CD pipelines, ensuring controlled,
                                traceable, and reliable releases.
                            </p>

                            <h5 className="pb-3">Key features:</h5>
                            <ul>
                                <li className="pb-3">
                                    <strong className="text-black">Source control & version management: </strong>
                                    GitHub provides centralized version control for Salesforce metadata and source-driven
                                    development, allowing teams to track every change, maintain history, and collaborate
                                    efficiently.
                                </li>

                                <li className="pb-3">
                                    <strong className="text-black">Branching & release strategies: </strong>
                                    Supports feature branches, pull requests, and release branches to manage parallel
                                    development and ensure controlled promotion of changes across environments.
                                </li>

                                <li className="pb-3">
                                    <strong className="text-black">GitHub Actions (CI/CD automation): </strong>
                                    Automates Salesforce build, validation, testing, and deployment using GitHub Actions,
                                    enabling continuous integration and continuous delivery across sandboxes and
                                    production.
                                </li>

                                <li className="pb-3">
                                    <strong className="text-black">Pull request reviews & approvals: </strong>
                                    Enables code reviews, automated checks, and approval workflows to improve code
                                    quality and enforce deployment governance.
                                </li>

                                <li className="pb-3">
                                    <strong className="text-black">Security & compliance: </strong>
                                    Provides role based access control, secrets management, audit logs, and integration
                                    with security scanning tools to ensure secure Salesforce deployments.
                                </li>

                                <li className="pb-3">
                                    <strong className="text-black">Integration with Salesforce DX tools: </strong>
                                    Seamlessly integrates with Salesforce DX, Metadata API, and CLI tools to support
                                    modern Salesforce development and automated deployments.
                                </li>
                            </ul>

                            <img
                                className="rounded-3 border pt-1"
                                src={img6}
                                alt="GitHub CI/CD for Salesforce"
                                width={'100%'}
                            />
                        </div>


                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        <S_rightSidebarDataDevelopment />

                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img4} width={'100%'} />
                        </div>

                        <div className="pt-3">
                            <div className="ratio ratio-16x9 overflow-hidden rounded-3">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Cmit_xwT4H8?si=M-Gapw-ybl6rVP1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            </div>
                        </div>


                    </div>

                </div>

                <div className="pt-4 d-lg-flex">
                    <div className="col-lg-8">
                        <h3 className="">Bitbucket</h3>
                        <p>
                            BitBucket is more than just a repository hosting service, it is a complete DevOps solution. It allows developers to manage their source code repositories, collaborate with team members, and automate the software development lifecycle .It provide one place for your team to collaborate on code from concept to Cloud, build quality code through automated testing, and deploy code with confidence.
                        </p>
                        <h5 className="pb-3">key features:</h5>
                        <ul>
                            <li className="pb-3"><strong className="text-black">Code Review System : </strong>
                                Bitbucket has a super fast code review system that helps the developers and the reviewers to review the pull request in very less time.
                            </li>
                            <li className="pb-3"><strong className="text-black">Powerful JIRA Integration : </strong>
                                jira is one of the best tools to track bugs within the code. This tool can easily integrate Bitbucket and jira.
                            </li>
                            <li className="pb-3"><strong className="text-black">BitBucket Cloud & Server : </strong>
                                BitBucket provides two different services as per the need of the users. If your team size is small 1-5 then you can opt for Bitbucket cloud or you can opt for BitBucket Server for big teams.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="zoom-img mt-5 rounded-4 border">
                            <img src={img5} width={'100%'} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DeploymentSupport_First;