import { configureStore } from "@reduxjs/toolkit";
import global from './global';
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    global
  },
  middleware: [thunk]
});

export default store;
