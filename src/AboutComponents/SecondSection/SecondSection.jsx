import img1 from '../../assets/imgs/About/Our mission.png';
import img2 from '../../assets/imgs/About/vision.png';
import './SecondSection.css';

function SecondSection() {
  return (
    <div className='aboutContainer2 p-1 p-md-5'>
      <div className='container'>
        <h3 className='text-center aboutHeading mb-md-5'>Our Mission & Vision</h3>
        <div className='d-lg-flex d-inline'>  
          <div className='col-lg-6 pt-4 text-center text-md-start'>
            <h3 className='pb-md-4'><b>Our Mission</b></h3>
            <p>
              To empower businesses globally with transformative Salesforce solutions that drive efficiency, innovation, and sustainable growth. We are committed to delivering exceptional value through our expertise in CRM implementation, customization, and strategic consulting.

              Our focus extends beyond technology implementation we prioritize training and continuous support to ensure your team leverages the full potential of Salesforce, creating lasting impact and measurable ROI for your organization.
            </p>
          </div>
          <div>
            <img src={img1} alt="our mission" width={'100%'}/>
          </div>
        </div>

        {/* vision */}


        <div className='d-lg-flex d-inline gap-lg-3'>
          <div className=''>
            <img src={img2} alt="our mission" width={'100%'}/>
          </div>
          <div className='col-lg-6 pt-4 text-center text-md-start'>
            <h3 className='pb-4'><b>Our Vision</b></h3>
            <p>
             To be the most trusted and innovative Salesforce consulting partner globally, recognized for our unwavering commitment to client success and technological excellence. We envision a future where businesses of all sizes can seamlessly harness the power of cloud technology to transform their operations and customer relationships. 
            </p>
          </div>
        </div>

      </div>



      {/* next div
       */}
    </div>
  )
}

export default SecondSection;