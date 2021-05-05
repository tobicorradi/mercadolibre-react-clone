import React from "react";
import $ from "styled-components";
const $Card = $.div`
    text-align:center;
`;
const Card = ({ icon, title, text, link }) => {
  return (
    <$Card>
      <div className="">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <a href="">{link}</a>
      </div>
    </$Card>
  );
};

export default Card;
