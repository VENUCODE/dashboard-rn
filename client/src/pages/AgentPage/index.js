import React, { useState } from "react";
import AddAgent from "./AddAgent";
import { Button } from "@mui/material";
import { Divider } from "antd";
import { FaUsersLine } from "react-icons/fa6";
const AgentsPage = () => {
  const [showAddAgentForm, setShowAddAgentForm] = useState(false);
  const toggleAddAgentForm = () => {
    setShowAddAgentForm(!showAddAgentForm);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className=" bg-white rounded-2 shadow d-flex justify-content-between p-2 align-items-center">
          {/* onClick={toggleAddAgentForm} */}
          <div>
            <h2 className="text-black font-w600">Agent's Page</h2>
          </div>
          <div>
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
        <Divider className="" orientation="center" orientationMargin="2">
          {<FaUsersLine size={40} />}
        </Divider>
      </div>{" "}
    </div>
  );
};

export default AgentsPage;
