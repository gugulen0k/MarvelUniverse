import React from "react";
import styled, { keyframes } from "styled-components";
import play_button from "../images/play_button.svg";
import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(180deg, rgba(25, 26, 29, 0) 0%, #191a1d 25%);

  @media (min-width: 600px) {
    width: 100%;
  } ;
`;

const dropUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dropDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
    display: none;
  }
`;

const MovieCard = styled.div`
  font-family: Prompt, serif;
  color: white;

  width: 200px;
  height: 300px;

  background: url(${(props) => props.coverImage}) no-repeat center;
  background-size: cover;

  border: 1px solid #26282d;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  overflow: hidden;

  display: flex;
  align-items: flex-end;

  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.25);
  }

  @media (min-width: 600px) {
    width: 240px;
    height: 400px;

    &:hover {
      transform: scale(1.05);
      width: 500px;
    }

    &:hover ${Info} {
      display: flex;
      animation-name: ${dropUp};
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-fill-mode: both;
    }
    &:not(:hover) ${Info} {
      display: flex;
      animation-name: ${dropDown};
      animation-duration: 0.1s;
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-fill-mode: both;
    }
  }

  @media (min-width: 1024px) {
    width: 340px;
    height: 500px;

    &:hover {
      transform: scale(1.1);
      width: 500px;
    }

    &:hover ${Info} {
      display: flex;
      animation-name: ${dropUp};
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-fill-mode: both;
    }
    &:not(:hover) ${Info} {
      display: flex;
      animation-name: ${dropDown};
      animation-duration: 0.1s;
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-fill-mode: both;
    }
  }
`;

const Title = styled.div`
  cursor: default;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Highlights = styled.div`
  cursor: default;
  margin-top: 10px;
  display: flex;
  width: 100%;
`;

const Year = styled.div`
  height: max-content;
  width: max-content;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 20px;
  background: rgba(25, 26, 29, 0.5);
  border: 1px solid rgba(255, 0, 67, 0.8);
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Duration = styled.div`
  margin-left: 10px;
  height: max-content;
  width: max-content;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 20px;
  background: rgba(25, 26, 29, 0.5);
  border: 1px solid rgba(255, 0, 67, 0.8);
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Trailer = styled.div`
  margin-left: 10px;
  height: max-content;
  width: max-content;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 20px;
  background: rgba(25, 26, 29, 0.5);
  border: 1px solid rgba(255, 0, 67, 0.8);
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const PlayButton = styled.img`
  margin-right: 10px;
  width: 10px;
`;

const Description = styled.div`
  cursor: default;
  margin-top: 10px;
  font-size: 1.2rem;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ff0043;
  margin-top: 15px;
  color: #ff0043;
  font-size: 1.3rem;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background: transparent;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background: #ff0043;
    color: white;
  }
`;

const Card = ({
  id,
  title,
  cover,
  trailer,
  overview,
  duration,
  release_date,
  rate,
  cast,
  reviews,
}) => {
  console.log(trailer);
  return (
    <MovieCard coverImage={cover}>
      <Info>
        <Title>{title}</Title>
        <Highlights>
          <Year>
            {release_date === null
              ? "date unknown"
              : release_date.split("-").reverse().join(".")}
          </Year>
          <Duration>
            {Math.floor(duration / 60)}h. {duration % 60} min.
          </Duration>
          {trailer === false ? (
            ""
          ) : (
            <Trailer>
              <PlayButton src={play_button} />
              TRAILER
            </Trailer>
          )}
        </Highlights>
        <Description>
          {overview === null ? "no description" : overview.slice(0, 150)}...
        </Description>

        <StyledLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              id,
              title,
              cover,
              trailer,
              overview,
              duration,
              release_date,
              rate,
              cast,
              reviews,
            },
          }}
        >
          <span>READ MORE</span>
        </StyledLink>
      </Info>
    </MovieCard>
  );
};

export default Card;
