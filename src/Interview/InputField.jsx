import React, { useState } from "react";

const InputField = () => {
  let [data, setData] = useState({
    name: "",
    number: "",
    password: "",
  });

  let [show, setShow] = useState(false);
  const captureData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const dataToShow = (e) => {
    e.preventDefault();
    setShow(!false);
  };
  return (
    <>
      <h2>Hello</h2>
      <form action="">
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email Address</label>
          <input
            type="text"
            name="name"
            id="exampleInputEmail"
            onChange={captureData}
            className="form-control"
          />
        </div>
        <input
          type="number"
          name="number"
          id="exampleInputEmail"
          className="form-control"
          onChange={captureData}
        />
        <input
          type="password"
          name="password"
          id="exampleInputEmail"
          className="form-control"
          onChange={captureData}
        />
        <button className="btn btn-success" onClick={dataToShow}>
          Submit
        </button>
      </form>
      {show ? (
        <div className="card">
          <div className="card-body">Name: {data.name}</div>
          <div className="card-body">Number: {data.number}</div>
          <div className="card-body">Password: {data.password}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default InputField;
