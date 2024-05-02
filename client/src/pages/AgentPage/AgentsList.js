import React, { useEffect, useState } from "react";
import AgentFilter from "./AgentFilter";
import { Grid, LinearProgress } from "@mui/material";
import AgentCard from "./AgentsCard";
import { useAgents } from "../../context/useAgents";
import { Spin, message } from "antd";

const AgentsList = () => {
  const { agents, loading, holdAgent } = useAgents();
  const [current, setCurrent] = useState(agents);
  useEffect(() => {
    setCurrent(agents);
  }, [agents]);

  const handleHoldAgent = async (agentId, status, setLoading) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3300/api/agents/update-status",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ agentId, status }),
        }
      );

      if (response.ok) {
        console.log(`${status} successfully`);
        message.success("agent status updated ", 1);
        const data = await response.json();
        console.log(data);
        holdAgent(agentId, status);
      } else {
        console.log(response);
        console.log("Failed to close job");
      }
    } catch (error) {
      console.error("Error closing job:", error);
    } finally {
      setLoading(false);
    }
  };
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
      <AgentFilter setCurrent={setCurrent} />
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
                  " agent" +
                  (current.length === 1 ? "" : "s") +
                  " found"
                : "No agents found"}
            </span>
          )}
          {current.length === 0 && !loading && "No agents found"}
        </Grid>
        {current.length > 0 &&
          current.map((agent, index) => (
            <AgentCard
              key={index}
              handleHoldAgent={handleHoldAgent}
              agent={agent}
            />
          ))}
      </Grid>
    </div>
  );
};

export default AgentsList;
