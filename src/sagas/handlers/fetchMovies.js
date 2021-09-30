import { call, put, takeEvery } from "redux-saga/effects";
import fetchGetMovies from "../requests/fetchMovies";

function* handleGetMovies() {
  try {
    const movies = yield call(fetchGetMovies);
    yield put({ type: "GET_MOVIES_SUCCESS", movies: movies });
  } catch (err) {
    yield put({ type: "GET_MOVIES_FAILED", message: err.message });
  }
}

function* watcherMoviesSaga() {
  yield takeEvery("GET_MOVIES_REQUESTED", handleGetMovies);
}

export default watcherMoviesSaga;
