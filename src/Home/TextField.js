import React from "react";
import "./Int.css";

const TextField = (props) => {
    console.log("optionValue",props.optionValue)
  return (
    <>
      <div style={{ padding: "5px" }}>
        {props.type === "dropdown" ? (
          <div className="labelContainer">
            <label className="label">{props.label ? props.label : ""}</label>
            <select
              placeholder={props.placeholder ? props.placeholder : ""}
              value={props.value ? props.value : ""}
              onChange={(e) => props.onChange(e.target.value)}
            >
              <option>{props.optionText ? props.optionText : ""}</option>

              {props.optionValue
                ? props.optionValue
                : [].map((e, key) => {
                    return (
                      <option value={e.name} key={key}>
                        {e}
                      </option>
                    );
                  })}
            </select>
          </div>
        ) : (
          <div className="labelContainer">
            <label className="label">{props.label ? props.label : ""}</label>
            <input
              type={props.type ? props.type : ""}
              value={props.value ? props.value : ""}
              placeholder={props.placeholder ? props.placeholder : ""}
              onChange={
                props.onChange
                  ? (e) => props.onChange(e.target.value)
                  : () => {}
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
export default TextField;
