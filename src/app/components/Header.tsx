import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/d2r-icon.png";

function Header() {
  return (
    <Container>
      <Logo src={logo} />
      <p>
        You have died. Press ESC to continue. Your deeds of valor will be
        remembered.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;

  p {
    font-weight: 500;
    width: 100%;
    font-size: x-large;
    text-align: center;
    align-content: center;
    color: rgb(165, 133, 70);
  }
`;

const Logo = styled.img``;

export default Header;
