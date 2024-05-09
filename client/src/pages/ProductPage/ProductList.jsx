import React from "react";
import { useProducts } from "../../context/useProducts";
import { Row } from "antd";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const { products } = useProducts();
  return (
    <div className="container-fluid">
      <div className="ser-container">
        <Row gutter={[16, 16]}>
          {products.map((a) => {
            return <ProductCard key={a.productName} data={a} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
