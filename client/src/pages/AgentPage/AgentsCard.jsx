import { BiLocationPlus } from "react-icons/bi";
import { LuView } from "react-icons/lu";

import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { FaPause, FaPlay, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "antd";
import { useEffect, useState } from "react";
import AgentModal from "./AgentModal";
import { useAgents } from "../../context/useAgents";
import { hostUri } from "../../fetch";
export default function AgentCard({ agent }) {
  const {
    name = "name",
    location = "location",
    occupation = "no occup",
  } = agent;
  const { holdAgent } = useAgents();
  const [holdLoading, setHoldLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card data-aos="zoom-in" data-aos-dealy="100">
        <CardContent className="p-1 position-relative">
          <Chip
            size="small"
            style={{
              fontSize: "0.8rem",
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
              fontSize: "0.8rem",
              width: "13ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              left: "0",
            }}
            className={`bg-${
              agent.status === "running" ? "success" : "primary"
            }-subtle text-${
              agent.status === "running" ? "success" : "primary"
            } text-capitalize py-0 px-1  position-absolute mx-1 `}
            label={agent.status}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Avatar
              alt={agent.name.toUpperCase()}
              src={hostUri + "/" + agent.profileImage}
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
            <BiLocationPlus style={{ color: "red" }} size={20} /> {location}
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
              loading={holdLoading}
              onClick={() =>
                holdAgent(
                  agent._id,
                  agent.status === "running" ? "hold" : "running",
                  setHoldLoading
                )
              }
              className={`bg-${
                agent.status === "running" ? "success" : "primary"
              }-subtle px-4 shadow-sm py-1 rounded-4`}
            >
              {agent.status === "running" ? (
                <FaPause
                  size={15}
                  className={`text-${
                    agent.status === "running" ? "success" : "primary"
                  }`}
                />
              ) : (
                <FaPlay className="text-primary" />
              )}
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
        data={agent}
        handleCancel={() => {
          setIsModalVisible(false);
        }}
      />
      ;
    </Grid>
  );
}
