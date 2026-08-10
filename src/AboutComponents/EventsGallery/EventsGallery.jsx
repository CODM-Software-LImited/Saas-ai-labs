import './EventsGallery.css';
import { useState } from "react";
import DiwaliImage from '../../assets/imgs/events/DiwaliImage.jpeg';
import BirthdayImage from '../../assets/imgs/events/BirthdayImage.jpeg';

const EventsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      title: "Diwali Celebration",
      category: "Festival",
      img: DiwaliImage,
      description: "Festival of lights celebrated with joy, decor & ethnic wear."
    },
    {
      title: "Birthday Celebration",
      category: "Birthday",
      img: BirthdayImage,
      description: "A joyful birthday celebration filled with laughter, love, and unforgettable moments."
    },
  ];

  const filters = ["All", "Festival", "Birthday", "Team Outings"];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((item) => item.category === activeFilter);

  return (
    <div className="container">
      {/* Filter Bar */}
      <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(filter)}
            className={`btn btn-sm rounded-pill px-3 ${
              activeFilter === filter ? "purple-bg-event" : "btn-outline-secondary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="row">
        {filteredEvents.map((event, i) => (
          <div className="col-lg-3 col-md-6 my-2" key={i}>
            <div
              className="event-card position-relative rounded-4 overflow-hidden shadow-sm"
              onClick={() => setSelectedImage(event.img)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="event-img"   
              />
              {/* <div className="event-overlay p-3 d-flex flex-column justify-content-end"> */}
                <h5 className="mb-1">{event.title}</h5>
                <p className="small mb-0">{event.description}</p>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE POPUP VIEWER */}
      {selectedImage && (
        <div className="image-viewer-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage} alt="Preview" className="popup-image" />
          </div>
        </div>
      )}


    </div>
  );
};

export default EventsGallery;



// import './EventsGallery.css';
// import { useState } from "react";
// import DiwaliImage from '../../assets/imgs/events/DiwaliImage.jpeg';
// import BirthdayImage from '../../assets/imgs/events/BirthdayImage.jpeg';

// const EventsGallery = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const events = [
//     {
//       title: "Diwali Celebration",
//       category: "Diwali",
//       img: DiwaliImage,
//       description: "Festival of lights celebrated with joy, decor & ethnic wear."
//     },
//      {
//       title: "Birthday Celebration",
//       category: "Birthday",
//       img: BirthdayImage,
//       description: "A joyful birthday celebration filled with laughter, love, and unforgettable moments"
//     }
//   ];

//   const filters = ["All", "Diwali", "Birthday", "Team Outings"];

//   const filteredEvents =
//     activeFilter === "All"
//       ? events
//       : events.filter((item) => item.category === activeFilter);

//   return (
//     <div className="container">
//       {/* Filter Bar */}
//       <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
//         {filters.map((filter, i) => (
//           <button
//             key={i}
//             onClick={() => setActiveFilter(filter)}
//             className={`btn btn-sm rounded-pill px-3 ${
//               activeFilter === filter ? "purple-bg-event" : "btn-outline-secondary"
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <div className="row g-4">
//         {filteredEvents.map((event, i) => ( 
//           <div className="col-lg-4 col-md-6" key={i}>
//             <div
//               className="event-card position-relative rounded-4 overflow-hidden shadow-sm top-50"
//               onClick={() => setSelectedImage(event.img)}
//               style={{ cursor: "pointer"}}
//             >
//               <img src={event.img} alt={event.title} className="w-50"  style={{height:"70px",objectFit:"cover"}}/>
//               <div className="event-overlay p-3 d-flex flex-column justify-content-end">
//                 <h5 className="text-white">{event.title}</h5>
//                 <p className="text-light small">{event.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* IMAGE VIEWER POPUP */}
//       {selectedImage && (
//         <div className="image-viewer-overlay" onClick={() => setSelectedImage(null)}>
//           <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
//             <img src={selectedImage} alt="Preview" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsGallery;
