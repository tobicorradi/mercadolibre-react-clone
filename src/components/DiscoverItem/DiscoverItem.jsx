import React from "react";
import $ from "styled-components";
import FlexWrapper from "./../FlexWrapper";
import Button from "./../Button";
const $Item = $.div`
    background-color: white;
    width: 50%;
    padding: 5px 0 5px 30px;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    :hover{
        transition: box-shadow .1s ease-out;
        box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
    }
`;
const $Image = $.img`
    max-width: 275px;
`;
const $Title = $.h3`
    text-transform: uppercase;
    color:#4b4b4b;
    font-size: 28px;
`;
const $Subtitle = $.span`
    text-transform: uppercase;
    color:#4b4b4b;
    font-size: 11px;
    letter-spacing: 4px;
`;
const DiscoverItem = ({ title, subtitle, img }) => {
  return (
    <$Item className="discover__item">
      <a href="">
        <FlexWrapper justify={"space-between"}>
          <div>
            <$Subtitle>¡IMPERDIBLES!</$Subtitle>
            <$Title>
              Ofertas <br /> del día
            </$Title>
            <Button text={"Ver más"} margin={"10px 0 0 0"} />
          </div>
          <div>
            <$Image src={img} alt="" />
          </div>
        </FlexWrapper>
      </a>
    </$Item>
  );
};

export default DiscoverItem;
