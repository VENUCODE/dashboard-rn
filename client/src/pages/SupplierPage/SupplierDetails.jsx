import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SupplierChart from "./SupplierChart";
import { FloatButton, message } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const SupplierDetails = () => {
  const { sid } = useParams();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("products");

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setSelectedValue(newValue);
      message.info(`Selected: ${newValue}`);
    }
  };
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
          <Grid item xs={12}>
            <Grid item xs={12}>
              <ToggleButtonGroup
                fullWidth
                size="small"
                color="warning"
                value={selectedValue}
                exclusive
                onChange={handleChange}
                aria-label="options"
              >
                <ToggleButton
                  value="products"
                  aria-label="products"
                  sx={{
                    borderBottom:
                      selectedValue === "products"
                        ? "2px solid orange"
                        : "1px solid lightgray",
                    "&:hover": {
                      borderBottom: "2px solid orange",
                    },
                  }}
                >
                  Products
                </ToggleButton>
                <ToggleButton
                  value="services"
                  aria-label="services"
                  sx={{
                    borderBottom:
                      selectedValue === "services"
                        ? "2px solid orange"
                        : "1px solid lightgray",
                    "&:hover": {
                      borderBottom: "2px solid orange",
                    },
                  }}
                >
                  Services
                </ToggleButton>
                <ToggleButton
                  value="properties"
                  aria-label="properties"
                  sx={{
                    borderBottom:
                      selectedValue === "properties"
                        ? "2px solid orange"
                        : "1px solid lightgray",
                    "&:hover": {
                      borderBottom: "2px solid orange",
                    },
                  }}
                >
                  Properties
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SupplierDetails;
