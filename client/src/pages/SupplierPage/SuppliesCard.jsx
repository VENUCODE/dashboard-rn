import React from "react";
import {
  MdDriveFileRenameOutline,
  MdCurrencyRupee,
  MdOutlineDescription,
  MdOutlineAccessTime,
  MdOutlineCategory,
} from "react-icons/md";
import { RiNumbersLine } from "react-icons/ri";
import Time from "../../components/TimeAgo";
import { Card, Grid, Typography } from "@mui/material";
const SuppliesCard = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} md={6} key={product._id}>
          <Card className="w-100 my-2">
            <Grid container>
              <Grid item xs={12} md={4} className="text-center">
                <img
                  id="avatar"
                  style={{
                    objectFit: "cover",
                    maxHeight: "150px",
                    height: "100%",
                    minWidth: "180px",
                    width: "100%",
                  }}
                  src={
                    "https://picsum.photos/200/300?grayscale" ||
                    product.images[0]
                  }
                  alt={product.productName}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                className="ps-2 d-flex align-items-center justify-content-between"
              >
                <div className="h-100 w-100 d-flex flex-column gap-2 py-2">
                  <Typography className="text-start w-100 text-capitalize fs-4 text-black">
                    <MdDriveFileRenameOutline size={18} className="me-2" />
                    {product.productName}
                  </Typography>
                  <Typography className="text-start w-100 text-lowercase fs-5 text-black">
                    <MdCurrencyRupee size={18} className="me-2" />
                    {product.productPrice}
                  </Typography>
                  <Typography className=" text-capitalize text-start d-flex w-100 text-lowercase fs-5 text-black ">
                    <MdOutlineDescription size={18} className="me-2" />
                    <span
                      className="text-dark"
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        display: "inline",
                      }}
                    >
                      {product.productDescription}
                    </span>
                  </Typography>
                  <Typography className="d-flex text-start w-100 text-lowercase fs-5 text-black">
                    <MdOutlineAccessTime size={18} className="me-2" />
                    <span className="text-muted">
                      <Time date={product.timestamp} />
                    </span>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="h-100 w-100 d-flex justify-content-end align-items-center gap-1 py-1">
                  <Typography className="bg-info-subtle d-flex rounded-5 text-center px-2 py-1 mx-2">
                    <MdOutlineCategory size={15} className="text-info mx-2" />
                    <span
                      className="text-info text-info mx-2"
                      style={{ fontWeight: "0.3rem" }}
                    >
                      {product.categoryName}
                    </span>
                  </Typography>
                  <Typography className="bg-success-subtle rounded-5 text-center px-2 py-1 mx-2">
                    <RiNumbersLine size={15} className="text-success mx-1" />
                    <span className="fw-bold text-success mx-2">
                      {product.requestCount}
                    </span>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SuppliesCard;
