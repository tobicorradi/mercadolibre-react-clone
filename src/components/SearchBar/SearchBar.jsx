import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <form action="">
        <input type="text" placeholder="Buscar productos, marcas y más..." />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SearchBar;
