import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";

function ServiceUploadForm() {
  const [service, setService] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting:", service);
  };

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        Upload Service Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="serviceName"
              label="Service Category Name"
              name="serviceName"
              value={service}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Upload Service Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ServiceUploadForm;
