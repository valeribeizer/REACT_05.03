import React from "react";
import "./style.css";

const Form = (props) => {
  return (
    <form className="form-control">
      <div className="control-group">{props.children}</div>
    </form>
  );
};

export default Form;
