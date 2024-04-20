import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";
import { Button, message } from "antd";

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    skillsRequired: "",
    experience: "",
    location: "",
    jobType: "",
    keyResponsibilities: "",
    qualification: "",
    aboutCompany: "",
    numberOfOpenings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    message.info("Submit clicked");
    console.log(formData);
  };

  return (
    <div className="row">
      <div className="col-10 offset-1 card shadow py-4">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Job Posting Form
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="jobTitle"
                label="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="category"
                label="Category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="skillsRequired"
                label="Skills Required"
                value={formData.skillsRequired}
                placeholder="HTML,CSS,JS"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="experience"
                label="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Job Type</InputLabel>
                <Select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="remote">Remote</MenuItem>
                  <MenuItem value="fulltime">Full-time</MenuItem>
                  <MenuItem value="hybrid">Hybrid</MenuItem>
                  <MenuItem value="part-time">Part-time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="keyResponsibilities"
                label="Key Responsibilities"
                value={formData.keyResponsibilities}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="qualification"
                label="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="aboutCompany"
                label="About Company"
                value={formData.aboutCompany}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="numberOfOpenings"
                label="Number of Openings"
                value={formData.numberOfOpenings}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                className="py-2 bg-info w-100 h-100 text-white fw-bolder"
                htmlType="submit"
              >
                POST JOB
              </Button>
            </Grid>
          </Grid>
        </form>{" "}
      </div>
    </div>
  );
};

export default JobForm;
