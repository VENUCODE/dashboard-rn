import React from "react";
import { Carousel, Image } from "antd";
import imgurl from "../../assets/img/sky.jpg";

const ImageCarousel = ({ images }) => (
  <Carousel autoplay dotPosition="bottom">
    {images.map((img, index) => {
      return (
        <div
          className="w-100 h-100 position-relative"
          style={{ maxHeight: "100px", objectFit: "cover" }}
        >
          <Image
            key={index}
            width={300}
            className="carousel-img"
            src={imgurl}
            alt={img}
          />
        </div>
      );
    })}
  </Carousel>
);
export default ImageCarousel;
