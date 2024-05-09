import React, { useEffect, useState } from "react";
import AgentFilter from "./AgentFilter";
import { Chip, Grid, LinearProgress } from "@mui/material";
import AgentCard from "./AgentsCard";
import { useAgents } from "../../context/useAgents";
import { Divider, message } from "antd";
import RequestAgentCard from "./RequestAgentCard";
import Map from "../../components/googleMap";
const AgentsList = ({ showMap }) => {
  const { agents, loading, reqAgents } = useAgents();
  const [current, setCurrent] = useState(agents);
  const [reqCurrent, setReqCurrent] = useState(reqAgents);
  const [agentTab, setAgentTab] = useState("agents");
  useEffect(() => {
    setCurrent(agents);
  }, [agents]);
  useEffect(() => {
    setReqCurrent(reqAgents);
  }, [reqAgents]);

  return (
    <div className="container-fluid">
      <div>{showMap && <Map data={agents} />}</div>
      <AgentFilter setCurrent={setCurrent} />
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
          {agentTab === "agents"
            ? current.length > 0
              ? current.length +
                " agent" +
                (current.length === 1 ? "" : "s") +
                " found"
              : "No agents found"
            : reqCurrent.length > 0
            ? reqCurrent.length +
              " agent" +
              (reqCurrent.length === 1 ? "" : "s") +
              " found"
            : "No agents found"}
        </Grid>
        <Grid
          item
          xs={12}
          className="d-flex  justify-content-center align-items-center "
        >
          <Divider orientation="center" className="p-0 m-0 ">
            <Chip
              label={"Agents"}
              className={` px-1 transition-all mx-1 py-1 ${
                agentTab === "agents"
                  ? "bg-primary shadow-md  text-white"
                  : "bg-primary-subtle"
              }`}
              onClick={() => setAgentTab("agents")}
            />
            <Chip
              label={"Requests"}
              className={` px-1 transition-all mx-1 py-1 ${
                agentTab === "requests"
                  ? "bg-primary shadow-md text-white"
                  : "bg-primary-subtle"
              }`}
              onClick={() => setAgentTab("requests")}
            />
          </Divider>
        </Grid>
        <Grid
          item
          xs={12}
          className="d-flex  justify-content-start align-items-center "
        >
          <h2>{agentTab === "requests" ? "Agent Requests" : "Agents"}</h2>
        </Grid>
        <Grid
          item
          xs={12}
          className="d-flex  justify-content-evenly gap-2 flex-wrap align-items-center "
        >
          {agentTab === "agents"
            ? current.length > 0 &&
              current.map((agent, index) => (
                <AgentCard key={index} agent={agent} />
              ))
            : reqCurrent.length > 0 &&
              reqCurrent.map((agent, index) => (
                <RequestAgentCard key={index} agent={agent} />
              ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default AgentsList;
