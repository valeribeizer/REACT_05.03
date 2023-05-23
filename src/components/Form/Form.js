import { Component } from "react";
import "./style.css";

class Form extends Component {
  render() {
    return (
      <form className="form-control">
        <div className="control-group">
          {this.props.children}
        </div>
      </form>
    );
  }
}

export default Form;
