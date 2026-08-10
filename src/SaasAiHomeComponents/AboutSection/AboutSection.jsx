import { useEffect, useRef } from "react";
// import CountUp from "../../Ui/CountUp";
import CountUp from "../../utils/CountUp/CountUp";
import "./AboutSection.css";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center gy-5">
          
          {/* Left Content */}
          <div className="col-lg-6">
            <span className="about-badge">Who We Are</span>
            <h2 className="about-title">
              Building Digital Products<br />That Actually Convert
            </h2>
            <p className="about-text">
              We're a results-driven digital team crafting scalable,
              user-first experiences. From strategy to execution,
              we help brands grow, launch, and dominate online.
            </p>
          </div>

          {/* Right Stats */}
          <div className="col-lg-6">
            <div className="row g-4">
              <Stat title="Projects" value={15} />
              <Stat title="Clients" value={10} />
              <Stat title="Experts" value={5} />
              <Stat title="Support" value="24/7" isText />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value, isText }) {
  return (
    <div className="col-6">
      <div className="stat-card">
        <h3>
          {isText ? value :<> <CountUp end={value} duration={3} enableScrollSpy />+</>}
         
        </h3>
        <p>{title}</p>
      </div>
    </div>
  );
}


// import { useEffect, useRef } from "react";
// import CountUp from "../../Ui/CountUp";
// import "./AboutSection.css";

// export default function AboutSection() {
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("show");
//                 }
//             },
//             { threshold: 0.2 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);
//     }, []);

//     return (
//         <section id="about" className="about-section" ref={sectionRef}>
//             <div className="container">
//                 {/* About Content */}
//                 <div className="about-content text-center mb-5">
//                     <h2 className="about-title">About Us</h2>
//                     <p className="about-text">
//                         We are a passionate digital team delivering modern, scalable, and
//                         user-focused solutions. Our mission is to help brands grow through
//                         design, technology, and strategy.
//                     </p>
//                 </div>

//                 {/* Stats */}
//                 <div className="row stats-row justify-content-center gap-3">
//                     <div className="col-6 col-md-2 text-center stat-card">
//                         <h3>
//                             <CountUp end={99} duration={4} enableScrollSpy />+
//                         </h3>
//                         <p>Projects</p>
//                     </div>

//                     <div className="col-6 col-md-2 text-center stat-card">
//                         <h3>
//                             <CountUp end={40} duration={4} enableScrollSpy />+
//                         </h3>
//                         <p>Clients</p>
//                     </div>

//                     <div className="col-6 col-md-2 text-center stat-card">
//                         <h3>
//                             <CountUp end={25} duration={4} enableScrollSpy />+
//                         </h3>
//                         <p>Experts</p>
//                     </div>

//                     <div className="col-6 col-md-2 text-center stat-card">
//                         <h3>
//                             <CountUp end={24} duration={4} enableScrollSpy />/7
//                         </h3>
//                         <p>Support</p>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

