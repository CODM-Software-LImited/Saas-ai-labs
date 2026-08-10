import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Hero1Section.css';
import ZeroClick from '../../assets/ZeroClick.png';

function Hero1Section() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const slides = [
    {
      title: "Futura",
      description: "Futura is an AI-powered chatbot designed to assist users with intelligent, real-time responses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAo7-3SrZd1kWhejYmF72FAF7ILmHoJHXhg&s",
    },
    {
      title: "Zero Click",
      description: "The Zero Click Dashboard is a sales dashboard designed to capture leads, assign them to different users, and manage user permissions.",
      image: ZeroClick
    }
  ];

  const handleMouseEnter = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <>
      <section className="cta-carousel">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          onSwiper={setSwiperInstance}
          className="cta-carousel-wrapper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="cta-carousel-card">
                <div 
                  className="cta-container d-lg-flex justify-content-between align-items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='col-lg-6'>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <a
                      href="#"
                      rel="noreferrer"
                      className="btn btn-primary p-3"
                    >
                      <span>Explore More</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className='pt-5 pt-lg-0'>
                    <img src={slide.image} alt={slide.title} width={"100%"} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom cta-carousel-btn left" aria-label="Previous slide">
            ‹
          </button>
          <button className="swiper-button-next-custom cta-carousel-btn right" aria-label="Next slide">
            ›
          </button>
        </Swiper>
      </section>
    </>
  );
}

export default Hero1Section;






// import { useState, useEffect, useRef } from 'react';
// import './Hero1Section.css';
// import ZeroClick from '../../assets/ZeroClick.png';

// function Hero1Section() {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);
//   const autoPlayRef = useRef(null);
  
//   const slides = [
//     {
//       title: "Futura",
//       description: "Futura is an AI-powered chatbot designed to assist users with intelligent, real-time responses.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAo7-3SrZd1kWhejYmF72FAF7ILmHoJHXhg&s",
//     },
//     {
//       title: "Zero Click",
//       description: "The Zero Click Dashboard is a sales dashboard designed to capture leads, assign them to different users, and manage user permissions.",
//       image: ZeroClick
//     }
//   ];

//   const extendedSlides = [  
//     slides[slides.length - 1], 
//     ...slides,
//     slides[0] 
//   ];

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isPaused) {
//       autoPlayRef.current = setInterval(() => {
//         nextSlide();
//       }, 3000);
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isPaused, currentSlide]);

//   // Handle infinite loop transitions
//   useEffect(() => {
//     if (currentSlide === 0) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(slides.length);
//       }, 500);
//     } else if (currentSlide === extendedSlides.length - 1) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(1);
//       }, 500);
//     }

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [currentSlide, slides.length, extendedSlides.length]);

//   // Re-enable transitions after instant jump
//   useEffect(() => {
//     if (!isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   const nextSlide = () => {
//     if (isTransitioning) {
//       setCurrentSlide(prev => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (isTransitioning) {
//       setCurrentSlide(prev => prev - 1);
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <>
//       <section className="cta-carousel">
//         <div className="cta-carousel-wrapper">
//           <button className="cta-carousel-btn left" onClick={prevSlide} aria-label="Previous slide">
//             ‹
//           </button>
          
//           <div className="cta-carousel-track">
//             <div 
//               className="cta-carousel-inner"
//               style={{ 
//                 transform: `translateX(-${currentSlide * 100}%)`,
//                 transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
//               }}
//             >
//               {extendedSlides.map((slide, index) => (
//                 <div key={index} className="cta-carousel-card">
//                   <div 
//                     className="cta-container d-lg-flex justify-content-between align-items-center"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <div className='col-lg-6'>
//                       <h1>{slide.title}</h1>
//                       <p>{slide.description}</p>
//                       <a
//                         href="#"
//                         rel="noreferrer"
//                         className="btn btn-primary p-3"
//                       >
//                         <span>Explore More</span>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M5 12h14M12 5l7 7-7 7" />
//                         </svg>
//                       </a>
//                     </div>
//                     <div className='pt-5 pt-lg-0'>
//                       <img src={slide.image} alt={slide.title} width={"100%"} />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="cta-carousel-btn right" onClick={nextSlide} aria-label="Next slide">
//             ›
//           </button>

//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero1Section;


// import { useState, useEffect, useRef } from 'react';
// import './Hero1Section.css';
// import ZeroClick from '../../assets/ZeroClick.png';

// function Hero1Section() {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const timeoutRef = useRef(null);
  
//   const slides = [
//     {
//       title: "Futura",
//       description: "Futura is an AI-powered chatbot designed to assist users with intelligent, real-time responses.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAo7-3SrZd1kWhejYmF72FAF7ILmHoJHXhg&s",
//     },
//     {
//       title: "Zero Click",
//       description: "The Zero Click Dashboard is a sales dashboard designed to capture leads, assign them to different users, and manage user permissions.",
//       image: ZeroClick
//     }
//   ];

//   const extendedSlides = [  
//     slides[slides.length - 1], 
//     ...slides,
//     slides[0] 
//   ];

  
//   useEffect(() => {
//     const autoPlay = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(autoPlay);
//   }, []);

//   useEffect(() => {
//     if (currentSlide === 0) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(slides.length);
//       }, 1000);
//     } else if (currentSlide === extendedSlides.length - 1) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(1);
//       }, 1000);
//     }

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [currentSlide, slides.length, extendedSlides.length]);

//   useEffect(() => {
//     if (!isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   const nextSlide = () => {
//     setIsTransitioning(true);
//     setCurrentSlide(prev => prev + 1);
//   };

//   const prevSlide = () => {
//     setIsTransitioning(true);
//     setCurrentSlide(prev => prev - 1);
//   };

//   const goToSlide = (index) => {
//     setIsTransitioning(true);
//     setCurrentSlide(index + 1);
//   };

//   const getActualIndex = () => {
//     if (currentSlide === 0) return slides.length - 1;
//     if (currentSlide === extendedSlides.length - 1) return 0;
//     return currentSlide - 1;
//   };

//   return (
//     <>
//       <section className="cta-carousel">
//         <div className="cta-carousel-wrapper">
//           <button className="cta-carousel-btn left" onClick={prevSlide} aria-label="Previous slide">
//             ‹
//           </button>
          
//           <div className="cta-carousel-track">
//             <div 
//               className="cta-carousel-inner"
//               style={{ 
//                 transform: `translateX(-${currentSlide * 100}%)`,
//                 transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
//               }}
//             >
//               {extendedSlides.map((slide, index) => (
//                 <div key={index} className="cta-carousel-card">
//                   <div className="cta-container d-lg-flex justify-content-between align-items-center">
//                     <div className='col-lg-6'>
//                       <h1>{slide.title}</h1>
//                       <p>{slide.description}</p>
//                       <a
//                         href="#"
//                         rel="noreferrer"
//                         className="btn btn-primary p-3"
//                       >
//                         <span>Explore More</span>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M5 12h14M12 5l7 7-7 7" />
//                         </svg>
//                       </a>
//                     </div>
//                     <div className='pt-5 pt-lg-0'>
//                       <img src={slide.image} alt={slide.title} width={"100%"} />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="cta-carousel-btn right" onClick={nextSlide} aria-label="Next slide">
//             ›
//           </button>

//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero1Section;
