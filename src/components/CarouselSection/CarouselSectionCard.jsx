import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './CarouselSectionCard.css';
// import Energy from '../../assets/imgs/Carousel/Energy.avif';  
import Energy from '../../assets/imgs/Carousel/EnergyImg.jpg';
import img2 from '../../assets/imgs/Carousel/ngo.png';
// import educationImg from '../../assets/imgs/Carousel/educationImg.jpg';
import educationImg from '../../assets/imgs/Carousel/ed.jpg';

export default function CarouselSectionCard() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={educationImg}
            className="d-block w-100 carousel-img"
            alt="education"
          />
          <div className="carousel-caption custom-caption">
            <h5>Empowering Future Through Education</h5>
            <p>We build digital solutions that transform learning into limitless opportunities.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100 carousel-img"
            alt="Slide 2"
          />
          <div className="carousel-caption custom-caption">
            <h5>Technology for Social Good</h5>
            <p>Partnering with NGOs to create platforms that amplify impact and reach communities.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Energy}
            className="d-block w-100 carousel-img"
            alt="Slide 3"
          />
          <div className="carousel-caption custom-caption">
            <h5>Powering the Future of Energy</h5>
            <p>Partnering with energy and utility providers to modernize operations, enhance customer experiences, and accelerate the transition to sustainable energy</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// for 6 slides here is the code 

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './CarouselSectionCard.css';

// export default function CarouselSectionCard() {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       className="carousel slide"
//       data-bs-ride="carousel"
//       data-bs-interval="3000"
//     >
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"></button>
//       </div>

//       {/* Slides */}
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img
//             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 1"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>Beautiful Landscape</h5>
//             <p>Experience the serenity of nature in this peaceful view.</p>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <img
//             src="https://images.unsplash.com/photo-1721066115321-eb0eec055296?q=80&w=1074&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 2"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>City Skyline</h5>
//             <p>Discover the energy and life of the bustling city skyline.</p>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <img
//             src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 3"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>Starry Night</h5>
//             <p>Get lost in the beauty of the stars scattered across the sky.</p>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <img
//             src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 4"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>Mountain Adventure</h5>
//             <p>Conquer the peaks and embrace the thrill of the wild.</p>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <img
//             src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 5"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>Ocean Waves</h5>
//             <p>Relax by the shore and listen to the calming ocean breeze.</p>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <img
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
//             className="d-block w-100 carousel-img"
//             alt="Slide 6"
//           />
//           <div className="carousel-caption custom-caption">
//             <h5>Desert Sunset</h5>
//             <p>Witness the golden hues of the sun over endless dunes.</p>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>

//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

