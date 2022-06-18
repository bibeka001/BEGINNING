import React, { useEffect, useState } from "react";
const Dude = () => {
  const usecountDown = (targetData) => {};
  const [countDown, setCountDown] = useState(
    useEffect(() => {
      const interval = setInterval(() => {
        updateTime();
      }, 1000);
    })
  );
  return (
    <>
      <h1>This is a functional component</h1>
      <button>Stop</button>
    </>
  );
};

export default Dude;
