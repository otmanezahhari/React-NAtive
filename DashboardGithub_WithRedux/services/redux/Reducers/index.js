import { combineReducers } from "redux";
import {UserRepos} from "./Repos"



const reducers = combineReducers({
  Repos: UserRepos,

});

export default reducers;