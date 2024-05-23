import React from "react";
import { Carousel, Image } from "antd";
import imgurl from "../../assets/img/sky.jpg";
const ImageCarousel = ({ images, path = "" }) => (
  <Carousel autoplay dotPosition="top" className="h-100">
    {images.map((img, index) => {
      return (
        <div className="position-relative " key={index}>
          <Image
            className="carousel-img w-100 h-100"
            src={path + img}
            height={200}
            width={400}
            sx={{maxwidth:400}}
            alt={img}
          />
        </div>  
      );
    })}
  </Carousel>
);
export default ImageCarousel;
