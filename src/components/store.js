// import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/contactReducer";
import contactReducer from "./reducers/contactReducer";

const initialState = {};

const middleware = [thunk];
const store = configureStore({
  reducer: {
    root: rootReducer,
    contact: contactReducer,
  },
});

export default store;
