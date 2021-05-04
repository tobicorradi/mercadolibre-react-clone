import React from 'react'
import $ from "styled-components";
const $Footer = $.footer`
    background-color: white;
    padding: 35px;
    text-align: center;
    margin-top: 50px;
    font-size: 14px;
`;
const $Link = $.a`
    color: #3483fa;
`;
const Footer = () => {
    return (
        <$Footer>
            <p>Sitio web desarrollado por <$Link target="_blank" href="https://www.corraditobias.com.ar/">Tobías Corradi</$Link> con React JS como pieza de portfolio personal, sin fines de lucro.</p>
        </$Footer>
    )
}

export default Footer
