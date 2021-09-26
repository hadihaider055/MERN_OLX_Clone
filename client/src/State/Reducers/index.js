import { combineReducers } from "redux";
import productReducer from "./products";
import authReducer from "./Auth";

export default combineReducers({
  productReducer,
  authReducer,
});
