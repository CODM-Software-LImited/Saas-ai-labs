// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
import img1 from '../../../assets/imgs/services-details-2/Api/img-2.svg';
import img2 from '../../../assets/imgs/services-details-2/Api/IMG-3.svg';
import img3 from '../../../assets/imgs/services-details-2/Api/img-4.avif';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import ApiIntegrationAccordionData from '../ApiIntegrationAccordionData/ApiIntegrationAccordionData';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';

function ApiIntegration_Second() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row pt-1">
            {/* Main content */}
            {/* left container  */}

            <div className="col-lg-8 pt-1 ps-lg-4 mt-lg-0 mt-3 content pt-5">

              <img
                className="rounded-3"
                src={img1}
                alt="Codm"
                width={'100%'}
              />


              <h4 className="my-3">Unlock Industry-Specific Success with Salesforce Industries Cloud</h4>
              <p className="mb-0">In today's interconnected digital landscape, API (Application Programming Interface) integration stands as a cornerstone for businesses aiming to enhance efficiency, scalability, and innovation. By enabling disparate systems to communicate and share data seamlessly, API integration facilitates streamlined operations and improved user experiences across various sectors.
              </p>

              {/* Phase items */}
              <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                {/* First Column */}
                <ul className="list-unstyled phase-items mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Automates Workflows</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Enhances Data Accuracy</span>
                  </li>
                </ul>

                {/* Second Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Improves Customer Experience</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Enables Scalability</span>
                  </li>
                </ul>

                {/* Third Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Supports Real-Time Data Access</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Accelerates Time-to-Market</span>
                  </li>
                </ul>
              </div>


              {/*new */}

              <h4 className="mb-3 mt-1">What is API Integration?</h4>
              <p className='mb-4'>API integration refers to the process of connecting two or more applications or systems using Application Programming Interfaces (APIs) to enable them to communicate and share data seamlessly. This integration allows organizations to automate business processes, enhance data sharing, and improve overall efficiency by enabling different software applications to work together effectively.</p>

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
                      <h4 className='font-20'>Automates Workflows</h4>
                      <p>
                        Reduces manual tasks by enabling systems to communicate and perform functions automatically
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
                      <h4 className='font-20'>Enhances Data Accuracy</h4>
                      <p>
                        Ensures consistent and up-to-date information across all integrated platforms.
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
                      <h4 className='font-20'>Improves Customer Experience</h4>
                      <p>
                        Provides seamless interactions by connecting various customer-facing applications.
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
              <h4 className="mt-3 pt-3 border-top mb-3">API Integration Services</h4>
              <p className="mb-3">
               Embrace the future of business with Infinia's innovative services. Let us help you transform your organization and achieve unprecedented success. Contact us today to learn more about how we can support your journey towards innovation and excellence.
              </p>


              <p className="fw-bold text-900">
                Connectivity Across Industries:{" "}
                <span className="fw-medium text-600">
                  In today's interconnected digital landscape, API (Application Programming Interface) integration stands as a cornerstone for businesses aiming to enhance efficiency, scalability, and innovation. By enabling disparate systems to communicate and share data seamlessly, API integration facilitates streamlined operations and improved user experiences across various sectors.
                </span>
              </p>

              <p className="fw-bold text-900">
                Financial Services: Enhancing Customer Experience:{" "}
                <span className="fw-medium text-600">
                  Financial institutions leverage API integration to offer real-time banking services, personalized financial advice, and seamless transactions. For instance, banks utilize APIs to connect with fintech applications, enabling customers to manage accounts, investments, and payments through unified platforms.
                </span>
              </p>

              <p className="fw-bold text-900">
                Retail & E-commerce: Streamlining Operations:{" "}
                <span className="fw-medium text-600">
                 Retailers integrate APIs to synchronize inventory management, order processing, and customer relationship management systems. This integration ensures accurate stock levels, efficient order fulfillment, and personalized marketing campaigns, enhancing overall customer satisfaction.
                </span>
              </p>

               <p className="fw-bold text-900">
                Healthcare: Improving Patient Care:{" "}
                <span className="fw-medium text-600">
                Healthcare providers employ API integration to connect electronic health records (EHRs), laboratory systems, and insurance platforms. This connectivity facilitates real-time data sharing, accurate diagnostics, and streamlined billing processes, leading to improved patient outcomes.
                </span>
              </p>

               <p className="fw-bold text-900 mb-5">
                Travel & Hospitality: Enhancing Booking Experiences:{" "}
                <span className="fw-medium text-600">
               Travel agencies and hospitality businesses use APIs to aggregate data from airlines, hotels, and car rental services. This integration allows customers to access comprehensive travel options, real-time availability, and dynamic pricing, simplifying the booking process.
                </span>
              </p>

              <ApiIntegrationAccordionData/>

            </div>


            {/* right container */}

            <div className="col-lg-4 sidebar">

              <S_rightSidebarDataDevelopment/>

              <div className="zoom-img mt-5 rounded-4">
                <img src={img3} className="" width={'100%'} />
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default ApiIntegration_Second;