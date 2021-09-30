const url = "http://localhost:3001/movie_list";

const fetchGetMovies = () => {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) =>
      data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          duration: movie.duration,
          overview: movie.overview,
          cover: movie.cover,
          trailer: movie.trailer,
          rate: movie.rate,
          cast: movie.cast,
          reviews: movie.reviews,
        };
      })
    )
    .catch((error) => {
      throw error;
    });
};

export default fetchGetMovies;
