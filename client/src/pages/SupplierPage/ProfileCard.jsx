import React, { useEffect } from "react";
import { Grid, Avatar } from "@mui/material";
import { FaUser, FaEnvelope, FaPhone, FaCartArrowDown } from "react-icons/fa";
import Time from "../../components/TimeAgo";
import { GrServices } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { CiSquareQuestion } from "react-icons/ci";
import { Card } from "antd";

const ProfileCard = ({ supplier = {}, count = 0, reqCount = 0 }) => {
  useEffect(() => {
    console.log(supplier);
  }, [supplier]);
  return (
    <Card className="w-100 ">
      <Grid container spacing={2} className="">
        <Grid item xs={12} md={4} className="text-center">
          <Avatar
            id="avatar"
            variant="rounded"
            className="h-100 w-100"
            sx={{ objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className="ps-5 d-flex align-items-center justify-content-between"
        >
          <div className=" h-100 w-100 ">
            <p className="text-start   w-100 text-capitalize fs-4 text-black ">
              <FaUser size={18} className="me-2" />
              {supplier.name || "name"}
            </p>
            <p className="text-start   w-100 text-lowercase fs-5 text-black ">
              <FaEnvelope size={18} className="me-2" />
              {supplier.email}
            </p>
            <p className="text-start   w-100 text-lowercase fs-5 text-black ">
              <FaPhone size={18} className="me-2" />
              {supplier.mobile}
            </p>
            <p className="text-start  w-100 text-lowercase fs-5 text-black ">
              <BsClock size={18} className="me-2" />
              <Time date={supplier.registered_Date} />
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="h-100  w-100 d-flex flex-column gap-2">
            <p className="bg-info-subtle rounded-5 text-center px-2 py-1 w-100 mx-2 ">
              <FaCartArrowDown size={20} className="text-info mx-2" />
              <span className="mx-2 fw-bold text-primary">Total Added </span>
              <span className="fw-bold text-info mx-2 ">({count})</span>
            </p>
            <p className="bg-warning-subtle rounded-5 text-center px-2 py-1 w-100 mx-2 ">
              <CiSquareQuestion size={20} className="text-warning mx-2" />
              <span className="mx-2 fw-bold text-danger">Requests </span>
              <span className="fw-bold text-warning mx-2 ">({reqCount})</span>
            </p>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileCard;
