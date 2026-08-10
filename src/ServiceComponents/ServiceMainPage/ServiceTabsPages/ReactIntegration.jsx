import img1 from '../../../assets/imgs/service-4/React.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';
import ServiceMainPagePills from '../ServiceMainPagePills/ServiceMainPagePills';

function ReactIntegration() {
  const features = [
    "Enterprise-Ready Solutions",
    "Scalable Architecture",
    "Security & Performance Focused",
    "Modern Tech Stack",
    "Clean & Maintainable Code",

  ];
  const items = [
    {
      icon: icon1,
      title: "Component-based Architecture (CBA)",
      description:
        "CBA is a software design paradigm that structures a system into independent, reusable, and self-contained components that communicate through defined interfaces."
    },
    {
      icon: icon2,
      title: "Virtual DOM (VDOM)",
      description:
        "React uses a fast, in-memory version of the DOM that helps update the UI efficiently."
    },
  ];

  return (
    <>
      <div className="row rounded-3 bg-white">
        <div className="col-lg-5 mb-lg-0 mb-5">
          <img
            className="rounded-3 my-4"
            src={img1}
            alt="React Integration"
            width="100%"
          />
        </div>

        <div className="col-lg-7">
          <div className="p-lg-3">
            <h3 className="fw-normal">
              Build Future-Ready React Web Applications <span className="fw-bold"></span>
            </h3>
            <p className="custom-p">
              We help you develop dynamic, responsive front-end interfaces using React,
              delivering seamless user experiences and high-performance web apps.
            </p>

            <div>
              <FlipImgwithContent items={items} />
            </div>

          </div>
        </div>
      </div>
      {/*Programmatic React features: */}


      <div>
        <h3>Programmatic React features: </h3>
        <div className='px-4'>
          <li><b>Hooks -</b> Hooks are the functions that enable you to use state, side effects, and other React features within functional components without needing to write class components. They promote cleaner code, better reusability of logic through custom hooks, and a more functional programming style</li>
          <li className='py-1'><b>Components -</b>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</li>
          <li className='py-1'><b>APIs -</b>API handling refers to making HTTP requests to a server to fetch or send data. In JavaScript and React, API calls are commonly handled using fetch, Axios, or libraries like React Query or TanStack Query</li>
          <li className='py-1'><b>API & Backend Integration -</b>React applications with REST APIs, GraphQL, cloud services, and CRM platforms to enable real-time data flow, automation, and system interoperability.</li>
        </div>
      </div>

      {/* why choose codm ? */}
      <div>
        <h3 className='mt-4'>Why Choose Codm for React Development?</h3>

        {features.map((text, index) => (
          <span
            key={index}
            className="m-2 badge rounded-pill purple-pill-bg px-3 py-2 text-white me-2"
            style={{ cursor: "pointer" }}
          >
            {text}
          </span>
        ))}
      </div>

    </>
  );
}

export default ReactIntegration;