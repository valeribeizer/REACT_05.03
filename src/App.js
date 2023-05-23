import { Component } from "react";
import Area from "./components/Area/Area";
import Button from "./components/Button/Button";
import Field from "./components/Fields/Field";
import Form from "./components/Form/Form";
import PhoneField from "./components/Fields/PhoneField";
import Profile from "./components/Profile/Profile";
import Title from "./components/Title";
import { validation } from "./helpers/validation";

const initialErrors = {
  nameError: "",
  surnameError: "",
  dateOfBirthError: "",
  phoneError: "",
  webSiteError: "",
  aboutError: "",
  stackError: "",
  descriptionError: "",
};

const initialState = {
  displayProfile: false,
  name: "",
  surname: "",
  dateOfBirth: "",
  phone: "",
  webSite: "",
  about: "",
  stack: "",
  description: "",
  errors: initialErrors,
};

class App extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
    this.setState = this.setState.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let trimedState = {};
    for (let it in this.state) {
      if (it !== "errors" && it !== "displayProfile") {
        trimedState[it] = this.state[it].trim();
      }
    }
    this.setState({ ...trimedState }, () =>
      validation(this.state, this.setState)
    );
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState(initialState);
  };

  render() {
    if (this.state.displayProfile) {
      return <Profile {...this.state} />;
    } else {
      return (
        <div className="app">
          <Form>
            <Title name="Registration Form" />
            <Field
              state={this.state}
              setState={this.setState}
              labelName="Name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
            <Field
              state={this.state}
              setState={this.setState}
              labelName="Surname"
              type="text"
              name="surname"
              placeholder="Enter Your Surname"
            />
            <Field
              state={this.state}
              setState={this.setState}
              labelName="The Date of Birth"
              type="date"
              name="dateOfBirth"
            />
            <PhoneField
              state={this.state}
              setState={this.setState}
              labelName="Phone Number"
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
            />
            <Field
              state={this.state}
              setState={this.setState}
              labelName="Web-Site"
              type="url"
              name="webSite"
              placeholder="Enter URL of Your Website"
            />
            <Area
              state={this.state}
              setState={this.setState}
              labelName="Tell Us a Bit More About Yourself"
              name="about"
              placeholder="Tell About Yourself"
            />
            <Area
              state={this.state}
              setState={this.setState}
              labelName="Stack"
              name="stack"
              placeholder="What's your Stack?"
            />
            <Area
              state={this.state}
              setState={this.setState}
              labelName="Describe Your Last Project"
              name="description"
              placeholder="Your Last Project. Be short.."
            />
            <div className="form-actions">
              <Button buttonName="Submit" onClick={this.handleSubmit} />
              <Button buttonName="Cancel" onClick={this.resetForm} />
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default App;
