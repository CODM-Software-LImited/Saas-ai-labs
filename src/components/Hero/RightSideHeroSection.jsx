import './RightSideHeroSection.css';
import AnimatedPill from './AnimatedPill';
import bgImg from '../../assets/imgs/hero-1/background.png';
import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";

function RightSideHeroSection() {
    return (
        <>
            <div className='rightsidePillSection'>
              <div className='animatedPillsContainer'>
                <div className='animatedPills1'>
                    <AnimatedPill text="CRM"/>
                </div>
                <div className='animatedPills2'>
                     <AnimatedPill text="LLM"/>
                </div>
                 <div className='animatedPills3'> 
                     <AnimatedPill text="EINSTEIN"/>
                </div>
                  <div className='animatedPills4'> 
                     <AnimatedPill text="AI"/>
                </div>
                <div className='animatedPills5'> 
                     <AnimatedPill text="AgentForce"/>
                </div>
                <div className='animatedPills6'> 
                     <AnimatedPill text="Salesforce"/>
                </div>
              </div>

                <div className="robot_Container d-flex justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "360px",
                    }}>
                    <img
                        src={robotImg}
                        alt="Robot"
                        className="hero-img img-fluid"
                        style={{ maxWidth: "400px" }}
                    />
                </div>
            </div>
        </>
    )
}

export default RightSideHeroSection;