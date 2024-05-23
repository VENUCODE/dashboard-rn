import React from "react";
import { Row } from "antd";
import ProductCard from "./productCard";
const ProductList = ({ current }) => {
  return (
    <div className="container-fluid">
      <div className="ser-container">
        <Row gutter={[16, 16]}>
          {current.map((a) => {
            return <ProductCard key={a.productName} data={a} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
