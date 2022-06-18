import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Programm.css";
const Programm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <h1>Hello, This is a collection of stars</h1>
      {/* <div
        // className="card"
        style={{
          width: "18rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          {[...Array(5)].map((star, index) => {
            index = +1;
            return (
              <>
                <div
                  //   type="div"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <div className="star">&#9733;</div>
                </div>
                {/* <span className="star">&#9733;</span> */}
              </>
        //     );
        //   })}
        // </div>
        // <div
        //   style={{
        //     justifyContent: "center",
        //     alignItem: "center",
        //     marginTop: "10px",
        //     marginBottom: "10px",
          // }}
        // > 
        //   <button className="btn btn-success">Submit</button>
        // {/* <FontAwesomeIcon icon="fa-solid fa-stars" /> */}
        // </div>
        // </div>
        // <FontAwesomeIcon icon="fa-solid fa-star" />
//     </>
//   );
// };

// export default Programm;
