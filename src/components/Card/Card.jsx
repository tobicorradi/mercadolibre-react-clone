import React from "react";
import $ from "styled-components";
const $Card = $.div`
    text-align:center;
`;
const $Title = $.h4`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: #4b4b4b;
    margin: 16px 0 0;
`;
const $Text = $.p`
    font-size: 13px;
    font-weight: 300;
    line-height: 1.7;
    color: #4b4b4b;
    margin-top:7px;
    max-width: 300px;
`;
const $Link = $.a`
    color: #3483fa;
    margin-top:8px;
    font-size:13px;
    display: block;
`;
const Card = ({ icon, title, text, link }) => {
  return (
    <$Card>
      <div className="">{icon}</div>
      <div>
        <$Title>{title}</$Title>
        <$Text>{text}</$Text>
        <$Link href="">{link}</$Link>
      </div>
    </$Card>
  );
};

export default Card;
