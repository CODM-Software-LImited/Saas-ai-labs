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

          <h2 className='h1 ds-3 my-3 aos-init aos-animate Heading3'>Explore Our Services</h2> 
          <p className='ourServicepara' data-aos="fade-zoom-in" data-aos-delay="100" class="aos-init aos-animate">We specialise in Salesforce implementation, Agentforce and AI development, integration, high-performance software engineering and support after go-live.</p>
        </div>

        {/* services Container */}
        <div className='row mt-6'>

         <div className='col-lg-4 py-5'>
            <OurServiceCard linkHref={'/ItServices/crm-development'} title={'Salesforce CRM'} description={'We implement and customise Salesforce Sales Cloud, Service Cloud and Experience Cloud around the way your teams work: discovery and design, configuration, custom development, data migration, integration, training and support after go-live. Our certified consultants and architects build security and best practice into every delivery.'} imageSrc={icon1} imageAlt={'Salesforce CRM implementation'} />
            <OurServiceCard linkHref={'/ItServices/building-llm'} title={'Building LLM Agents'} description={'We build Agentforce agents and custom AI assistants on top of your own Salesforce and business data. They answer questions, take action and surface real-time insight, with access controls and security designed in from day one. We take ideas from a small prototype to a pilot with real users, then into everyday work.'} imageSrc={icon4} imageAlt={'Agentforce and LLM agent development'} />
         </div>

         <div className='col-lg-4'>
          <OurServiceCard linkHref={'/ItServices/dotnet-application-development'} title={'.NET Web Application'} description={'We design and build secure, scalable .NET web and enterprise applications in C#, and connect them to Salesforce and your other systems through reliable APIs. Our team covers architecture, development, testing, deployment and ongoing support.'} imageSrc={icon2} imageAlt={'.NET web application development'} />
           <OurServiceCard linkHref={'/ItServices/data-integration'} title={'Data Integration / Migration'} description={'We move data into Salesforce safely and keep your systems in sync: data audits and cleansing, mapping, migration with accuracy checks, and ongoing integrations between Salesforce, ERP, finance and legacy platforms, with minimal disruption to your teams.'} imageSrc={icon5} imageAlt={'Data integration and migration'} />
         </div>

           <div className='col-lg-4 py-5'>
            <OurServiceCard linkHref={'/ItServices/react-application-development'} title={'React Web Application'} description={'We build fast, accessible React web applications and customer portals that connect to Salesforce and your APIs, from first design through to launch and ongoing support.'} imageSrc={icon3} imageAlt={'React web application development'} />
            <OurServiceCard linkHref={'/ItServices/deployment-support'} title={'Deployment & Technical Support'} description={'After go-live we keep Salesforce and your applications stable: environment set-up, release management, monitoring, fixes and enhancements, plus admin cover and user help by phone, email or remote session.'} imageSrc={icon6} imageAlt={'Deployment and technical support'}/>
           </div>

        </div>

      </div>
    </>
  )
}
export default OurService;