import React from "react";
import Logo from "./../Logo";
import Container from "./../Container";
import styled from "styled-components";
const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        Soy un header :D
      </Container>
    </header>
  );
};

export default Header;
