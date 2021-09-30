import React from "react";
import styled, { keyframes } from "styled-components";

// Libraries
import Carousel, {
  arrowsPlugin,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// Images
import trailer_image from "../images/trailer.svg";
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
  font-size: 4rem;
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
  display: flex;
  align-items: flex-end;

  background: url(${({ personImage }) => personImage}) no-repeat center;
  background-size: cover;

  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;

  padding: 20px;

  height: 600px;
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
  font-size: 3rem;
  font-weight: bold;
  margin-top: 200px;
  margin-bottom: 20px;
`;

const ActorData = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px 15px;

  border-radius: 10px;
  background: rgba(25, 26, 29, 0.7);
  backdrop-filter: blur(10px);

  font-size: 1.3rem;
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

const CustomizedCarousel = styled(Carousel)`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;

  padding: 20px;
`;

const Reviews = styled.div`
  width: 100%;
  height: max-content;
`;

const ReviewBox = styled.div`
  position: relative;

  padding: 20px 0;
`;

const ReviewBackground = styled.div`
  margin: 30px 0;
  padding: 30px;

  word-wrap: wrap;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;

const UserReview = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;

const UserLogo = styled.img`
  width: 50px;
`;

const UserLogoBackground = styled.div`
  background: #4d4d4d;
  border: 7px solid #191a1d;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 50px;
  z-index: 10;

  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

const UserName = styled.span`
  font-style: italic;
  font-weight: bold;
  font-size: 1.3rem;

  justify-self: end;
`;

const ReviewText = styled.span`
  font-size: 1.4rem;
`;

const Comment = styled.span`
  opacity: 0.5;
  font-size: 1.3rem;
  font-weight: bold;
`;

const ReviewTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const checkRate = (movie_rate) => {
  if (movie_rate === 1) return one_star;
  else if (movie_rate === 2) return two_stars;
  else if (movie_rate === 3) return three_stars;
  else if (movie_rate === 4) return four_stars;
  else if (movie_rate === 5) return five_stars;
  else return no_stars;
};

const carouselSettings = [
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
      numberOfSlides: 3,
    },
  },
  {
    resolve: slidesToScrollPlugin,
    options: {
      numberOfSlides: 1,
    },
  },
];

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
        <CustomizedCarousel plugins={carouselSettings}>
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
        </CustomizedCarousel>

        <Header>Trailer</Header>
        <img src={trailer_image} alt="" />

        <Header>Reviews</Header>
        <Reviews>
          {reviews.map(({ user, review }) => {
            return (
              <ReviewBox>
                <UserLogoBackground>
                  <UserLogo src={default_user} alt="" />
                </UserLogoBackground>
                <ReviewBackground>
                  <UserReview>
                    <UserName>{user}</UserName>
                    <div>
                      <ReviewTextBox>
                        <Comment>Comment:</Comment>
                        <ReviewText>{review}</ReviewText>
                      </ReviewTextBox>
                    </div>
                  </UserReview>
                </ReviewBackground>
              </ReviewBox>
            );
          })}
        </Reviews>
      </MovieData>
    </MoviePage>
  );
};

export default MovieDetail;
