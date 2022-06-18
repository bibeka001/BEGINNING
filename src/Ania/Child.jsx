import React from "react";
const Child = (props) => {
  return (
    <>
      <h3>This is Child Component</h3>
      <hr />
      <button onClick={() => props.inputHandler("Cool")}>Click Me</button>


    </>
  );
};
export default Child;
