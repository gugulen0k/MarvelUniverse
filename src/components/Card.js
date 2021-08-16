import React from "react";
import styled, { keyframes } from "styled-components";
import play_button from "../images/play_button.svg";

const Info = styled.div`
  display: none;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(180deg, rgba(25, 26, 29, 0) 0%, #191a1d 25%);
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
  font-family: Prompt;
  color: white;
  width: 500px;
  height: 500px;
  background: url("https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/spider-man-no-way-home.jpg")
    no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid #26282d;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.1);
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
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
  }
`;

const Title = styled.div`
  cursor: default;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`;

const PlayButton = styled.img`
  margin-right: 10px;
`;

const Description = styled.div`
  cursor: default;
  margin-top: 10px;
  font-size: 1.2rem;
  text-align: justify;
`;

const ReadMoreButton = styled.button`
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

function Card() {
  return (
    <MovieCard>
      <Info>
        <Title>Spider-Man: No Way Home</Title>
        <Highlights>
          <Year>2021</Year>
          <Duration>129min</Duration>
          <Trailer>
            <PlayButton src={play_button} />
            TRAILER
          </Trailer>
        </Highlights>
        <Description>
          Marvel Studios' Eternals features an exciting new team of Super Heroes
          in the Marvel Cinematic Universe, ancient aliens who have been living
          on Earth in secret for thousands...
        </Description>
        <ReadMoreButton>READ MORE</ReadMoreButton>
      </Info>
    </MovieCard>
  );
}

export default Card;