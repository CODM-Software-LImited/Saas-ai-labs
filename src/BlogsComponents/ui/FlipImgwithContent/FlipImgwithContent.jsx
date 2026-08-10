const FlipImgwithContent = ({ items }) => {
  return (
    <div className="row pt-3">
      {/* Left Column */}
      {/* <div className="col-lg-7"> */}
      <div>
        {items.map((item, index) => (
          <div className={`d-flex ${index !== 0 ? "pt-2" : ""}`} key={index}>
            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
              <div className="S_secondLineImg">
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
export default FlipImgwithContent;