import './ServiceMainNextComponent.css';
import CountUp from '../../../utils/CountUp/CountUp';
const ServiceMainNextComponent = () => {
  const counters = [
    {
      title: (
        <>
         Years of Industry Experience
        </>
      ),
      value: 25,
      subtitle: "Delivering enterprise software solutions",
    },
    {
      title: (
        <>
          Successfully <br /> completed
        </>
      ),
      value: 30,
      subtitle: "Delivering secure, and high quality digital solutions on time.",
    },
    {
      title: (
        <>
          Recruit more <br /> than
        </>
      ),
      value: 20,
      subtitle: "Skilled experts",
    },
    {
      title: (
        <>
          Increase internet <br /> awareness
        </>
      ),
      value: 20,
      subtitle: "Media posts",
    },
  ];

  return (
    <section className="fix section-padding bg-light mt-5">
      <div className="ServiceMainNextContainer container">
        <div className="inner">
          <div className="row justify-content-between">
            {counters.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item">
                  <div className="content text-center mx-auto">
                    <h6 className='counterItem'>{item.title}</h6>

                    <span className="service_countnum h1 fw-black my-0">
                      +
                      <span className="odometer"></span>
                      {/* <span>{item.value}</span> */}
                      <CountUp end={item.value} duration={3000} enableScrollSpy scrollSpyOnce={false} />
                    </span>

                    <p className="service_countnumspan fs-5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMainNextComponent;
