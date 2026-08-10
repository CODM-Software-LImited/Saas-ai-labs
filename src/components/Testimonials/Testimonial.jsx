import { useState, useEffect } from "react";
import "./Testimonial.css";
import avatar1 from "../../assets/imgs/testimonial-1/avatar-1.png";
import avatar2 from "../../assets/imgs/testimonial-1/avatar-2.png";
import avatar3 from "../../assets/imgs/testimonial-1/avatar-3.png";
import star from "../../assets/imgs/testimonial-1/star.svg";
import star1 from "../../assets/imgs/testimonial-1/star1.svg";
import star2 from "../../assets/imgs/testimonial-1/star2.svg";


const cards = [
  {
    text: "Working with CodM was a turning point for us. Their expertise in building customised CRM solutions has transformed our customer interactions.",
    author: "Kendrick Shaw",
    img: avatar1,
    starImg: star1,
    blankStarImg: star2,
  },
  {
    text: "Working with CodM was a turning point for us. Their expertise in building customised CRM solutions has transformed our customer interactions.",
    author: "Sarah Smith",
    img: avatar2,
    starImg: star1,
    blankStarImg: star1,
  },
  {
    text: "Working with CodM was a turning point for us. Their expertise in building customised CRM solutions has transformed our customer interactions.",
    author: "Kendrick Shaw",
    img: avatar3,
    starImg: star1,
    blankStarImg: star2,
  },
  
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h3 className="text-center Heading3">What Our Clients Say</h3>
    <div className="carousel">
      <div className="carousel-track">
       
        {cards.map((card, i) => {
          let offset = i - activeIndex;

          if (offset < -Math.floor(cards.length / 2)) {
            offset += cards.length;
          } else if (offset > Math.floor(cards.length / 2)) {
            offset -= cards.length;
          }
          return (
            <div
              key={i}
              className={`card mb-5 ${i === activeIndex ? "active" : "inactive"}`}
              style={{
                transform: `translateX(${offset * 350}px) scale(${i === activeIndex ? 1 : 0.8})`,
                opacity: i === activeIndex ? 1 : 0.4,
                // opacity: i === 0 || i === cards.length - 1 ? 0 : i === activeIndex ? 1 : 0.4,
                zIndex: i === activeIndex ? 2 : 0
              }}
              onClick={() => setActiveIndex(i)}
            > 
              <div className="card-content">
                <img src={card.img} alt={card.author} className="avatarImg"/>
                <h4 className="authorName">{card.author}</h4>
                <div className="author">
                  <p>{card.text}</p>
                </div>
                {/* <img src={card.img} alt={card.author} className="avatarImg" /> */}
                <div>
                  <img src={card.starImg} alt="star" width={'3%'} className="ratingImg"/>
                  <img src={card.starImg} alt="star" width={'3%'} className="ratingImg"/>
                  <img src={card.starImg} alt="star" width={'3%'} className="ratingImg"/>
                  <img src={card.starImg} alt="star" width={'3%'} className="ratingImg"/>
                  <img src={card.blankStarImg} alt="star" width={'3%'} className="ratingImg" />
                  {/* <span>{card.starImg}</span> */}

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

