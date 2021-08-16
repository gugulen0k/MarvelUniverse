import React from "react";
import Card from "./Card.js";
import styled from "styled-components";

const MovieList = styled.div`
  margin: 0 20px;
  display: grid;
  gap: 50px;
  place-items: center;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

function Movies() {
  return (
    <MovieList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MovieList>
  );
}

export default Movies;
