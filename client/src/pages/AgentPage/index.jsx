import React, { useState } from "react";
import AddAgent from "./AddAgent";
import { Button, LinearProgress } from "@mui/material";
import AgentsList from "./AgentsList";
import { FaEarthAsia } from "react-icons/fa6";

const AgentsPage = () => {
  const [showAddAgentForm, setShowAddAgentForm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const toggleAddAgentForm = () => {
    setShowAddAgentForm(!showAddAgentForm);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        {" "}
        <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center">
          <div>
            <h2 className="text-black font-w600">Agent's Page</h2>
          </div>
          <div className="d-flex">
            <div className="d-flex justify-content-center align-items-center ">
              <FaEarthAsia
                size={25}
                onClick={() => setShowMap((p) => !p)}
                className="me-3 c-pointer"
                color="green"
              />
            </div>
            {!showAddAgentForm ? (
              <Button
                variant="outlined"
                color="success"
                className=" shadow w-100 "
                onClick={toggleAddAgentForm}
              >
                Add agent
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="error"
                  className=" shadow w-100  "
                  onClick={toggleAddAgentForm}
                >
                  Close form
                </Button>
              </>
            )}
          </div>
        </div>
        {showAddAgentForm && <AddAgent />}
      </div>
      <div>
        <AgentsList showMap={showMap} />
      </div>{" "}
    </div>
  );
};

export default AgentsPage;
