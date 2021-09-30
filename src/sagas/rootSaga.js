import { all } from "redux-saga/effects";
import watcherMoviesSaga from "./handlers/fetchMovies";

export default function* rootSaga() {
  yield all([watcherMoviesSaga()]);
}
