import { combineReducers } from "redux";
import { dictionaryReducer } from "./dictionaryReducer";
import { customerReducer } from "./customerReducer";

export const rootReducer = combineReducers({ dictionaryReducer, customerReducer });