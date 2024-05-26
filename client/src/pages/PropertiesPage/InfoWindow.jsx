import React from "react";
import { InfoWindow } from "@vis.gl/react-google-maps";
import { Button, Chip } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa6";
import { Typography } from "antd";
import { hostUri } from "../../fetch";
const PopupWindow = ({ action }) => {
  return (
    <InfoWindow
      position={action.location}
      style={{ height: "200px", width: "200px", overflow: "hidden" }}
      onClose={() => setaction(false)}
    >
      <div className="container-fluid">
        <Typography
          level="subtitle1"
          style={{
            maxWidth: "190px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {action.data.name}
        </Typography>
        <div>
          <Chip
            size="small"
            style={{
              overflow: "hidden",
              padding: 0,
              textOverflow: "ellipis",
              whiteSpace: "nowrap",
            }}
            label={action.data.type}
            className="bg-success-subtle text-success-emphasis  rounded-4 text-capitalize text-small fw-bold "
          />

          <Chip
            size="small"
            style={{
              overflow: "hidden",
              padding: 0,
              textOverflow: "ellipis",
              whiteSpace: "nowrap",
            }}
            label={
              <>
                <FaRupeeSign />
                {action.data.price}
              </>
            }
            className=" p-0 m-0 bg-success-subtle text-success-emphasis rounded-4 text-capitalize text-small fw-bold "
          />
        </div>
        <div className="my-1  card shadow border border-1 border-danger overflow-hidden">
          {action.data.image && (
            <img
              height="100px"
              width="200px"
              style={{ objectFit: "cover" }}
              src={hostUri + "/" + action.data.image}
            />
          )}
        </div>
        <Button size="small" variant="contained" color="primary">
          Explore
        </Button>
      </div>
    </InfoWindow>
  );
};

export default PopupWindow;
