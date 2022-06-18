import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState("");
  const parentToChild = () => {
    alert("This is data from Parent to Child");
    console.log("hello");
  };
  const inputHandler = (e) => {
      setData(e.target.value)
  }
  return (
    <>
      <h1>This is Parent Component</h1>
      <hr />
      <Child parentToChild={data} />
      <div>
      <label >
          <input type="text" placeholder= "Enter your name" onChange={inputHandler}/>
      </label>
        <button  type= "submit">Click Me</button>
      </div>
    </>
  );
};

export default Parent;
