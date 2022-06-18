import React, { useState } from "react";
const Childd = (props) => {
  const [inputs, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputs);
  };
  return (
    <>
      <h1>This is child component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={inputs}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Childd;
