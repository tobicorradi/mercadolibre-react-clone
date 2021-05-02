import React from "react";
import $ from "styled-components";
import ProductCard from "./../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const $Title = $.h2`
    font-size: 24px;
    font-weight: 300;
`;
const ProductRow = ({ title, products }) => {
  return (
    <div>
      <$Title>{title}</$Title> <a href="">Ver historial</a>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductRow;
