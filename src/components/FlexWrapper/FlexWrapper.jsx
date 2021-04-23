import React from "react";
import styled from "styled-components";
const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FlexWrapper = ({ children }) => {
  return <StyledFlexWrapper>{children}</StyledFlexWrapper>;
};

export default FlexWrapper;
