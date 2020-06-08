import { combineReducers } from "redux";
import navbarReducer from "./navbar";
import dashboardReducer from "./dashboard";


const rootReducer = combineReducers({ navbarReducer, dashboardReducer});
export default rootReducer;
