import { combineReducers } from "redux";
import products from "./productReducer.js";
import users from "./userReducer.js";

export default combineReducers({
  users
});
