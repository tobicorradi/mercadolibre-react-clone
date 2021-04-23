import React from "react";
import styled from "styled-components";
const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
`;
const StyledInput = styled.input`
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  border: 0;
  padding: 7px 60px 9px 15px;
  font-size: 16px;
`;
const SearchBar = () => {
  return (
    <StyledSearchBar className="searchbar">
      <form action="">
        <StyledInput
          type="text"
          placeholder="Buscar productos, marcas y más..."
        />
        <button type="submit">Enviar</button>
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
