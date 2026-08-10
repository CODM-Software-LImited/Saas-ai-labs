
import './S_thirdSection.css';

const accordionData = [
  {
    number: 1,
    title: "Admissions & Enrollment",
    content:
      "Institutions can attract, engage, and convert prospective students with tailored campaigns and seamless application processes. From first interest to first day on campus, every step is automated and tracked."
  },
  {
    number: 2,
    title: "Academic Advising",
    content:
      "Advisors can track students’ goals, academic standing, and challenges through centralized dashboards. Real-time alerts and case management help identify and support at-risk students quickly.."
  },
  {
    number: 3,
    title: "Student Support Services",
    content:
      "Manage student issues—from financial aid queries to mental health concerns—through a centralized support system that ensures no case is overlooked."
  },
  {
    number: 4,
    title: "Alumni & Advancement",
    content:
      "Education Cloud empowers advancement teams to drive fundraising with personalized donor journeys, event management, and contribution tracking—creating lifelong relationships with alumni."
  },
  {
    number: 5,
    title: "Institutional Operations",
    content:
      "From facilities requests to IT support and registrar processes, automate workflows across campus departments for higher productivity and efficiency."
  }
];

export default function S_thirdSection() {
  return (
    <>
    <h4 className="mt-3 pt-3 border-top mb-3">Use Cases of Salesforce Education Cloud</h4>
    <div className="accordion mt-4" id="accordionExample">
      {accordionData.map((item, index) => (
        <div key={item.number} className="accordion-item border-bottom">
          <h2 className="accordion-header" id={`heading${item.number}`}>
            <button
              className={`accordion-button ${
                index === 0 ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.number}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.number}`}
            >
              <span className="circleIcon purple-bg me-3">
                {item.number}
              </span>
              <h6 className="accordion_title">{item.title}</h6>
            </button>
          </h2>
          <div
            id={`collapse${item.number}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            aria-labelledby={`heading${item.number}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}