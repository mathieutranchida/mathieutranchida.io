import { combineReducers } from "redux";

import languageReducer from "./languagesReducer";
import emailObjectReducer from "./emailObjectReducer";

export default combineReducers({ languageReducer, emailObjectReducer });
