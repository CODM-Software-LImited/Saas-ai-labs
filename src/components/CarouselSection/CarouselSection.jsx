

// const CarouselSection = ({ images }) => {
//   return (
//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide custom-carousel"
//       data-bs-ride="carousel"
//     >
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             aria-current={index === 0 ? "true" : undefined}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>

//       {/* Slides */}
//       <div className="carousel-inner">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//           >
//             <img src={img} className="d-block w-100 carousel-img" alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselSection;

// import "./CarouselSection.css";

function CarouselSection() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        {/* <!-- Indicators (dots) --> */}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        {/* <!-- Slides --> */}
        <div class="carousel-inner">
          {/* <!-- First Slide --> */}
          <div class="carousel-item active">
            <img src="https://picsum.photos/1200/500?random=1" class="d-block w-100" alt="Slide 1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Beautiful Landscape</h5>
              <p>Experience the serenity of nature in this peaceful view.</p>
            </div>
          </div>

          {/* <!-- Second Slide --> */}
          <div class="carousel-item">
            <img src="https://picsum.photos/1200/500?random=2" class="d-block w-100" alt="Slide 2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>City Skyline</h5>
              <p>Discover the energy and life of the bustling city skyline.</p>
            </div>
          </div>

          {/* <!-- Third Slide --> */}
          <div class="carousel-item">
            <img src="https://picsum.photos/1200/500?random=3" class="d-block w-100" alt="Slide 3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Starry Night</h5>
              <p>Get lost in the beauty of the stars scattered across the sky.</p>
            </div>
          </div>
        </div>

        {/* <!-- Controls (Prev / Next) --> */}
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}
export default CarouselSection;