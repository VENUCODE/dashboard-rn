import React, { useState } from "react";
import { Button } from "@mui/material";
import { Divider } from "antd";
import JobForm from "./JobPostForm";
import JobPostList from "./JobPostList";
import { MdOutlinePostAdd } from "react-icons/md";
const JobsPage = () => {
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const toggleAddJobForm = () => {
    setShowAddJobForm(!showAddJobForm);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center">
          <div>
            <h2 className="text-black font-w600">Job's Page</h2>
          </div>
          <div>
            {!showAddJobForm ? (
              <Button
                variant="outlined"
                color="success"
                className=" shadow w-100 "
                onClick={toggleAddJobForm}
              >
                Add Job
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
        {showAddJobForm && (
          <>
            <Divider className="" orientation="left">
              {<MdOutlinePostAdd size={40} />}
            </Divider>
            <JobForm />
          </>
        )}
      </div>

      <JobPostList />
    </div>
  );
};

export default JobsPage;
