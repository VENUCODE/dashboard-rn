import React, { useState } from "react";
import AddManager from "./AddManager";
import { Button } from "@mui/material";
import ManagersList from "./ManagersList";

const ManagerPage = () => {
  const [showAddManager, setShowAddAgentForm] = useState(false);
  const toggleAddAgentForm = () => {
    setShowAddAgentForm(!showAddManager);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center">
          <div>
            <h2 className="text-black font-w600">Manager's Page</h2>
          </div>
          <div>
            {!showAddManager ? (
              <Button
                variant="outlined"
                color="success"
                className=" shadow w-100 "
                onClick={toggleAddAgentForm}
              >
                Add Manager
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
        {showAddManager && <AddManager />}
      </div>{" "}
      <ManagersList />
    </div>
  );
};

export default ManagerPage;
