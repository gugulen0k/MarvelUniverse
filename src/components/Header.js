import React from "react";
import styled from "styled-components";
import marvel_logo from "../images/marvel-logo.png";

const HeaderMenu = styled.div`
  padding: 20px 0;
  width: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 100px;
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
  }
`;

const MenuItem = styled.li`
  list-style-type: none;
  padding: 0;
  font-family: Bangers;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
  cursor: pointer;
`;

function Header() {
  return (
    <div>
      <HeaderMenu>
        <Logo src={marvel_logo} />
        <Menu>
          <MenuItem>Comics</MenuItem>
          <MenuItem>Movies</MenuItem>
          <MenuItem>TV shows</MenuItem>
          <MenuItem>Characters</MenuItem>
        </Menu>
      </HeaderMenu>
    </div>
  );
}

export default Header;
