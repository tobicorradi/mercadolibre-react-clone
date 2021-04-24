import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import $ from "styled-components";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const $Item = $.img`
    margin: 0 auto;
`;
const BannerSlider = () => {
  return (
    <Slider {...settings}>
      <div>
        <$Item
          src="https://http2.mlstatic.com/D_NQ_797135-MLA45643423773_042021-OO.webp"
          alt=""
        />
      </div>
      <div>
        <$Item
          src="https://http2.mlstatic.com/D_NQ_797135-MLA45643423773_042021-OO.webp"
          alt=""
        />
      </div>
      <div>
        <$Item
          src="https://http2.mlstatic.com/D_NQ_797135-MLA45643423773_042021-OO.webp"
          alt=""
        />
      </div>
      <div>
        <$Item
          src="https://http2.mlstatic.com/D_NQ_797135-MLA45643423773_042021-OO.webp"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default BannerSlider;