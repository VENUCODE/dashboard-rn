import React, { useEffect, useState } from "react";
import AgentFilter from "./AgentFilter";
import { Grid } from "@mui/material";
import AgentCard from "./AgentsCard";
import { useAgents } from "../../context/useAgents";

const AgentsList = () => {
  const { agents, loading } = useAgents();
  const [current, setCurrent] = useState(agents);
  useEffect(() => {
    setCurrent(agents);
  }, [agents]);

  // const handleCloseJob = async (jobId, status, setLoading) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("http://localhost:3300/api/update-status", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ jobId, status }),
  //     });

  //     if (response.ok) {
  //       console.log("Job closed successfully");
  //       message.success("Job closed successfully", 1);
  //       closeJob(jobId, status);
  //     } else {
  //       console.error("Failed to close job");
  //     }
  //   } catch (error) {
  //     console.error("Error closing job:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleDeleteJob = async (jobId, setLoading) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("http://localhost:3300/api//delete-job", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ jobId }),
  //     });

  //     if (response.ok) {
  //       console.log("Job deleted successfully");
  //       message.success("Job deletd successfully", 1);
  //       deleteJob(jobId);
  //     } else {
  //       console.error("Failed to delete job");
  //     }
  //   } catch (error) {
  //     console.error("Error delete job:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div className="container-fluid">
      <>
        <AgentFilter setCurrent={setCurrent} />
        {loading && <span>Loading......</span>}
        <Grid container spacing={2} className="my-2">
          <Grid
            item
            xs={12}
            className="d-flex justify-content-end align-items-center pe-2"
          >
            <span>
              {current.length !== 0
                ? current.length +
                  " agent" +
                  (current.length === 1 ? "" : "s") +
                  " found"
                : "No agents found"}
            </span>
          </Grid>
          {current.length > 0 &&
            current.map((agent, index) => (
              <AgentCard key={index} agent={agent} />
            ))}
        </Grid>
      </>
    </div>
  );
};

export default AgentsList;
