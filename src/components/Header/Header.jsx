import React from "react";
import Logo from "./../Logo";
import Container from "./../Container";
import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: #fff159;
  margin: 0;
  padding: 5px;
`;
const Header = () => {
  return (
    <StyledHeader className="header">
      <Container>
        <Logo />
      </Container>
    </StyledHeader>
  );
};

export default Header;
