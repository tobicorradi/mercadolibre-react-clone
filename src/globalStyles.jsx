import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: unset;
        font-family: 'Montserrat', sans-serif;
    }
    img{
        max-width: 100%;
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
