import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import MapBox from "../Map/MapBox";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "none ",
  boxShadow: 24,
  p: 4,
};

const LocationButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className=" position-relative px-4  d-flex flex-row flex-md-col">
        <Button
          className=" text-dark text-wrap bg-danger-subtle  d-flex flex-row justify-content-center rounded-4 align-items-center"
          style={{
            width: "15ch",

            cursor: "pointer",
            textOverflow: "ellipsis ",
            whiteSpace: "nowrap",
          }}
          onClick={handleOpen}
        >
          <LocationOnIcon className="text-danger" />
          <span
            style={{
              fontSize: "4px",
            }}
          >
            Ongole
          </span>
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MapBox />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default LocationButton;
