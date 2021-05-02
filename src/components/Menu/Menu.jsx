import React from "react";
import MenuButton from "./../MenuButton";
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
    <>
      {Items.map((item) => (
        <MenuButton text={item.text} />
      ))}
    </>
  );
};

export default Menu;
