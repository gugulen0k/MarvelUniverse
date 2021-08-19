import "./App.css";
import React, { useState, useEffect } from "react";
import GlobalFonts from "./fonts/fonts";
import Header from "./components/Header.js";
import Movies from "./components/Movies.js";

function App() {
  const [movieList, setMovieList] = useState([]);

  // Getting list of all movies
  const getMovies = async () => {
    const result = await fetch(
      "https://mcuapi.herokuapp.com/api/v1/movies"
    ).then((response) => response.json());
    const data = result.data;

    setMovieList(
      data
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            duration: movie.duration,
            overview: movie.overview,
            cover: movie.cover_url,
            trailer: movie.trailer_url,
          };
        })
    );
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Movies movieList={movieList} />
    </div>
  );
}

export default App;
