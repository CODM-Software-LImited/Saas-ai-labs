import { FaCookieBite } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import './Insurance.css';
import CountUp from "../../utils/CountUp/CountUp";


const policies = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: "Privacy Policy",
    description: "Protecting your data",
  },
  {
    id: 2,
    icon: FaFileContract,
    title: "Terms of Use",
    description: "Clear usage guidelines",
  },
  {
    id: 3,
    icon: FaCookieBite,
    title: "Cookie Policy",
    description: "Managing website cookies",
  },
];

const expertise = [
  "Salesforce Certified Consulting Partner",
  "Customer First Approach",
  "Long Term Support",
  "Global Reach",
  "Secure & Scalable Solutions",
  "Proven Delivery Excellence",
];


function Insurance() {
  return (

    <>
      <div className="bgpolicy">
        {/* Insurance & Risk Coverage */}
        <div className="container py-md-5 py-2">
          <h2 className="text-center mb-md-5 mb-2 insuranceHeading">Insurance & Risk Coverage</h2>

          <div className="row g-4 justify-content-center text-center text-md-start">
            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores dolorum, doloribus dolores illum quisquam debitis quibusdam mollitia reiciendis iusto vitae voluptatum exercitationem sed, quis soluta temporibus nesciunt ipsum. Commodi?
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores dolorum, doloribus dolores illum quisquam debitis quibusdam mollitia reiciendis iusto vitae voluptatum exercitationem sed, quis soluta temporibus nesciunt ipsum. Commodi?
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores dolorum, doloribus dolores illum quisquam debitis quibusdam mollitia reiciendis iusto vitae voluptatum exercitationem sed, quis soluta temporibus nesciunt ipsum. Commodi?
              </p>
            </div>
          </div>
        </div>


      </div>

      {/* why choose US */}

      <div className="expertise">
        <div className="conatiner pt-5">
          <h3 className="expertiseHeading text-center pb-5">Why Choose Us</h3>
          <div className="expertise-list text-white container">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* services */}
      <div className="startContainer">
        <div class="stats-section p-5 container">
          <div className="stat-card">
            <div className="stat-number">
              <CountUp end={20} duration={2000} enableScrollSpy scrollSpyOnce={false} /><span>+</span>
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <CountUp end={20} duration={2000} enableScrollSpy scrollSpyOnce={false} /><span>+</span>
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
             <div className="stat-number">
            <CountUp end={98} duration={6000} enableScrollSpy scrollSpyOnce={false} /><span>+</span>
            </div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>





    </>


  )
}

export default Insurance;