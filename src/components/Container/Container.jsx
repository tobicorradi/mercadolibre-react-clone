import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = (props) => {
  return (
    <StyledContainer className="container">{props.children}</StyledContainer>
  );
};

export default Container;
