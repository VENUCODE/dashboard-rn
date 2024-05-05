import React from "react";
import ProductCard from "./productCard";
import { useProducts } from "../../context/useProducts";
const ProductList = () => {
  const { products } = useProducts();
  return (
    <div class="d-flex flex-wrap px-2 ">
      {products.map((a) => {
        return <ProductCard key={a.productName} data={a} />;
      })}
    </div>
  );
};

export default ProductList;
