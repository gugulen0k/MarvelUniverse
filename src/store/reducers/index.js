import { combineReducers } from "redux";
import movies from "./movieList";

const allReducers = combineReducers({
  movies: movies,
});

export default allReducers;
