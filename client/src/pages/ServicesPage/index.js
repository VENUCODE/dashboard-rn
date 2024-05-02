import React, { useEffect, useState } from "react";
import { useServices } from "../../context/useServices";
import ServiceFilter from "./serviceFilter";
import { LinearProgress } from "@mui/material";
import ServiceCard from "./serviceCard";

const ServicePage = () => {
  const { services, loading } = useServices();
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    setCurrent(services);
  }, [services]);

  return (
    <div className="content-body">
      <div className="container-fluid">
        <ServiceFilter setCurrent={setCurrent} count={current.length} />
        {loading && <LinearProgress color="secondary" />}
        {current.map((category) => (
          <div key={Object.keys(category)[0]}>
            <h1>{Object.keys(category)[0]}</h1>
            <div class="service-card py-0 my-0">
              <div class="container py-0 my-0">
                <div class="row">
                  {category[Object.keys(category)[0]].map((service, index) => (
                    <>
                      <ServiceCard key={service._id} service={service} />
                    </>
                  ))}
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
