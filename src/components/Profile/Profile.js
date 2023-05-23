import { Component } from "react";
import "./style.css";

class Profile extends Component {
  render() {
    return (
      <div className="reseting">
        <h1>{this.props.name + " " + this.props.surname}</h1>
        <div className="summary">
          <h2>The Date of Birth: </h2>
          <p> {this.props.dateOfBirth}</p>
          <h2>Phone Number: </h2>
          <p>{this.props.phone}</p>
          <h2>Website: </h2>
          <p>{this.props.webSite}</p>
          <h2>About: </h2>
          <p>{this.props.about}</p>
          <h2>Stack:</h2>
          <p>{this.props.stack}</p>
          <h2>Project's Description:</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
