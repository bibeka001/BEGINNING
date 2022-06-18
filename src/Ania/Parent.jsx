import React, { useState } from "react";
import Child from "src/Ania/Child";
const Parent = () => {
  const [details, setDetails] = useState("Parent");

  return (
    <>
      <h1>{details}</h1>
      <hr />
      <Child inputHandler={(details) => setDetails(details)} />
    </>
  );
};
export default Parent;
