import {
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Snackbar,
  styled,
  Typography,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { FaFileUpload, FaTrashAlt } from "react-icons/fa";
import { Card, Switch, message } from "antd";
import { endpoints, hostUri } from "../../fetch";
import ResponseCard from "./ResponseCard";
import { useAuth } from "../../context/useAuth";
import Instructions from "./Instructions";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [operationType, setOperationType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const fileInputRef = useRef(null);
  const { userData } = useAuth();
  const [guides, setGuides] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file.name.endsWith(".csv")) {
      message.error("Please select a CSV file.", 1);
      return;
    }
    setSelectedFile(file);
  };
  const handleToggleChange = (event, newValue) => {
    setOperationType(newValue);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile && operationType) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("agentId", userData.id);
      console.log(selectedFile);

      formData.append("operationType", operationType);
      try {
        setLoading(true);
        const response = await fetch(hostUri + endpoints.uploadFile, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (response.ok) {
          setResponseData(result.data);
          handleFileRemove();
          console.log("Server response:", result.data);
          message.success("File uploaded successfully.");
        } else {
          message.error("Failed to upload ");
        }
      } catch (error) {
        console.error("Error uploading file:", error.message);
        message.error("Failed to upload file.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please select a CSV file and choose an operation type.");
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setResponseData(null);
    setOpen(false);
  };
  useEffect(() => {
    if (responseData) {
      setOpen(true);
      setGuides(false);
    }
  }, [responseData]);

  return (
    <div className="content-body">
      <div className="container-fluid">
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex justify-content-center gap-2 mb-4"
          >
            <Card variant="outlined" className=" w-100 p-0">
              <CardContent className="p-0">
                <div className="w-100  text-center mb-2">
                  <Typography variant="subtitle2">Select the target</Typography>
                </div>
                <div className="d-flex justify-content-center gap-4 ">
                  <Switch
                    className={`${
                      operationType === "properties"
                        ? "bg-success text-black"
                        : "bg-danger"
                    } shadow`}
                    checked={operationType === "properties"}
                    unCheckedChildren="Properties"
                    checkedChildren="Properties"
                    onClick={() =>
                      setOperationType(
                        operationType === "properties" ? null : "properties"
                      )
                    }
                  />
                  <Switch
                    className={`${
                      operationType === "products"
                        ? "bg-success text-black"
                        : "bg-danger"
                    } shadow`}
                    checked={operationType === "products"}
                    unCheckedChildren="Products"
                    checkedChildren="Products"
                    onClick={() =>
                      setOperationType(
                        operationType === "products" ? null : "products"
                      )
                    }
                  />
                  <Switch
                    className={`${
                      operationType === "services"
                        ? "bg-success text-black"
                        : "bg-danger"
                    } shadow`}
                    checked={operationType === "services"}
                    unCheckedChildren="Services"
                    checkedChildren="Services"
                    onClick={() =>
                      setOperationType(
                        operationType === "services" ? null : "services"
                      )
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit} className="w-100">
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center "
            >
              <Card className="w-100">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      role={"input"}
                      className="w-100 btn p-4 btn-primary light btn-outline-primary"
                      tabIndex={-1}
                      disabled={selectedFile}
                      startIcon={<FaFileUpload />}
                    >
                      Select File
                      <VisuallyHiddenInput
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        type="file"
                        accept=".csv"
                        multiple={false}
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {selectedFile && (
                      <Typography
                        level="subtitle1"
                        className="d-flex gap-4 rounded-3 text-primary align-items-center p-2 my-2 bg-warning-subtle border border-1 border-warning"
                        style={{ width: "max-content" }}
                      >
                        {selectedFile.name}
                        <FaTrashAlt
                          className="c-pointer"
                          size={15}
                          color="red"
                          onClick={handleFileRemove}
                        />
                      </Typography>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="d-flex justify-content-center flex-column "
                  >
                    <Typography variant="caption" className="text-danger">
                      {!guides && "Read the instructions to enable"}
                      {guides && !selectedFile && "Select file"}
                      {guides &&
                        selectedFile &&
                        !operationType &&
                        "Select target"}
                    </Typography>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      className="px-5 py-3"
                      disabled={
                        !operationType || !selectedFile || loading || !guides
                      }
                    >
                      {loading && (
                        <>
                          <CircularProgress
                            size={20}
                            color="inherit"
                            className="me-2"
                          />{" "}
                          <span>Uploading</span>
                        </>
                      )}
                      {!loading && "Upload"}
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            responseData?.length + " records uploaded in " + operationType
          }
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
        {/* {responseData && <ResponseCard responseData={responseData} />} */}
        <div className="container-fluid">
          <h2 className="poppins-bold">Instructions</h2>
          <Instructions />
          <Button
            variant="outlined"
            className="mb-3 float-end w-25 btn btn-success border border-success  light"
            onClick={() => setGuides((p) => !p)}
            disabled={guides}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
