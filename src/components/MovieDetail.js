import React from "react";
import styled, { keyframes } from "styled-components";

import Carousel, {
  arrowsPlugin,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import default_user from "../images/user.svg";
import play_button from "../images/play_button.svg";
import one_star from "../images/stars/stars1.svg";
import two_stars from "../images/stars/stars2.svg";
import three_stars from "../images/stars/stars3.svg";
import four_stars from "../images/stars/stars4.svg";
import five_stars from "../images/stars/stars5.svg";
import no_stars from "../images/stars/no_stars.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MoviePage = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

  font-family: Prompt, sans-serif;
  color: white;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.24, 0.04, 0.78, 0.92);
  animation-fill-mode: both;
`;

const MovieCover = styled.img`
  width: 400px;

  border-radius: 30px;
  border: 3px solid #ff0043;
  box-shadow: 0px 10px 30px -4px rgba(255, 0, 67, 0.5);
`;

const MovieData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: rgba(255, 255, 255, 0.1); */
  width: 80%;
`;

const MainDetails = styled.div`
  display: flex;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
  font-size: 3rem;
`;

const Overview = styled.p`
  color: white;
  font-size: 1.4rem;
`;

const Highlights = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Year = styled.div`
  height: max-content;
  width: max-content;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 5px 20px;
  background: rgba(25, 26, 29, 0.5);
  border: 2px solid rgba(255, 0, 67, 0.8);
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Duration = styled.div`
  margin-left: 10px;
  height: max-content;
  width: max-content;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 5px 20px;
  background: rgba(25, 26, 29, 0.5);
  border: 2px solid rgba(255, 0, 67, 0.8);
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const RateAndCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-right: 100px;
`;

const Rate = styled.img`
  margin-top: 30px;
  width: 80%;
`;

const Person = styled.div`
  background: url(${({ personImage }) => personImage}) no-repeat center;
  background-size: cover;

  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;

  padding: 20px;

  height: 400px;
  width: 400px;
`;

const SliderButton = styled.button`
  background: transparent;
  border: none;
  transition: 100ms cubic-bezier(0.24, 0.04, 0.78, 0.92);

  &:hover {
    filter: opacity(0.5);
  }
`;

const RightImage = styled.img`
  width: 30px;
  height: 30px;
`;

const LeftImage = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(-180deg);
`;

const Header = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const ActorData = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.3;
  text-decoration: italic;
`;

const ActorDataLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr;

  font-size: 1.2rem;
`;

const ActorDataLineHeader = styled.span`
  font-style: italic;
  font-weight: bold;
`;

const checkRate = (movie_rate) => {
  if (movie_rate === 1) return one_star;
  else if (movie_rate === 2) return two_stars;
  else if (movie_rate === 3) return three_stars;
  else if (movie_rate === 4) return four_stars;
  else if (movie_rate === 5) return five_stars;
  else return no_stars;
};

const MovieDetail = ({
  location: {
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
  },
}) => {
  return (
    <MoviePage>
      <MovieData>
        <MainDetails>
          <RateAndCover>
            <MovieCover src={cover} />
            <Rate src={checkRate(rate)} alt="" />
          </RateAndCover>
          <Data>
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
            </Highlights>
            <Overview>{overview}</Overview>
          </Data>
        </MainDetails>

        <Header>Cast</Header>
        <Carousel
          plugins={[
            "centered",
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <SliderButton>
                    <LeftImage src={play_button} alt="" />
                  </SliderButton>
                ),
                arrowLeftDisabled: (
                  <SliderButton>
                    <LeftImage
                      style={{ filter: "opacity(0.5)" }}
                      src={play_button}
                      alt=""
                    />
                  </SliderButton>
                ),
                arrowRight: (
                  <SliderButton>
                    <RightImage src={play_button} alt="" />
                  </SliderButton>
                ),
                arrowRightDisabled: (
                  <SliderButton>
                    <RightImage
                      style={{ filter: "opacity(0.5)" }}
                      src={play_button}
                      alt=""
                    />
                  </SliderButton>
                ),
                addArrowClickHandler: true,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
        >
          {cast.map(({ full_name, born, country, city }) => {
            return (
              <Person personImage={cover}>
                <ActorData>
                  <ActorDataLine>
                    <ActorDataLineHeader>Full Name:</ActorDataLineHeader>
                    {full_name}
                  </ActorDataLine>
                  <ActorDataLine>
                    <ActorDataLineHeader>Birth Date:</ActorDataLineHeader>
                    {born === null
                      ? "date unknown"
                      : born.split("-").reverse().join(".")}
                  </ActorDataLine>
                  <ActorDataLine>
                    <ActorDataLineHeader>Country:</ActorDataLineHeader>
                    {country}
                  </ActorDataLine>
                  <ActorDataLine>
                    <ActorDataLineHeader>City:</ActorDataLineHeader>
                    {city}
                  </ActorDataLine>
                </ActorData>
              </Person>
            );
          })}
        </Carousel>

        <Header>Trailer</Header>
      </MovieData>
    </MoviePage>
  );
};

export default MovieDetail;
