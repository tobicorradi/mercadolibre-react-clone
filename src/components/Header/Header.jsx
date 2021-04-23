import React from "react";
import Logo from "../Logo";
import Container from "./../Container";
import $ from "styled-components";
import SearchBar from "./../SearchBar";
import FlexWrapper from "./../FlexWrapper";
import CreditImage from "./../../assets/img/credit.jpg";
const $CreditImg = $.img`
  max-width: 340px;
`;
const $Header = $.header`
  background-color: #fff159;
  margin: 0;
  padding: 7px;
`;
const Header = () => {
  return (
    <$Header>
      <Container>
        <FlexWrapper>
          <Logo />
          <SearchBar />
          <$CreditImg src={CreditImage} alt="" />
        </FlexWrapper>
      </Container>
    </$Header>
  );
};

export default Header;
