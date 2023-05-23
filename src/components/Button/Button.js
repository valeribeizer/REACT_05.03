import { Component } from "react";
import "./style.css";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.buttonName}
      </button>
    );
  }
}

export default Button;
