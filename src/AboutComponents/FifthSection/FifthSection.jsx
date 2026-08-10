import blog1 from '../../assets/imgs/blog-1/card-img-1.jpg';
import blog2 from "../../assets/imgs/blog-1/card-img-3.jpg";
import blog3 from "../../assets/imgs/blog-1/card-img-2.jpg";

import DotBtn from "../../utils/Dotbtn/Dotbtn";
import { Link } from "react-router-dom";
import './FifthSection.css';

function FifthSection() {
  return (
    <section className="FifthSection_Container pt-5">
      <div className="container">
        {/* Header Row */}
        <div className="row align-items-end ">
          <div className="col-12 col-md-6 me-auto">
            <div className='dotFromBtn'> 
               <DotBtn text="From Blog"/>
            </div>
           
            <h1
              className="FifthSection_Heading ds-3 mt-3 mb-3"
              data-aos="fade-zoom-in"
              data-aos-delay="100"
            >
              Our Latest <br/> Articles
            </h1>
            <span
              className="fs-5 fw-medium"
              data-aos="fade-zoom-in"
              data-aos-delay="200"
            >
              Explore the insights and trends shaping our industry
            </span>
          </div>

          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Link
              className="ms-md-5 fw-bold text-decoration-none d-flex align-items-center justify-content-md-end"
            //   className="ms-md-5 fw-bold text-decoration-none"
              style={{ color: "#8065f4" }}
            >
              See all Blogs
              <svg
                className="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
              >
                <path
                  className="fill-dark"
                  d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Cards Row */}
        <div className="FifthSection_CardsContainer row">
          {/* Blog 1 */}
          <div className="FifthSection_Card col-lg-4 text-start">
            <div
              className="border-0 rounded-3 mt-8 position-relative"
              data-aos="fade-zoom-in"
              data-aos-delay="100"
            >
              <img className="rounded-3" src={blog1} alt="Codm" width={'100%'}/>
              <div className="card-body p-0">
                <Link className="text-decoration-none">
                  <p className="FifthSection_CardTag text-linear-2 text-uppercase">
                    Business
                  </p>
                </Link>
                <div className="FifthSection_Content m-2">
                  <h5 className="my-3">
                   The Future of SaaS: Emerging Trends to Watch
                  </h5>
                  <p>
                    As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...
                  </p>
                </div>
              </div>
              <a
                className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                href="/integrationframework.html"
              ></a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="FifthSection_Card col-lg-4 text-start">
            <div
              className="border-0 rounded-3 mt-8 position-relative"
              data-aos="fade-zoom-in"
              data-aos-delay="200"
            >
              <img className="rounded-3" src={blog2} alt="Codm" width={'100%'}/>
              <div className="card-body p-0">
                <Link className="text-decoration-none">
                  <p className="FifthSection_CardTag text-linear-2 text-uppercase">
                    Technology
                  </p>
                </Link>
                <div className="FifthSection_Content m-2">
                  <h5 className="my-3">
                  Choosing the Right SaaS Solution for Your Business
                  </h5>
                  <p>
                  Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...
                  </p>
                </div>
              </div>
              <a
                className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                href="/triggerframework.html"
              ></a>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="FifthSection_Card col-lg-4 text-start">
            <div
              className="border-0 rounded-3 mt-8 position-relative"
              data-aos="fade-zoom-in"
              data-aos-delay="300"
            >
              <img className="rounded-3" src={blog3} alt="Codm" width={'100%'}/>
              <div className="card-body p-0">
                <Link className="text-decoration-none">
                  <p className="FifthSection_CardTag text-linear-2 text-uppercase">
                    Security
                  </p>
                </Link>
                <div className="FifthSection_Content m-2">
                  <h5 className="my-3">
                  The Importance of Data Security in Your SaaS Projects
                  </h5>
                  <p>
                    Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...
                  </p>
                </div>
              </div>
              <a
                className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                href="/revenueCloud.html"
              ></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default FifthSection;
