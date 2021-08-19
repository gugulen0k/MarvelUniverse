import React from "react";
import Card from "./Card.js";
import styled from "styled-components";

const MovieList = styled.div`
  margin: 0 100px;
  display: grid;
  gap: 50px;
  place-items: center;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

function Movies({ movieList }) {
  return (
    <MovieList>
      {movieList.map((movie) => {
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
      })}
    </MovieList>
  );
}

export default Movies;
