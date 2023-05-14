import { Component } from "react";

class Area extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea placeholder={this.props.text} rows="7" id={this.props.id} />
      </div>
    );
  }
}

export default Area;
