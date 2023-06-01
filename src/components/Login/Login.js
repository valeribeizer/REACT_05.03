import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import "./style.css";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(name));
    if (!name) alert `Don't you have a name?`;
  };

  return (
    <div className="login">
      <form className="login_form">
        <h1>Your name please</h1>
        <input
          required
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="submit_btn" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
