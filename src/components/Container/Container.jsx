import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = ({children}) => {
  return (
    <StyledContainer className="container">{children}</StyledContainer>
  );
};

export default Container;
