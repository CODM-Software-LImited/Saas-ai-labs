import img1 from '../../../assets/imgs/services-details-2/Education-Cloud/img-1.webp';
import checkImg from '../../../assets/imgs/services-details/check.svg';
import img2 from '../../..//assets/imgs/services-details-2/Education-Cloud/img-2.png';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
// icons
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import "./S_secondSection.css";
import S_thirdSection from '../S_thirdSection/S_thirdSection';
import S_rightContainer from '../S_rightContainer/S_rightContainer';

import img3 from '../../../assets/imgs/services-details-2/Education-Cloud/img-4.png';
import ServiceSidebar from '../../ServiceSidebar/ServiceSidebar';

function S_secondSection() {
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
              <h4 className="my-3">Salesforce Education Cloud Services</h4>
              <p className="mb-0">Salesforce Education Cloud is a unified platform designed
                specifically for educational institutions to manage the entire
                student lifecycle—from recruitment and admissions to student success, alumni engagement, and beyond.{" "}
                <span className="text-900 fw-bold">
                  Codm's Salesforce Education Cloud services
                </span>{" "}
                Built on the robust Salesforce platform, Education Cloud enables
                institutions to deliver connected and personalized experiences
                across every touchpoint in a student's journey.
              </p>

              {/* Phase items */}
              <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                {/* First Column */}
                <ul className="list-unstyled phase-items mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" className='d-flex justify-content-center'/>
                    <span className="ms-2 text-900 fw-medium fs-6">Recruitment & Admissions</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Student Success Hub</span>
                  </li>
                </ul>

                {/* Second Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Advising & Engagement</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Alumni & Advancement</span>
                  </li>
                </ul>

                {/* Third Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Analytics and Reporting</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Integration with SIS and LMS</span>
                  </li>
                </ul>
              </div>


              <h4 className="pt-4 border-top mb-3 mt-5">What is Salesforce Education Cloud?</h4>
              <p className='mb-4'>Salesforce Education Cloud is a unified platform designed specifically for educational institutions to manage the entire student lifecycle from recruitment and admissions to student success, alumni engagement, and beyond. Built on the robust Salesforce platform, Education Cloud enables institutions to deliver connected and personalized experiences across every touchpoint in a student's journey .Whether you're school, college, or global university, Education Cloud helps you stay ahead by integrating data, automating workflows, and enhancing engagement at scale.</p>

              {/* content */}

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
                      <h4 className='font-20'>Recruitment & Admissions</h4>
                      <p>
                        Track leads, automate outreach, and streamline application
                        processes with personalized student journeys.
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
                      <h4 className='font-20'>Student Success Hub</h4>
                      <p>
                        Manage student support cases, set goals, and track progress
                        with real-time intervention tools.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex pt-3">
                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                      <div className="S_secondLineImg">
                        <img src={icon3} alt="Codm" />
                        <span className="customLine"></span>
                      </div>
                    </div>
                    <div className="ps-5">
                      <h4 className='font-20'>Advising & Engagement</h4>
                      <p>
                        Coordinate academic advising and student support across
                        departments to improve outcomes.
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
              <h4 className="mt-3 pt-3 border-top mb-3">Why Businesses Use Salesforce Education Cloud</h4>
              <p className="mb-3">
                Salesforce Education Cloud redefines how institutions engage with students,
                faculty, and alumni. By consolidating operations, automating processes, and
                enhancing communication, it enables institutions to focus on what matters most
                student success and long term impact.
              </p>


              <p className="fw-bold text-900">
                Holistic Student Management:{" "}
                <span className="fw-medium text-600">
                  Education Cloud creates a 360° view of every student, consolidating data
                  across recruitment, enrollment, academics, support, and advancement in one
                  place.
                </span>
              </p>

              <p className="fw-bold text-900">
                Improved Retention & Graduation Rates:{" "}
                <span className="fw-medium text-600">
                  Use AI driven insights to identify at risk students early, provide timely
                  support, and guide them toward successful outcomes.
                </span>
              </p>

              <p className="fw-bold text-900">
                Streamlined Administration:{" "}
                <span className="fw-medium text-600">
                  Automate communication, reminders, and case handling to free up time for
                  strategic initiatives that support institutional goals.
                </span>
              </p>

              <p className="fw-bold text-900">
                Personalized Engagement:{" "}
                <span className="fw-medium text-600">
                  Send relevant, timely messages via email, SMS, and portals tailored to
                  students’ interests, performance, and history.
                </span>
              </p>

              <p className="fw-bold text-900">
                Better Alumni Relations:{" "}
                <span className="fw-medium text-600">
                  Enhance donor engagement, plan events, and manage campaigns to maximize
                  alumni contributions and long term value.
                </span>
              </p>


              {/* Accordion */}
             <S_thirdSection/>




           
              {/* main div end */}
            </div>


               {/* right container */}
              {/* sidebar will come here */}
           <div className="col-lg-4 sidebar">

        {/* <S_rightContainer/> */}
        <ServiceSidebar/>
         
         
         <div className="zoom-img mt-5 rounded-4">
                    <img src={img3} className="" width={'100%'}/>
          </div>


          </div>
                      
            
          </div>


          

        </div>

      </section>


    </>
  )
}

export default S_secondSection;
