import React from "react";
import MenuButton from "../MenuButton";
import $ from "styled-components";
const $Nav = $.ul`
    margin-left: 45px;
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
const Nav = () => {
  return (
    <$Nav>
      {Items.map((item) => (
        <MenuButton text={item.text} />
      ))}
    </$Nav>
  );
};

export default Nav;
