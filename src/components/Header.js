import React from "react";
import styled from "styled-components";
import marvel_logo from "../images/marvel-logo.png";

const HeaderMenu = styled.div`
  background: #16171a;
  width: 100%;
  height: 100px;
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: 300px 1fr;
  place-items: center;
  border: 1px solid #26282d;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
`;

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: Bangers;
  font-size: 2rem;
  margin-left: 200px;
  color: white;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
  margin-left: 50px;
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
          <MenuItem>Characters</MenuItem>
        </Menu>
      </HeaderMenu>
    </div>
  );
}

export default Header;
