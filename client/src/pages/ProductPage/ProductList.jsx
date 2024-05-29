import React from "react";
import { Row } from "antd";
import ProductCard from "./productCard";
import { useProducts } from "../../context/useProducts";
import CardSkeleton from "../../components/CardSkeleton";
import { Grid } from "@mui/material";
import PaginationComponent from "../PropertiesPage/PaginationComponent";
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
        <div className="mb-5 p-0 container-fluid">
          {!loading && (
            <PaginationComponent items={current} itemsPerPage={6}>
              {(current) => (
                <>
                  {!loading && (
                    <Row gutter={[3, 3]} className="p-0 m-0">
                      {current.map((a) => {
                        return <ProductCard key={a.productName} data={a} />;
                      })}
                    </Row>
                  )}
                </>
              )}
            </PaginationComponent>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
