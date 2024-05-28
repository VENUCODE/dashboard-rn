import React, { useState } from "react";
import AddAdvert from "./AddAdvert";
import AdList from "./AdList";
import { Button } from "@mui/material";

const Advertisement = () => {
  const [show, setShow] = useState(false);
  const toggleAddJobForm = () => {
    setShow((p) => !p);
  };
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center my-1">
          <div>
            <h2 className="text-black font-w600">Ads's Page</h2>
          </div>
          <div>
            {!show ? (
              <Button
                variant="outlined"
                color="success"
                className=" shadow w-100 "
                onClick={toggleAddJobForm}
              >
                Add Ad
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="error"
                  className=" shadow w-100  "
                  onClick={toggleAddJobForm}
                >
                  Close form
                </Button>
              </>
            )}
          </div>
        </div>

        {show && <AddAdvert />}
        <div className="container-fluid">
          <AdList />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
