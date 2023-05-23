import { Component } from "react";
import "./style.css";

class Area extends Component {
  handleChange = (e) => {
    this.props.setState((prev) => ({
      ...prev,
      [this.props.name]: e.target.value,
      errors: {
        ...prev.errors,
        [this.props.name + "Error"]:
          e.target.value.trim().length > 600
            ? "You reached the limit of characters! Please explain yourself shorter!"
            : "",
      },
    }));
  };

  render() {
    return (
      <div className="control-group">
        <label htmlFor={this.props.name}>{this.props.labelName}</label>
        <textarea
          placeholder={this.props.text}
          rows="7"
          id={this.props.name}
          value={this.props.state[this.props.name]}
          onChange={this.handleChange}
        />
        {this.props.state[this.props.name].trim().length <= 600 && (
          <span className="counter">
            {this.props.state[this.props.name].trim().length} / 600 characters
          </span>
        )}
        {this.props.state.errors[this.props.name + "Error"] && (
          <span className="invalid">
            {this.props.state.errors[this.props.name + "Error"]}
          </span>
        )}
      </div>
    );
  }
}

export default Area;
