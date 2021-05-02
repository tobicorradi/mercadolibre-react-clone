import React from "react";
import $ from "styled-components";
const $MenuButton = $.li`
    color: #a7a7a7;
    font-size: 14px;
    cursor: pointer;
    margin-right: 12px;
    letter-spacing: 1px;
`;
const MenuButton = ({ text, isExpandible }) => {
  return <$MenuButton>{text}</$MenuButton>;
};

export default MenuButton;
