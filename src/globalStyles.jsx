import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: Open-Sans, sans-serif;
        box-sizing: border-box;
        outline: unset;
    }
    body{
        background-color: #ededed;
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
    ul li{
        display: inline;
    }
`;
export default GlobalStyle;
