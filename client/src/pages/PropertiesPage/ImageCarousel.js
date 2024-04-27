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
            style={{
              height: "200",
              objectFit: "cover",
              textAlign: "center",
            }}
            width="400"
            src={`https://rightneeds.azurewebsites.net/${img}`}
            alt={img}
          />
        </div>
      );
    })}
  </Carousel>
);
export default ImageCarousel;
