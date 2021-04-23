import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: Open-Sans, sans-serif;
        box-sizing: border-box;
    }
    body{
        background-color: #ededed;
    }
    button{
        cursor: pointer;
    }
`;
export default GlobalStyle;
