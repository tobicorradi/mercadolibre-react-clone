import React from "react";
import FlexWrapper from "./../FlexWrapper";
import Title from "./../Title";
import DiscoverItem from "./../DiscoverItem";
const Discover = () => {
  return (
    <div>
      <Title text={"Descubrí"} />
      <FlexWrapper>
        <DiscoverItem />
        <DiscoverItem />
      </FlexWrapper>
    </div>
  );
};

export default Discover;
