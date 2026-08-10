
// icons
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import icon3 from '../../../assets/imgs/services-details/icon-7.svg';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';

// imgs
// import img1 from '../../../assets/imgs/services-details-2/d.i-d.m/img-1.png';
import img2 from '../../../assets/imgs/services-details/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/Api/img-4.avif';

import checkImg from '../../../assets/imgs/services-details/check.svg';
import DataIntegrationAccodionData from '../DataIntegrationAccodionData/DataIntegrationAccodionData';
// import ApiIntegrationAccordionData from '../ApiIntegrationAccordionData/ApiIntegrationAccordionData';
import S_rightSidebarDataDevelopment from '../../ServiceSidebar/S_rightSidebarDataDevelopment';

function DataIntegration_Second() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row pt-1">
            {/* Main content */}
            {/* left container  */}

            <div className="col-lg-8 pt-1 ps-lg-4 mt-lg-0 mt-3 content pt-5">

              {/* <img
                className="rounded-3"
                src={img1}
                alt="Codm"
                width={'100%'}
              /> */}


              <h4 className="my-3">Unlock Industry-Specific Success with Salesforce Industries Cloud</h4>
              <p className="mb-0">In today's interconnected digital landscape, API (Application Programming Interface) integration stands as a cornerstone for businesses aiming to enhance efficiency, scalability, and innovation. By enabling disparate systems to communicate and share data seamlessly, API integration facilitates streamlined operations and improved user experiences across various sectors.
              </p>

              {/* Phase items */}
              <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
                {/* First Column */}
                <ul className="list-unstyled phase-items mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Enhanced Decision-Making</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Improved Data Quality</span>
                  </li>
                </ul>

                {/* Second Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Increased Efficiency</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">System Modernization</span>
                  </li>
                </ul>

                {/* Third Column */}
                <ul className="list-unstyled phase-items ms-md-6 mb-0">
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Cost Reduction</span>
                  </li>
                  <li className="d-flex align-items-center mt-3">
                    <img src={checkImg} alt="Codm" />
                    <span className="ms-2 text-900 fw-medium fs-6">Enhanced Performance</span>
                  </li>
                </ul>
              </div>


              {/*new */}

              <h4 className="mb-3 mt-1">What is Data Integration?</h4>
              <p className='mb-4'>Data Integration is the process of combining data from multiple sources into a unified view, facilitating comprehensive analysis and decision-making. This approach enhances collaboration, improves data quality, and streamlines business operations by providing a single source of truth.</p>

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
                      <h4 className='font-20'>Enhanced Decision-Making</h4>
                      <p>
                        Unified data enables more informed and timely business decisions
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
                      <h4 className='font-20'>Improved Data Quality</h4>
                      <p>
                        Consolidation helps identify and rectify inconsistencies, ensuring data accuracy.
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
                      <h4 className='font-20'>Increased Efficiency</h4>
                      <p>
                       Automating data consolidation reduces manual efforts and operational costs.
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
              <h4 className="mt-3 pt-3 border-top mb-3">What is Data Migration?</h4>
              <p className="mb-3">
               Data Migration involves transferring data from one system, format, or location to another, often during system upgrades, cloud transitions, or infrastructure changes. This process ensures that data remains accessible and functional in new environments.
              </p>


              <p className="fw-bold text-900">
                System Modernization:{" "}
                <span className="fw-medium text-600">
                  Facilitates the adoption of advanced technologies and platforms.
                </span>
              </p>

              <p className="fw-bold text-900">
                Cost Reduction:{" "}
                <span className="fw-medium text-600">
                 Eliminates expenses associated with maintaining outdated systems.
                </span>
              </p>

              <p className="fw-bold text-900">
                Enhanced Performance:{" "}
                <span className="fw-medium text-600">
                 Migrating to optimized systems improves data processing speeds and reliability.
                </span>
              </p>


              {/* Accordion */}

               {/* <DataIntegrationAccodionData/> */}
               <DataIntegrationAccodionData/>

              {/* main div end */}
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

export default DataIntegration_Second;