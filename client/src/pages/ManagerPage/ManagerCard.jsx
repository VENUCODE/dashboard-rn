import { BiLocationPlus, BiMailSend } from "react-icons/bi";
import { LuView } from "react-icons/lu";

import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { FaMailchimp, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "antd";
import { useState } from "react";
import AgentModal from "./ManagerModal";
import { CiMail } from "react-icons/ci";
import { MdOutlinePersonPin, MdPersonPin, MdPinDrop } from "react-icons/md";
export default function ManagerCard({ manager, ...props }) {
  const {
    name = "name",
    status,
    location = "location",
    occupation = "no occup",
    image = "https://placehold.co/100x100.png",
  } = manager;

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Grid item xs={12} sm={4} md={4} lg={3}>
      <Card data-aos="zoom-in" data-aos-dealy="100">
        <CardContent className="p-1 position-relative">
          <Chip
            size="small"
            style={{
              fontSize: "6px",
              width: "13ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              right: "0",
            }}
            className="bg-primary-subtle text-primary text-capitalize py-0 px-1  position-absolute mx-1 "
            label={occupation}
          />
          <Chip
            size="small"
            style={{
              fontSize: "6px",
              width: "13ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              left: "0",
            }}
            className={`bg-${
              status === "running" ? "success" : "primary"
            }-subtle text-${
              status === "running" ? "success" : "primary"
            } text-capitalize py-0 px-1  position-absolute mx-1 `}
            label={status}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Avatar
              alt="Profile"
              src={image}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <Typography
            variant="h6"
            component="div"
            mt={2}
            textAlign="center"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="text-capitalize"
          >
            {name}
          </Typography>
          <p className="text-muted text-center">
            <CiMail size={18} className="me-2 text-primary" />
            {manager.email}
          </p>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <MdPinDrop color="red" className="me-2" size={20} />
            <span className="text-muted text-capitalize">{location}</span>
          </Typography>

          <div className=" d-flex col-12 justify-content-around align-items-center mt-2 bg-white border-2 border-gray border py-1 rounded-5">
            <Button
              variant="text"
              disabled
              className="bg-danger-subtle px-4 shadow-sm py-1 rounded-4"
            >
              <FaRegTrashAlt size={15} className="text-danger" />
            </Button>

            <Button
              variant="outlined"
              className="bg-info-subtle px-4 shadow-sm py-1 rounded-4"
              onClick={() => setIsModalVisible(true)}
            >
              <LuView size={15} className="text-info" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <AgentModal
        isModalVisible={isModalVisible}
        data={manager}
        handleCancel={() => {
          setIsModalVisible(false);
        }}
      />
    </Grid>
  );
}
