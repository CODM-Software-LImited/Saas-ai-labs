import "./ServicePageContentSection.css";

const ServicePageContentSection = ({ 
  mainImg, 
  title, 
  description, 
  features = [],  
}) => {
  return (
    <section>
      <div className="container">
        <div className="row pt-8">
          <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content border-bottom">
            <img className="rounded-3" src={mainImg} alt={title} width="100%" />
            <h4 className="my-3">{title}</h4>
            <p>{description}</p>

            <div className="phase_itemContainer d-md-flex align-items-center mt-3 mb-3">
              {features.map((col, colIdx) => (
                <ul className="list-unstyled phase-items ms-md-6 mb-0" key={colIdx}>
                  {col.map((item, idx) => (
                    <li className="d-flex align-items-center mt-3" key={idx}>
                      <img src={item.icon} alt={item.text} />
                      <span className="ms-2 text-900 fw-medium fs-6">{item.text}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageContentSection;
