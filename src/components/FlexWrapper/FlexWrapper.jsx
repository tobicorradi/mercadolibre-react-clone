import React from "react";
import $ from "styled-components";
const $FlexWrapper = $.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FlexWrapper = ({ children }) => {
  return <$FlexWrapper>{children}</$FlexWrapper>;
};

export default FlexWrapper;
