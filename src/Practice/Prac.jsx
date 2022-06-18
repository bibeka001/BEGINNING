import React, { useEffect, useState } from "react";
import Axios from "axios";
const Prac = () => {
  const [show, setShow] = useState([]);
  const getProductData = () => {
    let url = "https://skdfjd.com";
    Axios.get(url)
      .then((res) => {
        console.log("response", res);
        setShow(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect((e) => {
    getProductData();
  }, [])
  return (
    <>
      <h2>This is a function Component</h2>
    </>
  );
};
export default Prac;
