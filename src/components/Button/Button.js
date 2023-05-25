import React from "react";
import "./style.css";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.buttonName}</button>;
};

export default Button;
