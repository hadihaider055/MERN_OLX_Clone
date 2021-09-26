import React from "react";
import Slider from "react-slick";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ display: "flex" }}>
      <h2> Single Item</h2>
      <Slider {...settings}>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
