import { Component } from 'react';
import "./style.css";

class Field extends Component {
  handleChange = (e) => {
    this.props.setState((prev) => ({
      ...prev,
      [this.props.name]: e.target.value,
      errors: { ...prev.errors, [this.props.name + "Error"]: "" },
    }));
  };

  render() {
    return (
      <div className="control-group">
        <label htmlFor={this.props.name}>{this.props.labelName}</label>
        <input
          placeholder={this.props.text}
          type={this.props.type}
          id={this.props.name}
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

export default Field;
