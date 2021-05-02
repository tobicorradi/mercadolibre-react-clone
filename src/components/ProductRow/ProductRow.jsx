import React from "react";
import $ from "styled-components";
import ProductCard from "./../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};
const $ProductRow = $.div`
   margin-top: 30px;
`;
const $Title = $.h2`
    font-size: 24px;
    font-weight: 300;
    display: inline-block;
    margin-bottom: 17px;
`;
const ProductRow = ({ title, products }) => {
  return (
    <$ProductRow>
      <$Title>{title}</$Title> <a href="">Ver historial</a>
      <Slider {...settings}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </$ProductRow>
  );
};

export default ProductRow;
