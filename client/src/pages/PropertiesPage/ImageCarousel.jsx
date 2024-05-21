import React from "react";
import { Carousel, Image } from "antd";
import imgurl from "../../assets/img/sky.jpg";
const ImageCarousel = ({ images, path = "" }) => (
  <Carousel autoplay dotPosition="top" className="">
    {images.map((img, index) => {
      return (
        <div className="position-relative " key={index}>
          <Image
            className="carousel-img w-100 h-100"
            style={{ maxHeight: "240px", objectFit: "cover" }}
            src={path + img}
            alt={img}
          />
        </div>
      );
    })}
  </Carousel>
);
export default ImageCarousel;
