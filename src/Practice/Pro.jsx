import React, { useState } from "react";

const Pro = () => {
  let [data, setData] = useState({
    name: "",
    number: "",
  });
  let [show, setShow] = useState(false);
  let caputreData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const dataToShow = (e) => {
    e.preventDefault();
    setShow(!false);
  };
  return (
    <>
      <h1>This is a New Task</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={caputreData}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="number"
            className="form-control"
            id="exampleInputEmail1"
            onChange={caputreData}
          />
        </div>
        <button className="btn btn-success" onClick={dataToShow}>
          Submit
        </button>
      </form>
      {show ? (
        <div className="card">
          <div className="card-body">Name:{data.name}</div>
          <div className="card-body">Number: {data.number}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pro;
