import DotBtn from '../../utils/Dotbtn/Dotbtn';
import './OurService.css';
import OurServiceCard from './OurServiceCard.jsx';
// imgs
import icon1 from "../../assets/imgs/service-1/icon-1.svg";
import icon2 from '../../assets/imgs/service-1/icon-3.svg';
import icon3 from '../../assets/imgs/service-1/icon-5.svg';
import icon4 from '../../assets/imgs/service-1/icon-2.svg';
import icon5 from '../../assets/imgs/service-1/icon-4.svg';
import icon6 from '../../assets/imgs/service-1/icon-6.svg';

// background img 
import imgBg from "../../assets/imgs/service-1/img-bg.png";

function OurService() {
  return (
    <>
      <div className='ourService_container container position-relative'  style={{
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    zIndex: 0,
  }}>
        {/* content and heading */}
        <div className='text-center'>
          <div className='d-flex justify-content-center pt-5'>
             <DotBtn text='What we offer'/>
          </div>

          <h1 className='ds-3 my-3 aos-init aos-animate Heading3'>Explore Our Services</h1> 
          <p className='ourServicepara' data-aos="fade-zoom-in" data-aos-delay="100" class="aos-init aos-animate">We specialize in AI powered automation, AI development, high performance software engineering and tailored tech stacks.</p>
        </div>

        {/* services Container */}
        <div className='row mt-6'>

         <div className='col-lg-4 py-5'>
            <OurServiceCard linkHref={'/ItServices/crm-development'} title={'Salesforce CRM'} description={'Salesforce CRM (Customer Relationship Management) is a cloud basedplatform that helps businesses manage their sales, marketing,customer service, and support operations. It centralizes customerdata, automates workflows, and provides tools for tracking leads,opportunities, and customer interactions, enhancing overall customerexperience and business efficiency.'} imageSrc={icon1} imageAlt={'Salesforce CRM'} />
            <OurServiceCard linkHref={'/ItServices/building-llm'} title={'Building LLM Agents'} description={'Creating a Large Language Model involves training a neural network on vast amounts of text data to understand and generate human like language. It starts with collecting high quality datasets, followed by tokenizing the text into understandable units. The model then learns patterns, grammar, context, and meaning through deep learning techniques using powerful hardware like GPUs or TPUs. Once trained, the LLM can perform tasks like answering questions, writing code, summarizing content, and much more transforming how we interact with technology'} imageSrc={icon4} imageAlt={'building llm agents'} />
         </div>

         <div className='col-lg-4'>
          <OurServiceCard linkHref={'/ItServices/dotnet-application-development'} title={'.NET Web Application'} description={'A .NET web application is a software program developed using Microsoft’s .NET framework. It supports multiple languages like C# and VB.NET and is used to build a wide range of applications from web and desktop apps to mobile and cloud based solutions. The framework provides a large library, runtime environment, and tools for secure, scalable, and high performance development'} imageSrc={icon2} imageAlt={'.NETWebApplication'} />
           <OurServiceCard linkHref={'/ItServices/api-integration'} title={'Data Integration / Migration'} description={'Data Integration involves combining data from different sources into a unified view for better analysis and decision making.Data Migration is the process of moving data from one system, format, or storage to another commonly done during system upgrades, cloud adoption, or database changes ensuring data accuracy, consistency, and minimal downtime.'} imageSrc={icon5} imageAlt={'Data Integration'} />
         </div>

           <div className='col-lg-4 py-5'>
            <OurServiceCard linkHref={'/ItServices/react-application-development'} title={'React Web Application'} description={'React Web Application refers to embedding or combining React, a popular JavaScript library for building user interfaces, into existing applications or with other technologies (like APIs, backends, or third party libraries). It allows for creating dynamic, reusable components and enhancing the interactivity of web applications with efficient UI updates and data flow'} imageSrc={icon3} imageAlt={'.reactpage'} />
            <OurServiceCard linkHref={'/ItServices/deployment-support'} title={'Deployment & Technical Support'} description={'Technical support involves assisting users in resolving hardware, software, or system related issues. It includes troubleshooting problems, providing guidance on using technology, performing system maintenance, and ensuring smooth IT operations. Support can be delivered via phone, chat, email, or remote access, and is essential for maintaining productivity and minimizing downtime.'} imageSrc={icon6} imageAlt={'Technical Support'}/>
           </div>

        </div>

      </div>
    </>
  )
}
export default OurService;