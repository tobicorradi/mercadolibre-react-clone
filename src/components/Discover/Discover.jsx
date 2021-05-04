import React from "react";
import FlexWrapper from "./../FlexWrapper";
import Title from "./../Title";
import DiscoverItem from "./../DiscoverItem";
import Left from "./../../assets/img/discoveryLeft.webp";
import Right from "./../../assets/img/discoveryRight.webp";
import $ from "styled-components";
const $Discover = $.div`
   margin: 80px 0;
`;
const Discover = () => {
  return (
    <$Discover>
      <Title text={"Descubrí"} />
      <FlexWrapper>
        <DiscoverItem img={Left} />
        <DiscoverItem img={Right} />
      </FlexWrapper>
    </$Discover>
  );
};

export default Discover;
