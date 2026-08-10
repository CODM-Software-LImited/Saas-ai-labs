import './PageNotFound.css';
import { Link } from 'react-router-dom';
import img from '../../assets/imgs/pageNotFoundImg.png'
import DotBtn from '../../utils/Dotbtn/Dotbtn';

function PageNotFound() {
  return (
    <>

    <div className="PageNotFoundContainer">
        <div className='mb-5 d-flex align-items-center justify-content-center'>
          <DotBtn text="Page Not Found"/>
        </div>
    
    <div className="container d-sm-flex gap-5">
    
        <div className='col-sm-6 text-center'>
            <h2 className='notfoundheading'>404</h2>
            <h5 className='text-gray'>Page Not Found</h5>
            <p className='text-gray my-0'>Oops! Looks like this page got lost </p>
            <p className='text-gray'>But don't worry let's get you back on track</p>

            <div className='my-5'>
                <Link
                to="/"
                className="explorebtn btn-gradient text-decoration-none"
              >
                Back to home
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.25 15.25V6.75H8.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L6.75 17.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            
        </div>
        <div className='col-sm-6 d-sm-inline d-flex justify-content-center align-top'>
            <img src={img} alt="page not found" width={'56%'}/>
        </div>
     </div>
     </div>
    </>
  )
}

export default PageNotFound;