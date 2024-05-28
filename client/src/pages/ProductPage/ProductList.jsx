import React from "react";
import { Row } from "antd";
import ProductCard from "./productCard";
import { useProducts } from "../../context/useProducts";
import CardSkeleton from "../../components/CardSkeleton";
import { Grid } from "@mui/material";
const ProductList = ({ current }) => {
  const { loading } = useProducts();
  return (
    <div className="container-fluid">
      <div className="ser-container">
        {loading && (
          <Grid container spacing={1}>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </Grid>
        )}
        {!loading && (
          <Row gutter={[3, 3]} className="p-0 m-0">
            {current.map((a) => {
              return <ProductCard key={a.productName} data={a} />;
            })}
          </Row>
        )}
      </div>
    </div>
  );
};

export default ProductList;
