import { Component } from "react";
import "./style.css";

class PhoneField extends Component {
  handleChange = (e) => {
    this.props.setState((prev) => ({
      ...prev,
      [this.props.name]: e.target.value,
      errors: { ...prev.errors, [this.props.name + "Error"]: "" },
    }));

    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2]
      ? x[1]
      : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "");
  };

  render() {
    return (
      <div className="control-group">
        <label htmlFor={this.props.name}>{this.props.labelName}</label>
        <input
          placeholder={this.props.text}
          id={this.props.name}
          type={this.props.type}
          value={this.props.state[this.props.name]}
          onChange={this.handleChange}
        />
        {this.props.state.errors[this.props.name + "Error"] && (
          <span className="invalid">
            {this.props.state.errors[this.props.name + "Error"]}
          </span>
        )}
      </div>
    );
  }
}

export default PhoneField;
