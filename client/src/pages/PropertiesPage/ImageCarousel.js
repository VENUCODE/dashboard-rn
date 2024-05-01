import React from "react";
import { Carousel, Image } from "antd";

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
            src={`https://rightneeds.azurewebsites.net/${img}`}
            alt={img}
          />
        </div>
      );
    })}
  </Carousel>
);
export default ImageCarousel;
