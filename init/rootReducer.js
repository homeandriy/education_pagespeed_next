// Core
import { combineReducers } from 'redux';

// Reducers
import { profileReducer as profile } from "../bus/profile/reducer";
import { catsReducer as cats } from "../bus/cats/reducer";

export const rootReducer = combineReducers({
  profile,
  cats,
});