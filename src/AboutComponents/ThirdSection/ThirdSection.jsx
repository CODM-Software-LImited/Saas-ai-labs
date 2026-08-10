import "./ThirdSection.css";
import img1 from '../../assets/imgs/service-1/icon-6.svg';
import img2 from '../../assets/imgs/service-1/icon-4.svg';
import img3 from '../../assets/imgs/service-1/icon-5.svg';
import img4 from '../..//assets/imgs/service-1/icon-3.svg';
import { Link } from "react-router-dom";

const ThirdSection = () => {
  return (
    <section className=" border-bottom pb-120 pt-110">
      <div className="ThirdSection_container container">
        {/* Section Heading */}
        <div className="text-center">
          <h5 className="">Our Core Values</h5>
          <p className="fs-5 pb-4 fw-medium">
            We break down barriers so teams can focus on what matters working
            together <br className="d-none d-lg-block" />
            to create products their customers love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            {/* 1th */}
            <div className="ThirdSection_card mb-5 p-4 rounded-4 hover-up" style={{ maxHeight: '600px' }}>
              <div className="position-relative rounded-3 mb-4">
                <div className="ThirdSectionImg d-flex justify-content-center d-md-inline-block text-md-start">
                  <img
                    className="icon-flip mx-auto d-block"
                    src={img1}
                    alt="Codm"
                  />
                  <span className="customLine"></span>
                </div>

              </div>
              <h4 className="text-center text-md-start">S.O.L.I.D Principle</h4>
              <p className="text-center text-md-start">
                SOLID Design Principle is a collection of best-practice,
                object-oriented design principles which can be applied to your
                application design. This allows us to accomplish various
                desirable goals such as loose-coupling, higher maintainability.
              </p>
              <Link className="RouterLink hover-up icon-flip fs-7 fw-bold text-decoration-none d-flex justify-content-center d-md-block" href="#">
                Learn More
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                    fill="#111827"
                  />
                </svg>
              </Link>
            </div>

            {/* 3th */}
            <div className="ThirdSection_card ThirdSection_cardbottom mb-5 p-4 rounded-4 hover-up" style={{ maxHeight: '600px' }}>
              <div className="position-relative rounded-3 mb-4">
                <div className="ThirdSectionImg d-flex justify-content-center d-md-inline-block text-md-start">
                  <img
                    className="icon-flip filter-invert"
                    src={img3}
                    alt="Codm"
                  />
                  <span className="customLine"></span>
                </div>
              </div>

              <h4 className="text-center text-md-start">Open Source Apex Framework</h4>
              <p className="text-center text-md-start">
                Contains 4 key elements <br />
                <b>Selector</b> : Encapsulates all SOQL queries. <br />
                <b>Domains</b> : Manages DML operations across multiple objects
                in a single transaction.
                <br />
                <b>Services</b> : Orchestrates high-level operations using
                domain and selector layers <br />
                <b>Unit of work</b> : Manages DML operations across multiple
                objects in a single transaction.
              </p>

              <a className="RouterLink hover-up icon-flip fs-7 fw-bold text-decoration-none d-flex justify-content-center d-md-block" href="#">
                Learn More
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                    fill="#111827"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            {/* 2th */}
            <div className="ThirdSection_card mb-5 p-4 rounded-4 hover-up">
              <div className="position-relative rounded-3 mb-4">
                <div className="ThirdSectionImg d-flex justify-content-center d-md-inline-block text-md-start">
                  <img
                    className="icon-flip filter-invert"
                    src={img2}
                    alt="Codm"
                  />
                  <span className="customLine"></span>
                </div>
              </div>
              <h4 className="text-center text-md-start">DRY Principle</h4>
              <p className="text-center text-md-start">
                A software development guideline advocating for avoiding redundancy in code.
                It suggests that each piece of knowledge should have a single, unambiguous
                representation within a system, promoting efficiency and reducing technical debt.
              </p>
              <a className="RouterLink hover-up icon-flip fs-7 fw-bold text-decoration-none d-flex justify-content-center d-md-block" href="#">
                Learn More
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                    fill="#111827"
                  />
                </svg>
              </a>
            </div>

            {/* 4th */}
            <div className="ThirdSection_card ThirdSection_cardbottom mb-5 p-4 rounded-4 hover-up">
              <div className="position-relative rounded-3 mb-4">
                <div className="ThirdSectionImg d-flex justify-content-center d-md-inline-block text-md-start">
                  <img
                    className="icon-flip filter-invert"
                    src={img4}
                    alt="Codm"
                  />
                  <span className="customLine"></span>
                </div>
              </div>

              <h4 className="text-center text-md-start">Development Strategies</h4>
              <p className="text-center text-md-start">
                Development strategies are structured approaches used in software
                development to plan, build, test, and deploy applications
                efficiently. Common strategies include <br />
                <b>Agile</b> : is a flexible, iterative approach to project
                management that emphasizes collaboration, customer feedback, and
                rapid delivery.
                <br />
                <b>Waterfall</b> : is a linear and sequential project management
                approach where each phase (like planning, design, development,
                testing, and deployment) must be completed before moving to the
                next.
                <br />
                <b>Adhoc</b> : is an unstructured, informal approach to tasks or
                problem-solving, done as needed without prior planning or a
                defined process.
              </p>

              <a className="RouterLink hover-up icon-flip fs-7 fw-bold text-decoration-none d-flex justify-content-center d-md-block" href="#">
                Learn More
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                    fill="#111827"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;