import React from "react";
import FlexWrapper from "./../FlexWrapper";
import Title from "./../Title";
import DiscoverItem from "./../DiscoverItem";
import Left from "./../../assets/img/discoveryLeft.webp";
import Right from "./../../assets/img/discoveryRight.webp";

const Discover = () => {
  return (
    <div>
      <Title text={"Descubrí"} />
      <FlexWrapper>
        <DiscoverItem img={Left} />
        <DiscoverItem img={Right} />
      </FlexWrapper>
    </div>
  );
};

export default Discover;
