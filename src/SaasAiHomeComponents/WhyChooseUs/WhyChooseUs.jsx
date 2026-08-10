import { useEffect, useRef } from "react";
import "./WhyChooseUs.css";
import { IoMdSettings } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";


export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="why-section mb-1" ref={sectionRef}>
      <div className="container">
        <div className="why-header text-center">
          <h2>Why Choose Us?</h2>
          <p>
           
          </p>
        </div>

        <div className="row justify-content-center text-center g-5">
          <div className="col-12 col-md-4">
            <div className="why-item">
              <div className="why-icon blue">
                <IoMdSettings />
              </div>
              <h4>Salesforce Certified Consulting Partner</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur pariatur iste, quia recusandae voluptate eius ratione dicta
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="why-item">
              <div className="why-icon green">
                <MdOutlineSupportAgent/>
              </div>
              <h4>Long Term Support</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laborum perferendis, reiciendis, sit magni excepturi explicabo quis
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="why-item">
              <div className="why-icon pink">
                <MdSecurity/>
              </div>
              <h4>Secure & Scalable Solutions</h4>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro esse iste sint laboriosam nam id soluta nesciunt nulla
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
