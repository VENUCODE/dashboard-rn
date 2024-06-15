import React, { useEffect } from "react";
import { Row } from "antd";
import ProductCard from "./productCard";
import { useProducts } from "../../context/useProducts";
import CardSkeleton from "../../components/CardSkeleton";
import { Grid } from "@mui/material";
import PaginationComponent from "../PropertiesPage/PaginationComponent";
const ProductList = ({ current }) => {
  const { loading } = useProducts();
  useEffect(() => {}, [current]);
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
              {(paginatedItems) => (
                <>
                  {!loading && (
                    <Grid container spacing={1}>
                      {paginatedItems.map((a) => {
                        return <ProductCard key={a._id} data={a} />;
                      })}
                    </Grid>
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
