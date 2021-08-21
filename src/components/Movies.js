import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import styled from "styled-components";

const MovieList = styled.div`
  margin: 0 100px;
  display: grid;
  gap: 50px;
  place-items: center;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

function Movies() {
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
    <MovieList>
      {movieList.map((movie) => {
        if (movie.cover !== null) {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              cover={movie.cover}
              duration={movie.duration}
              overview={movie.overview}
              trailer={movie.trailer}
              release_date={movie.release_date}
            ></Card>
          );
        } else return "";
      })}
    </MovieList>
  );
}

export default Movies;
