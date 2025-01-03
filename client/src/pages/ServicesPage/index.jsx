import React, { useEffect, useState } from "react";
import { useServices } from "../../context/useServices";
import ServiceFilter from "./serviceFilter";
import { Badge, Chip, Grid, IconButton, LinearProgress } from "@mui/material";
import ServiceCard from "./serviceCard";
import categorizeServices from "./helper";
import { IoIosMore } from "react-icons/io";
import { Divider } from "antd";
import { Button } from "@mui/material";

import AddService from "./AddService";
import AddServiceCategory from "./addServiceCategory";
import CardSkeleton from "../../components/CardSkeleton";
const ServicePage = () => {
  const { services, loading } = useServices();
  const [current, setCurrent] = useState([]);
  const [servicesByCategory, setServicesByCategory] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [addService, setAddService] = useState(false);
  const [limit, setlimit] = useState(5);
  const toggleExpand = (categoryName) => {
    setExpandedCategories((prevExpanded) =>
      prevExpanded.includes(categoryName)
        ? prevExpanded.filter((category) => category !== categoryName)
        : [...prevExpanded, categoryName]
    );
  };
  useEffect(() => {
    setCurrent(services);
  }, [services]);

  useEffect(() => {
    const data = categorizeServices(current);
    setServicesByCategory(data);
  }, [current]);

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className=" my-2">
          <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center">
            <div>
              <h2 className="text-black font-w600">Service's Page</h2>
            </div>
            <div>
              <Button
                variant="outlined"
                color={!addService ? "success" : "error"}
                className="shadow w-100"
                onClick={() => setAddService((prevShow) => !prevShow)}
              >
                {!addService ? "Add Service" : "Hide Form"}
              </Button>
            </div>
          </div>
        </div>
        <div className="my-2">
          {addService && (
            <div className="d-flex gap-2 flex-column">
              <AddService />
              <AddServiceCategory />
            </div>
          )}
        </div>
        <ServiceFilter setCurrent={setCurrent} count={current.length} />
        {loading && <LinearProgress color="secondary" />}
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
        {!loading &&
          Object.keys(servicesByCategory).map((categoryName) => (
            <div key={categoryName} className="my-4">
              <Divider orientation="left" orientationMargin={10}>
                <Badge
                  badgeContent={servicesByCategory[categoryName].length}
                  color="error"
                >
                  <Chip
                    label={categoryName}
                    color="error"
                    variant="outlined"
                    className="text-capitalize bg-secondary-hover"
                  />
                </Badge>
              </Divider>
              <div className="service-card py-0 my-0">
                <div className="container py-0 my-0">
                  <div className="row">
                    {/* Render the first 5 services */}
                    {servicesByCategory[categoryName]
                      .slice(
                        0,
                        expandedCategories.includes(categoryName)
                          ? undefined
                          : limit
                      )
                      .map((service, index) => (
                        <ServiceCard key={service._id} service={service} />
                      ))}
                    <div class="col-lg-3 col-md-4 col-sm-6  d-flex  justify-content-center align-items-center">
                      {servicesByCategory[categoryName].length > limit && (
                        <IconButton
                          color="secondary"
                          variant="outlined"
                          className="border border-1 border-danger"
                          aria-label="View more"
                          onClick={() => toggleExpand(categoryName)}
                        >
                          <IoIosMore size={40} color="#E35A60" />
                        </IconButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicePage;
