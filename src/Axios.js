import React, { useState, useEffect } from "react";
import axios from "axios";
const Axios = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setDataa(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>This is Axios</h1>
      <ul>
        {dataa.map((dataa) => {
          return <li key={dataa.id}>{dataa.title}</li>;
        })}
      </ul>
    </>
  );
};


export default Axios
