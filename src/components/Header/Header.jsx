import React from "react";
import Logo from "../Logo";
import Container from "./../Container";
import styled from "styled-components";
import SearchBar from "./../SearchBar";
import FlexWrapper from "./../FlexWrapper";
import CreditImage from "./../../assets/img/credit.jpg";
const StyledCreditImg = styled.img`
  max-width: 340px;
`;
const StyledHeader = styled.header`
  background-color: #fff159;
  margin: 0;
  padding: 7px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          <Logo />
          <SearchBar />
          <StyledCreditImg src={CreditImage} alt="" />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
