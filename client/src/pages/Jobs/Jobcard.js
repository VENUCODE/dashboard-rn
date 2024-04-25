import React, { useState } from "react";
import { Button, Card, Divider, Modal } from "antd";
import { FaCircleDot, FaIndianRupeeSign } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { TbNumbers } from "react-icons/tb";
import { BsBuildings } from "react-icons/bs";
import Chip from "@mui/material/Chip";
import Time from "../../components/TimeAgo";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const JobCard = ({ data, handleCloseJob, handleDeleteJob }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [closeLoading, setCloseLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card className="p-0 my-2 mx-1 outline-light shadow" data-aos="fade-in">
        <div className={`grid-container row m-0 py-0`}>
          <div className={`grid-item col-12 `}>
            <h3 className="text-capitalize">{data.jobTitle}</h3>
            <div className="row mb-2">
              <div className="col-6 mb-2 mb-md-0 text-capitalize">
                <BiCategoryAlt className="me-2" />
                {data.category}
              </div>
              <div className="col-6 text-capitalize">
                <BsBuildings /> {data?.companyName}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 mb-2 mb-md-0">
                <FaIndianRupeeSign />{" "}
                {data?.expectedSalary + "/Month" || "Not disclosed"}
              </div>
              <div className="col-6">
                <TbNumbers className="me-2" />
                Openings {data.numberOfOpenings}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 mb-2 mb-md-0">
                <FiCalendar /> <Time date={data.createdAt} />
              </div>
              <div className="col-6 text-small text-nowrap overflow-hidden">
                <GrMapLocation /> {data.location}
              </div>
            </div>
          </div>

          <div className="grid-item col-12 d-flex flex-column justify-content-center">
            <div className="d-flex flex-row justify-content-between row gap-1">
              <Button
                type="contained"
                loading={loading}
                className="btn btn-outline-danger bg-danger-subtle light mb-2 col-5"
                onClick={() => handleDeleteJob(data._id, setLoading)}
              >
                Delete
              </Button>
              <Button
                className={`btn light mb-2 col-5  ${
                  data.status === "open"
                    ? " bg-warning-subtle btn-outline-warning"
                    : "bg-success-subtle btn-outline-success"
                }`}
                type="contained"
                loading={closeLoading}
                onClick={() =>
                  handleCloseJob(
                    data._id,
                    data.status === "open" ? "closed" : "open",
                    setCloseLoading
                  )
                }
              >
                {data.status === "open" ? "Close" : "Open"}
              </Button>{" "}
              <Button
                type="contained"
                className="btn btn-outline-primary bg-primary-subtle  mb-2 col-12"
                onClick={showModal}
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <Modal
        title={data.jobTitle}
        open={isModalVisible}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div
          style={{ maxHeight: "400px", overflowY: "auto", overflowX: "hidden" }}
        >
          <div className="row mb-2">
            <div className="col-6 mb-2 mb-md-0 text-capitalize">
              <BiCategoryAlt className="me-2" />
              {data.category}
            </div>
            <div className="col-6 text-capitalize">
              <BsBuildings /> {data?.companyName}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6 mb-2 mb-md-0">
              <FaIndianRupeeSign />{" "}
              {data?.expectedSalary + "/Month" || "Not disclosed"}
            </div>
            <div className="col-6">
              <TbNumbers className="me-2" />
              Openings {data.numberOfOpenings}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6 mb-2 mb-md-0">
              <FiCalendar /> <Time date={data.createdAt} />
            </div>
            <div className="col-6 text-small text-nowrap overflow-hidden">
              <GrMapLocation /> {data.location}
            </div>
          </div>
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            Experience
          </Divider>
          <p className="ps-3">
            <span className="fs-3 fw-bold">{data.experience}</span> years
          </p>
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            JobType
          </Divider>
          <p className="text-capitalize ps-3"> {data.jobType}</p>
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            Education Qualification
          </Divider>
          <p className="text-capitalize ps-3">{data.qualification}</p>
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            About Company
          </Divider>
          <p className="ps-3 text-capitalize">{data.aboutCompany}</p>
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            Skills Required
          </Divider>
          {data.skillsRequired.map((skill, index) => (
            <Chip key={index} size="small" label={skill} className="mx-1" />
          ))}
          <Divider className="p-0 m-0" orientation="left" orientationMargin={0}>
            Key Responsibilities
          </Divider>
          <List>
            {data.keyResponsibilities.map((responsibility, index) => (
              <ListItem key={index} className="my-0 py-0">
                <ListItemIcon>
                  <FaCircleDot />
                </ListItemIcon>
                <ListItemText primary={responsibility} />
              </ListItem>
            ))}
          </List>
        </div>
      </Modal>
    </Grid>
  );
};

export default JobCard;
