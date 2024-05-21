import React from "react";
import { Navigate, useParams } from "react-router-dom";
import SupplierCard from "./SupplierCard";
import ProfileCard from "./ProfileCard";
import { Grid } from "@mui/material";
import SupplierChart from "./SupplierChart";
import { Button, Card, FloatButton } from "antd";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const SupplierDetails = () => {
  const { sid } = useParams();
  const navigate = useNavigate();
  return (
    <div className="content-body">
      <div className="container-fluid position-relative">
        <Grid container spacing={4}>
          <Grid item xs={12} className="">
            <FloatButton
              type="primary"
              tooltip={<div>Go back</div>}
              onClick={() => {
                navigate("/suppliers");
              }}
              icon={<FaArrowLeft />}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={5}>
            <SupplierChart />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SupplierDetails;
