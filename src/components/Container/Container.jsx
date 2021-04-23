import React from "react";
import $ from "styled-components";

const $Container = $.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = ({ children }) => {
  return <$Container className="container">{children}</$Container>;
};

export default Container;
