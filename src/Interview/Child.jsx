import React from "react";
const Child = (props) => {
  return (
    <>
      <h1>This is Child Component</h1>
      {props.name}
    </>
  );
};

export default Child;
