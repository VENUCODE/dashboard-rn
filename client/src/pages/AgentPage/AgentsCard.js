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
import { FaPause, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "antd";
export default function AgentCard({ agent, ...props }) {
  const {
    id = "1234",
    name = "name",
    location = "location",
    occupation = "no occup",
    image = "https://placehold.co/100x100.png",
  } = agent;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent className="p-1 position-relative">
          <Chip
            size="small"
            style={{ fontSize: "6px" }}
            className="bg-primary-subtle text-primary text-capitalize py-0 px-1  position-absolute"
            label={occupation}
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
          <Typography variant="h6" component="div" mt={2} textAlign="center">
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
              className="bg-danger-subtle px-4 shadow-sm py-1 rounded-4"
            >
              <FaRegTrashAlt size={15} className="text-danger" />
            </Button>
            <Button
              variant="outlined"
              className="bg-primary-subtle px-4 shadow-sm py-1 rounded-4"
            >
              <FaPause size={15} className="text-primary" />
            </Button>

            <Button
              variant="outlined"
              className="bg-info-subtle px-4 shadow-sm py-1 rounded-4"
            >
              <LuView size={15} className="text-info" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
