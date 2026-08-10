const FlipImgwithContentAgentforce = ({ items }) => {
  return (
    <div className="row pt-5">
      {/* Left Column */}
      <div className="col-lg-7">
        {items.map((item, index) => (
          <div className={`d-flex ${index !== 0 ? "pt-3" : ""}`} key={index}>
            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3"  style={{ width: "60px", height: "60px" }}>
              <div className="S_secondLineImg" width={'80%'} style={{ width: "32px", height: "32px" }}>
                <img src={item.icon} alt={item.title}/>
                {/* {index !== items.length - 1 && <span className="customLine"></span>} */}
                 <span className="customLine"></span>
              </div>
            </div>
            <div className="ps-5">
              <h4 className="font-20">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlipImgwithContentAgentforce;