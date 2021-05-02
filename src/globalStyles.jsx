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
    :root{
        --shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }
    body{
        background-color: #ebebeb;
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
