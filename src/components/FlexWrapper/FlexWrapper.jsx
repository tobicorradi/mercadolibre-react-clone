import React from "react";
import $ from "styled-components";
const $FlexWrapper = $.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0"}
`;
const FlexWrapper = ({ children, justify, margin }) => {
  return (
    <$FlexWrapper className="flex-container" justify={justify} margin={margin}>
      {children}
    </$FlexWrapper>
  );
};

export default FlexWrapper;
