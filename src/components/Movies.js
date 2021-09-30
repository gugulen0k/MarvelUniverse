import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/actions";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MovieList = styled.div`
  margin: 0 100px;
  display: grid;
  gap: 50px;
  place-items: center;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.24, 0.04, 0.78, 0.92);
  animation-fill-mode: both;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (max-width: 1024px) {
    margin-top: 150px;
  }
`;

const Loading = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    background: #191a1d;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const ErrorComponent = ({ name }) => {
  return <div>{name}</div>;
};

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorComponent name={error.name} />;
  }
  if (!movies && !movies.length) {
    return null;
  }
  return (
    <MovieList>
      {movies.map((movie) => {
        if (movie.cover !== null) {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              cover={movie.cover}
              duration={movie.duration}
              overview={movie.overview}
              trailer={movie.trailer}
              release_date={movie.release_date}
              rate={movie.rate}
              cast={movie.cast}
              reviews={movie.reviews}
            />
          );
        } else return "";
      })}
    </MovieList>
  );
};

export default Movies;
