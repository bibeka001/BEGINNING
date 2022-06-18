import React, { useState } from "react";
import DoProps from "./DoProps";

const Do = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (e) => {
    setInputList(e.target.value);
  };
  const showItems = () => {
    setItems((allItems) => {
      return [...allItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((allItems) => {
      return allItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <h1>To Do List</h1>
      <br /> 
      <input
        type="text"
        placeholder="Add  a Item"
        value={inputList}
        onChange={inputEvent}
      />
      <button onClick={showItems}>+</button>
      <ol>
        {/* <li>{inputList}</li> */}
        {items.map((itemValue, index) => {
          return (
            <DoProps
              key={index}
              id={index}
              text={itemValue}
              onSelect={deleteItems}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Do;
