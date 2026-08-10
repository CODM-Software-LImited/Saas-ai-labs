import DotBtn from '../../utils/Dotbtn/Dotbtn';
import './OurExcellence.css';
import bgImg from '../../assets/imgs/team-1/bg-line.png';
import Testimonial from '../Testimonials/Testimonial';

function OurExcellence() {
    return (
        <>
            <div className='ourExcellence_Container container-fluid position-relative overflow-hidden'>
                <Testimonial/>
                {/* background img */}
                <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src={bgImg} alt="Codm" className='ourExcelence_img'/>
                </div>
                <div className="rotate-center ellipse-rotate-success position-absolute z-0"></div>
                <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0"></div>
            </div>
        </>
    )
}

export default OurExcellence;
