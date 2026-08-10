import checkImg from "../../../assets/imgs/services-details/check.svg";
import "./PhaseItems.css";

function PhaseItems({ items }) {
  return (
    <div className="phase_itemContainer d-md-flex align-items-start mt-3 mb-3 border-bottom">
      {items.map((column, colIndex) => (
        <ul key={colIndex} className={`list-unstyled phase-items ${colIndex > 0 ? "ms-md-6" : ""} mb-0`}>
          {column.map((text, index) => (
            <li key={index} className="d-flex align-items-center mt-3">
              <img src={checkImg} alt="check" />
              <span className="ms-2 text-900 fw-medium fs-6">{text}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
export default PhaseItems;