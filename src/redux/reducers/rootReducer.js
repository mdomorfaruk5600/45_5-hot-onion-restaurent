import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import foodReducer from "./foodReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({cartReducer, foodReducer, formReducer});

export default rootReducer;