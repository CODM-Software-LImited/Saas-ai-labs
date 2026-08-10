import "./Header.css";
import bgImg from '../../../assets/imgs/page-header/bg-line.png';
import DotBtn from "../../../utils/Dotbtn/Dotbtn";

const Header = () => {
  return (
    <section className="serviceHeader section-page-header py-10 fix position-relative">
      <div className="d-flex justify-content-center">
         <DotBtn text="What we offers" />
      </div>
     
      <div className="container mt-5">
         <h3 className="servicePageHeading text-center">Building <b>enduring value</b> 
              <br/>
            through bold strategies</h3>
      </div>

      <img
        className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
        src={bgImg}
        width="100%"
        alt="background"
      />

    </section>
  );
};

export default Header;
