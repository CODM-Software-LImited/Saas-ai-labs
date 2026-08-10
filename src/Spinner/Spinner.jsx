import spinnerImg from '../assets/imgs/template/CodmFavicon.svg';
import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <img src={spinnerImg} alt="Loading" />
        <p>Loading 
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </p>
      </div>
    </div>
  );
}

export default Spinner;