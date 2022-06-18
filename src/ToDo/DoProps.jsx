import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FiDelete } from "react-icons/fa";
import { MdDelete } from "react-icons/fa";
import { MdCode } from "react-icons/md";

const DoProps = (props) => {
  return (
    <div>
      {/* <i className="fa-solid fa-circle-trash"  style = {{backgroundColor: "red" }} onClick={deleteItems} /> */}
      <MdCode
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      <li>{props.text}</li>
    </div>
  );
};

export default DoProps;
