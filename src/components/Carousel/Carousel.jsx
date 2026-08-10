import { useRef ,useEffect} from "react";
import "./Carousel.css";

export default function Carousel() {
  const sliderRef = useRef(null);

  const handleClick = (direction) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(".item");
    if (direction === "next") {
      slider.append(items[0]);
    } else if (direction === "prev") {
      slider.prepend(items[items.length - 1]);
    }
  };

   useEffect(() => {
    const interval = setInterval(() => {
      handleClick("next");
    }, 2000); 
    return () => clearInterval(interval);
  }, []);


  const slides = [
    {
      title: "Salesforce CRM",
      description:
        "Empower your business with Salesforce CRM - streamline processes, manage customers effectively, and boost sales productivity.",
      btn: "Learn More",
      bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArKejLxCvCX81l2ikNefl-zGfTQT95Vtb1w&s",
    },
    {
      title: "Service Cloud",
      description:
        "Deliver smarter, faster, and personalized support with Salesforce Service Cloud.",
      btn: "Explore",
      bg: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg",
    },
    {
      title: "Marketing Cloud",
      description:
        "Create personalized customer journeys with Salesforce Marketing Cloud automation tools.",
      btn: "Discover",
      bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyyKQ7ACYRMzmjWIu_dCt7ZC2quIs0Ql8_Q&s",
    },
    {
      title: "Sales Cloud",
      description:
        "Accelerate sales growth with AI-powered insights and Salesforce Sales Cloud tools.",
      btn: "Start Now",
      bg: "https://images7.alphacoders.com/878/878663.jpg",
    },
    // {
    //   title: "Commerce Cloud",
    //   description:
    //     "Unify your online and in-store commerce with Salesforce Commerce Cloud.",
    //   btn: "Try Demo",
    //   bg: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
    // },
    // {
    //   title: "Tableau Analytics",
    //   description:
    //     "Turn data into insights with Tableau – Salesforce’s powerful analytics platform.",
    //   btn: "See Insights",
    //   bg: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    // },
  ];

  return (
    <section className="carouselSection">
      <main>
        <div className="slider" ref={sliderRef}>
          {slides.map((s, i) => (
            <div
              className={`item item${i + 1}`}
              key={i}
              style={{ backgroundImage: `url(${s.bg})` }}
            >
              <div className="content">
                <h2 className="title">{s.title}</h2>
                <p className="description">{s.description}</p>
                <button>{s.btn}</button>
              </div>
            </div>
          ))}
        </div>

        {/* <nav className="nav">
          <button className="btn prev" onClick={() => handleClick("prev")}>
            ❮
          </button>
          <button className="btn next" onClick={() => handleClick("next")}>
            ❯
          </button>
        </nav> */}
      </main>
    </section>
  );
}


