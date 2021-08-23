import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";

import marvel_logo from "../images/marvel-logo.png";

const HeaderMenu = styled.div`
  padding: 20px 0;
  width: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.ul`
  padding: 0;
  margin: 50px 0;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
  }
`;

const MenuItem = styled.li`
  list-style-type: none;
  padding: 10px;
  font-family: Bangers;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  position: relative;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  transition: 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  /* &:hover {
    background: rgba(255, 0, 67, 1);
    transform: rotate(7deg) skewX(5deg);
  } */

  &::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;

    background: rgba(255, 0, 67, 1);
    transform: skew(-5deg);

    transition: 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  &::before {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    opacity: 0;

    background: rgba(255, 0, 67, 1);
    transform: skew(5deg);

    transition: 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  &:hover::before {
    content: "";
    opacity: 1;
  }

  &:hover::after {
    content: "";
    opacity: 1;
  }

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 50px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191a1d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;

  margin-bottom: 50px;
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HamburgerBox = styled.div`
  position: fixed;
  right: 10px;
  top: 20px;
  z-index: 11;
`;

const MobileLogo = styled.div`
  margin: 20px;
`;

const HamburgerMobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  background: #191a1d;
  pointer-events: all;

  transform: ${(props) =>
    props.isOpen ? "translateX: (0)" : "translateX(-100%)"};
  transition: 500ms cubic-bezier(0, 0, 0, 1);
`;

const MobileUl = styled.ul`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

// ------------------------------------------------------------------

function Header() {
  const linkStyle = {
    "text-decoration": "none",
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <HeaderMenu>
        <Link to="/">
          <Logo src={marvel_logo} />
        </Link>
        <Menu>
          <Link to="/comics" style={linkStyle}>
            <MenuItem>Comics</MenuItem>
          </Link>
          <Link to="/movies" style={linkStyle}>
            <MenuItem>Movies</MenuItem>
          </Link>
          <Link to="/tv_shows" style={linkStyle}>
            <MenuItem>TV shows</MenuItem>
          </Link>
          <Link to="/characters" style={linkStyle}>
            <MenuItem>Characters</MenuItem>
          </Link>
        </Menu>
      </HeaderMenu>
      <MobileMenu>
        <Link to="/">
          <MobileLogo>
            <Logo src={marvel_logo} />
          </MobileLogo>
        </Link>
        <HamburgerBox>
          <Hamburger
            color="white"
            hideOutline={true}
            duration={0.5}
            toggled={isOpen}
            toggle={setOpen}
          />
        </HamburgerBox>
        <HamburgerMobileMenu isOpen={isOpen}>
          <MobileUl>
            <Link to="/comics" style={linkStyle}>
              <MenuItem>Comics</MenuItem>
            </Link>
            <Link to="/movies" style={linkStyle}>
              <MenuItem>Movies</MenuItem>
            </Link>
            <Link to="/tv_shows" style={linkStyle}>
              <MenuItem>TV shows</MenuItem>
            </Link>
            <Link to="/characters" style={linkStyle}>
              <MenuItem>Characters</MenuItem>
            </Link>
          </MobileUl>
        </HamburgerMobileMenu>
      </MobileMenu>
    </div>
  );
}

export default Header;
