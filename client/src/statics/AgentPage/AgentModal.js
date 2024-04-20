import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AgentDetails from "../../jani/AgentDetails";
import useModalState from "../../hooks/useModalState";

export default function AgentModal() {
  const { open, handleOpen, handleClose } = useModalState();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "90%",
            maxWidth: "600px",
            maxHeight: "80%",
            overflowY: "auto",
          }}
        ></Box>
      </Modal>
    </div>
  );
}
