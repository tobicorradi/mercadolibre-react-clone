import React from "react";
import Logo from "../Logo";
import Container from "./../Container";
import $ from "styled-components";
import SearchBar from "./../SearchBar";
import FlexWrapper from "./../FlexWrapper";
import CreditImage from "./../../assets/img/credit.jpg";
import LocationButton from "./../LocationButton";
import Menu from "./../Menu";
const $CreditImg = $.img`
  max-width: 340px;
`;
const $Header = $.header`
  background-color: #fff159;
  margin: 0;
  padding: 7px;
  color: #8f8f8f !important;
  box-shadow: var(--shadow);
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
        <FlexWrapper justify={'unset'} margin={'10px 0 0 0'}>
          <LocationButton />
          <Menu />
        </FlexWrapper>
      </Container>
    </$Header>
  );
};

export default Header;
