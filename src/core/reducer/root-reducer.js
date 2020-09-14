import { combineReducers } from "redux";
import authReducer from 'states/auth';

const createReducer = asyncReducers =>
  combineReducers({
    auth: authReducer,
    ...asyncReducers
  });

export default createReducer;
