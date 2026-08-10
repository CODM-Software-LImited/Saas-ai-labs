import './FounderSection.css';
import founderImg from '../../../src/assets/vinodImg.jpg';
import DotBtn from '../../utils/Dotbtn/Dotbtn';


const FounderSection = () => {
  return (
    <div className="founder-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          {/* <div className="founderImg col-lg-5 text-center mb-4 mb-lg-0">
              <img className='founderImg' src={founderImg} alt="founderImg" width={'60%'}/>
        
          </div> */}

          {/* RIGHT CONTENT */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* <p className="tag">MEET THE FOUNDER</p> */}
             <div className="pb-3 d-flex justify-content-center justify-content-md-start pt-lg-5">
                  <DotBtn text="MEET THE FOUNDER" />
              </div>
            
            <h1 className="title">
              Driving Innovation Through Technology
            </h1>

            <p className="desc">
              With a passion for transforming businesses through intelligent
              technology solutions, our founder brings years of experience in
              Salesforce consulting, enterprise architecture, and AI-powered
              development. Their vision continues to guide CODM Software in
              delivering exceptional value and measurable impact for clients
              across the globe.
            </p>
          </div>

          <div className="founderImg col-lg-5 text-center mb-4 mb-lg-0">
              <img className='founderImg' src={founderImg} alt="founderImg" width={'60%'}/>
        
          </div>

        </div>
      </div>
     
    </div>

    
  );
};

export default FounderSection;