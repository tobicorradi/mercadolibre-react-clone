import React from "react";
import MenuButton from "./../MenuButton";
import $ from "styled-components";
const $Menu = $.ul`
    margin-left: 50px;
`
const Items = [
  {
    text: "Categorías",
    isExpandible: false,
  },
  {
    text: "Ofertas",
    isExpandible: false,
  },
  {
    text: "Historial",
    isExpandible: false,
  },
  {
    text: "Supermercado",
    isExpandible: false,
  },
  {
    text: "Moda",
    isExpandible: false,
  },
  {
    text: "Vender",
    isExpandible: false,
  },
  {
    text: "Ayuda",
    isExpandible: false,
  },
];
const Menu = () => {
  return (
    <$Menu>
      {Items.map((item) => (
        <MenuButton text={item.text} />
      ))}
    </$Menu>
  );
};

export default Menu;
