import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledSearchBar className="searchbar">
      <StyledFrom action="">
        <StyledInput
          type="text"
          placeholder="Buscar productos, marcas y más..."
        />
        <button type="submit">Enviar</button>
      </StyledFrom>
    </StyledSearchBar>
  );
};
const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
`;
const StyledFrom = styled.form`
  width: 100%;
`;
const StyledInput = styled.input`
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  border: 0;
  padding: 7px 60px 9px 15px;
  font-size: 16px;
  width: 100%;
  
  ::placeholder {
    color: #d6d6d6;
  }
`;
export default SearchBar;
