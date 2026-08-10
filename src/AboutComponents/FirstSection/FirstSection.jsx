import './FirstSection.css';
import DotBtn from "../../utils/Dotbtn/Dotbtn";
import about from '../../assets/imgs/cta-15/About.png';
import icon2 from '../../assets/imgs/features-2/bg-img-favicon.png';

import cyberEssentialsimg from '../../assets/imgs/cta-15/cyber-essentials-logo.png';
import gearsetlogo from '../../assets/imgs/cta-15/gearset-logo.png';
import googlecloudlogo from '../../assets/imgs/cta-15/googlecloud-logo.png';
import salesforcelogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import isologo from '../../assets/imgs/cta-15/isologo.png';

const FirstSection = () => {
    return (
        
        <div className='aboutContainerbg p-md-5 p-1'>
            <div className="about_first_section container position-relative">
                <div>

                    {/* <div className='d-lg-flex gap-5 justify-content-center align-items-center'> */}
                    <div className='d-flex flex-column flex-lg-row gap-5 justify-content-center align-items-center'>
                        {/* <div className='col-lg-4 col-sm-12 col-md-5 img-center d-flex justify-content-center align-items-center'> */}
                        <div className='col-lg-4 col-sm-12 text-center d-flex justify-content-center align-items-center'>
                            <img src={about} className='rounded-5 col-lg-12 paddingCustom' alt="" width={"100%"}/>
                        </div>

                        <div className='aboutFirstSection mt-3'>
                            <div className='z-0 rotating-img position-relative'>
                                <img className="rotationdiv" src={icon2} alt="background decoration"/>
                            </div>

                            <div className="pb-3 d-flex justify-content-center justify-content-md-start pt-lg-5">
                                <DotBtn text="ABOUT US" />
                            </div>

                            <p className='text-center text-md-start'> CODM Software Limited, incorporated December 7, 2023, is a rapidly expanding technology consulting and software development company headquartered in London with offices in Birmingham, United Kingdom. We specialize in delivering comprehensive, enterprise scale Salesforce CRM solutions combined with cutting edge custom development and AI powered technologies.</p>

                            <p className='text-center text-md-start'>With a focus on quality, innovation, and measurable business impact, we help organizations across diverse industries Financial Services, Healthcare, Manufacturing, Education, Retail, and Technology transform their operations, enhance customer experiences, and accelerate growth through intelligent automation and strategic technology implementation.</p>

                            <p className='text-center text-md-start'>Our comprehensive service portfolio spans the entire Salesforce ecosystem (Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, Data Cloud, Commerce Cloud, CPQ, Agentforce), combined with expertise in modern application development (.NET, Python, React.js), AI and Machine Learning solutions, data integration and migration, and technical support services.</p>

                            <div className='gap-md-3 d-flex align-items-center aboutLogoContainer'>
                                <img src={cyberEssentialsimg} alt="" width={"10%"}/>
                                <img src={salesforcelogo} alt="" width={"20%"}/>
                                <img src={gearsetlogo} alt="" width={"15%"}/>
                                <img src={isologo} alt="iso logo" width={"18%"}/>
                                <img src={googlecloudlogo} alt="" width={"18%"}/>  
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};
export default FirstSection;