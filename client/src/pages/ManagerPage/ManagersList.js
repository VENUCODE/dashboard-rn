import React, { useEffect, useState } from "react";
import { Grid, LinearProgress } from "@mui/material";

import { useManager } from "../../context/useManager";
import ManagerCard from "./ManagerCard";
const ManagersList = () => {
  const { managers, loading } = useManager();
  const [current, setCurrent] = useState(managers);
  useEffect(() => {
    setCurrent(managers);
  }, [managers]);

  return (
    <div className="container-fluid">
      {/* <AgentFilter setCurrent={setCurrent} /> */}
      {loading && <LinearProgress color="secondary" />}

      <Grid container spacing={2} className="my-2">
        <Grid
          item
          xs={12}
          className="d-flex justify-content-center align-items-center "
        >
          {loading && <LinearProgress color="secondary" />}
        </Grid>

        <Grid
          item
          xs={12}
          className="d-flex justify-content-end align-items-center pe-2 pt-2 pb-0 mb-0 "
        >
          {current.length > 0 && (
            <span>
              {current.length !== 0
                ? current.length +
                  " manager" +
                  (current.length === 1 ? "" : "s") +
                  " found"
                : "No managers found"}
            </span>
          )}
          {current.length === 0 && !loading && "No managers found"}
        </Grid>
        {current.length > 0 &&
          current.map((manager, index) => (
            <ManagerCard key={index} manager={manager} />
          ))}
      </Grid>
    </div>
  );
};

export default ManagersList;
