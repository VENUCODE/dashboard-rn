import React, { useState } from "react";
import { Button, Card, Collapse, Divider } from "antd";
import { FaCircleDot, FaIndianRupeeSign } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import {
  BsBuildings,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from "react-icons/bs";
import { TbNumbers } from "react-icons/tb";
import Chip from "@mui/material/Chip";
import Time from "../../components/TimeAgo";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const { Panel } = Collapse;
const JobCard = ({ data, handleCloseJob, handleDeleteJob }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeLoading, setCloseLoading] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(false);

  return (
    <Card className="p-0 my-4 outline-light shadow  " data-aos="zoom-in-up">
      <div className={`grid-container row m-0 py-0`}>
        <div className={`grid-item col-9 `}>
          <h3 className="text-capitalize">{data.jobTitle}</h3>
          <div className="row mb-2">
            <div className="col-md-6 mb-2 mb-md-0 text-capitalize">
              <BiCategoryAlt className="me-2" />
              {data.category}
            </div>
            <div className="col-md-6 text-capitalize">
              <BsBuildings /> {data?.companyName}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 mb-2 mb-md-0">
              <FaIndianRupeeSign />{" "}
              {data?.expectedSalary + "/Month" || "Not disclosed"}
            </div>
            <div className="col-md-6">
              <TbNumbers className="me-2" />
              Openings {data.numberOfOpenings}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 mb-2 mb-md-0">
              <FiCalendar /> <Time date={data.createdAt} />
            </div>
            <div className="col-md-6">
              <GrMapLocation /> {data.location}
            </div>
          </div>
        </div>

        <div className="grid-item col-3 d-flex flex-column  justify-content-center">
          <Button
            type="contained"
            loading={loading}
            className="btn btn-outline-danger btn-danger  mb-2"
            onClick={() => handleDeleteJob(data._id, setLoading)}
          >
            Delete
          </Button>
          <Button
            className="btn btn-outline-primary btn-primary  mb-2"
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
          </Button>
        </div>
      </div>
      <Collapse
        onChange={toggleAccordion}
        bordered={false}
        activeKey={isOpen ? "1" : "0"}
        className="px-0 mx-0 rounded-2"
      >
        <Panel showArrow={false} key="1" className="bg-white mx-0 px-0">
          <div className="accordion">
            <div className="card-body pt-0">
              <Grid container>
                <Grid item xs={6} md={6}>
                  <div>
                    <Divider
                      className="p-0 m-0"
                      orientation="left"
                      orientationMargin={0}
                    >
                      Experience
                    </Divider>
                    <p className="ps-3">
                      <span className="fs-3 fw-bold">{data.experience}</span>{" "}
                      years
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} md={6}>
                  <div>
                    <Divider
                      className="p-0 m-0"
                      orientation="left"
                      orientationMargin={0}
                    >
                      JobType
                    </Divider>
                    <p className="text-capitalize ps-3"> {data.jobType}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <Divider
                      className="p-0 m-0"
                      orientation="left"
                      orientationMargin={0}
                    >
                      Education Qualification
                    </Divider>
                    <p className="text-capitalize ps-3">{data.qualification}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <Divider
                      className="p-0 m-0"
                      orientation="left"
                      orientationMargin={0}
                    >
                      About Company
                    </Divider>
                    <p className="ps-3 text-capitalize"> {data.aboutCompany}</p>
                  </div>
                </Grid>
              </Grid>

              <div>
                <Divider
                  className="p-0 m-0"
                  orientation="left"
                  orientationMargin={0}
                >
                  Skills Required
                </Divider>
                {data.skillsRequired.map((skill, index) => (
                  <Chip
                    key={index}
                    size="small"
                    label={skill}
                    className="mx-1"
                  />
                ))}
              </div>

              <div>
                <Divider
                  className="p-0 m-0"
                  orientation="left"
                  orientationMargin={0}
                >
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
            </div>
          </div>
        </Panel>
      </Collapse>
      <div className="d-flex justify-content-center align-items-center w-100 c-pointer">
        <button
          className="btn bg-transparent border-0"
          onClick={toggleAccordion}
        >
          {isOpen ? (
            <>
              <BsChevronDoubleUp className="arrow-icon" />
              View Less
            </>
          ) : (
            <>
              <BsChevronDoubleDown className="arrow-icon" />
              View More
            </>
          )}
        </button>
      </div>
    </Card>
  );
};

export default JobCard;
