import "./DotBtn.css";
import dotImg from "../../assets/imgs/features-1/dots.png";

function DotBtn({ text = "Industries We Serve" }) {
  return (
    <div className="dot-btn d-flex align-items-center">
      <img src={dotImg} alt="dot-icon" className="dot-btn-img" />
      <span className="dot-btn-text">{text}</span>
    </div>
  );
}

export default DotBtn;

