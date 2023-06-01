import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer";
import userReducer from "./userSlice";
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    counter: counterReducer
  }
});

