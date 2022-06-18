import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Task = () => {
  const [color, setColor] = useState(false);
  const [starData, setStarData] = useState([
    { id: 1, isfav: false },
    { id: 2, isfav: false },
    { id: 3, isfav: false },
    { id: 4, isfav: false },
    { id: 5, isfav: false },
  ]);
  const star = (e) => {
    setColor(true);
    const newData = setData.map((value) => {
      if (value.id === e) {
        return { id: value.id, isfav: true };
      } else {
        return value;
      }
    });
    setStarData(newData);
    console.log("number", newData);
  };
  const leave = () => {
    setColor(false);
    console.log("leave");
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {starData.map((value) => {
          return (
            <div key={value.id} style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                color={value.isfav ? "#FDCC0D" : null}
                onMouseOver={(e) => star(value.id)}
                onMouseLeave={() => leave()}
                size="lg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Task;