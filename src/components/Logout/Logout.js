import React from "react";
import DisplayTodos from "../DisplayTodos/DisplayTodos";
import Todos from "../Todos/Todos";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { logout } from "../../redux/userSlice";
import "./style.css";

const Logout = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const counter = useSelector((state) => state.counter);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Welcome, <span>{user}</span>!
      </motion.h1>
      {counter.counter === 0 ? (
        <motion.h2>You have nothing to do!</motion.h2>
      ) : (
        <motion.h2>
          So..you have <span>{counter.counter}</span>{" "}
          {counter.counter > 1 ? "tasks" : "task"} to do! Start moving!
        </motion.h2>
      )}
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
