import React, { useEffect, useState } from "react";
import AddManager from "./AddManager";
import { Button } from "@mui/material";
import ManagersList from "./ManagersList";
import ManagerFilter from "./ManagerFilter";
import { useManager } from "../../context/useManager";

const ManagerPage = () => {
  const [showAddManager, setShowAddAgentForm] = useState(false);
  const { managers } = useManager();
  const [current, setCurrent] = useState(managers);
  useEffect(() => {
    setCurrent(managers);
  }, [managers]);
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

        <ManagerFilter setCurrent={setCurrent} count={current.length} />

        <ManagersList current={current} />
      </div>
    </div>
  );
};

export default ManagerPage;
