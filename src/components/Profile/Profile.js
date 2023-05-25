import React from "react";
import "./style.css";

const Profile = (props) => {
  return (
    <div className="reseting">
      <h1>{props.name + " " + props.surname}</h1>
      <div className="summary">
        <h2>The Date of Birth: </h2>
        <p> {props.dateOfBirth}</p>
        <h2>Phone Number: </h2>
        <p>{props.phone}</p>
        <h2>Website: </h2>
        <p>{props.webSite}</p>
        <h2>About: </h2>
        <p>{props.about}</p>
        <h2>Stack:</h2>
        <p>{props.stack}</p>
        <h2>Project's Description:</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Profile;
