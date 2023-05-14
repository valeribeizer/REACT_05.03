import { Component } from 'react';

class Field extends Component {
  render() {
    return (
    <div>
      <label htmlFor={this.props.id}>{this.props.name}</label>
      <input placeholder={this.props.text} type={this.props.type} id={this.props.id}/>
    </div>
  );
  }
}

export default Field;
