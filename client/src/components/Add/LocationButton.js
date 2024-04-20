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

const LoactionButton = ({ Location, setLocation }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <span onClick={handleOpen} className="pointer w-100 h-100">
        <LocationOnIcon type="button" className="text-danger" />
        Location
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MapBox setLocation={setLocation} Location={Location} />
        </Box>
      </Modal>
    </>
  );
};

export default LoactionButton;
