import { combineReducers } from "redux";
import authReducer from "./authRdeucer";
import currentUserReducer from "./currentUserReducer";

export  default combineReducers(
    {
        authReducer,
        currentUserReducer,

    }
);