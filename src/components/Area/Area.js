import React from "react";
import "./style.css";

const Area = (props) => {
  const ln = props.inputs[props.name].trim().length;
  return (
    <div className="control-group">
      <label htmlFor={props.name}>{props.labelName}</label>
      <textarea
        placeholder={props.placeholder}
        rows="7"
        id={props.name}
        value={props.inputs[props.name]}
        onChange={(e) => {
          props.handleChange(props.name, e.target.value);
        }}
      />
      {ln <= 600 ? (
        <span className="counter">{ln} / 600 characters</span>
      ) : (
        <span className="invalid">
          You reached the limit of characters! Please explain yourself shorter!
        </span>
      )}
      {props.errors[props.name] && (
        <span className="invalid">{props.errors[props.name]}</span>
      )}
    </div>
  );
};

export default Area;
