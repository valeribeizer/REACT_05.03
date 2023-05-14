import { Component } from "react";
import Area from "./Area";
import Button from "./Button";
import Field from "./Field";

class Form extends Component {
    render() {
        return (
          <form className="form-control">
            <div className="control-group">
              <Field name="Name" text="Enter your name" type="text" id="name"/>
              <Field name="Surname" text="Enter your surname" type="text" id="surname" />
              <Field name="Date of birth" type="date" id="birth" />
              <Field name="Phone number" text="+___-___-__-__-__" type="tel" id="phone" />
              <Field name="Web-site" text="Enter path to your web-site" type="url" id="website" />
              <Area name="About" text="Tell us about yourself" id="about" />
              <Area name="Stack" text="Stack" id="stack" />
              <Area
                name="Description of the last project"
                text="Description"
                id="project"
              />
            </div>
            <div className="form-actions">
              <Button name="Cancel" />
              <Button name="Submit" />
            </div>
          </form>
        );
    }
}

export default Form;