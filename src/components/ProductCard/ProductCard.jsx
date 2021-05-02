import React from "react";
import $ from "styled-components";
const $Product = $.div`
    background-color:white;
    max-width: 220px;
    box-shadow: var(--shadow);
`;
const $Price = $.span`
    font-size: 22px;
    margin-top: 5px;
`;
const $ProductInfo = $.div`
    padding:  20px;
    border-top: 1px solid rgba(51,51,51,.1);
`;
const $Cuotas = $.span`
    font-size: 13px;
    margin-top: 5px;
    display:block;
`;
const $Shipping = $.span`
    color: #00a650;
    margin-top: 5px;
    font-size: 14px;
    display:block;
`;
const $Img = $.img`
    width: 100%;
`;
const ProductCard = () => {
  return (
    <$Product className="product">
      <div className="product__image">
        <$Img src="https://http2.mlstatic.com/D_Q_NP_834027-MLA45450444551_042021-AB.webp" />
      </div>
      <$ProductInfo className="product__info">
        <$Price className="product__price">$160.000</$Price>
        <$Cuotas className="product__cuotas">6x $18.300,33 sin interés</$Cuotas>
        <$Shipping className="product__shipping">Envío gratis</$Shipping>
        {/* <p className="product__description">Ps5 Con Lectora Nueva Y Sellada</p> */}
      </$ProductInfo>
    </$Product>
  );
};

export default ProductCard;
