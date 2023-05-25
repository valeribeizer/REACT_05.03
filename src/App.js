import React, { useState } from "react";
import Area from "./components/Area/Area";
import Button from "./components/Button/Button";
import Field from "./components/Fields/Field";
import Form from "./components/Form/Form";
import PhoneField from "./components/Fields/PhoneField";
import Profile from "./components/Profile/Profile";
import Title from "./components/Title";
import { validation } from "./helpers/validation";

const App = () => {
  const initialState = {
    name: "",
    surname: "",
    dateOfBirth: "",
    phone: "",
    webSite: "",
    about: "",
    stack: "",
    description: "",
  };

  const [displayProfile, setDisplayProfile] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (input, value) => {
    setInputs((prev) => ({ ...prev, [input]: value.trimStart() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation(inputs);
    setErrors(error);
    if (!Object.values(error).length) {
      setDisplayProfile(true);
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setDisplayProfile(false);
    setInputs(initialState);
    setErrors({});
  };

  if (displayProfile) {
    return <Profile {...inputs} />;
  } else {
    return (
      <div className="app">
        <Form>
          <Title name="Registration Form" />
          <Field
            labelName="Name"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Field
            labelName="Surname"
            type="text"
            name="surname"
            placeholder="Enter Your Surname"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Field
            labelName="The Date of Birth"
            type="date"
            name="dateOfBirth"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <PhoneField
            labelName="Phone Number"
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Field
            labelName="Web-Site"
            type="url"
            name="webSite"
            placeholder="Enter URL of Your Website"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Area
            labelName="Tell Us a Bit More About Yourself"
            name="about"
            placeholder="Tell About Yourself"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Area
            labelName="Stack"
            name="stack"
            placeholder="What's your Stack?"
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <Area
            labelName="Describe Your Last Project"
            name="description"
            placeholder="Your Last Project. Be short.."
            inputs={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <div className="form-actions">
            <Button buttonName="Submit" onClick={handleSubmit} />
            <Button buttonName="Cancel" onClick={resetForm} />
          </div>
        </Form>
      </div>
    );
  }
};

export default App;
