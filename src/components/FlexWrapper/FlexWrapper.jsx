import React from "react";
import $ from "styled-components";
const $FlexWrapper = $.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "flex-start"}
`;
const FlexWrapper = ({ children, justify }) => {
  return <$FlexWrapper justify={justify}>{children}</$FlexWrapper>;
};

export default FlexWrapper;
