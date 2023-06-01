import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/counterSlice";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import  './style.css';

const Todos = () => {
  const [todo, setTodo] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    if (todo === "") {
      alert("Input cannot be empty!");
    } else {
      dispatch(
        addTodos({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          completed: false,
        })
      );
      dispatch(increment(counter));
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default Todos;
