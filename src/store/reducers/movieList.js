const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES_REQUESTED":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.movies };
    case "GET_MOVIES_FAILED":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default movies;
