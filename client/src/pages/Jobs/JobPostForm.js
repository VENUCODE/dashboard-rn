import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  InputAdornment,
  Chip,
} from "@mui/material";
import { Button } from "@mui/material";
import { Divider, message } from "antd";
import { ImCross } from "react-icons/im";
import { FaRegPlusSquare } from "react-icons/fa";
import { skills, jobCategories } from "../../data/JobsData";
import LocationInput from "./LocationInput";
import { useAuth } from "../../context/useAuth";
import { useJobs } from "../../context/useJobPosts";

const JobForm = () => {
  const { userData } = useAuth();
  const intitialFormData = {
    postedBy: userData.id,
    jobTitle: "",
    category: "",
    skillsRequired: [],
    experience: "",
    location: "",
    jobType: "",
    keyResponsibilities: [],
    qualification: "",
    aboutCompany: "",
    numberOfOpenings: "",
    coordinates: { lat: 0, long: 0 }, // Default values for latitude and longitude
  };
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [formData, setFormData] = useState(intitialFormData);

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      skillsRequired: selectedSkills,
    }));
  }, [selectedSkills]);

  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    } else {
      message.warning("Already selected", 1);
    }
    setSkill("select skill");
  };

  const handleDeleteSkill = (deletedSkill) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill !== deletedSkill
    );
    setSelectedSkills(updatedSkills);
    message.error("skill deleted");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const placeSelected = (data) => {
    const { name, formatted_address, lat, lng } = data;
    const location = formatted_address;
    const latitude = lat;
    const longitude = lng;
    setFormData({
      ...formData,
      location,
      coordinates: { lat: latitude, long: longitude },
    });
  };

  const handleAddKeyResponsibility = () => {
    setFormData({
      ...formData,
      keyResponsibilities: [...formData.keyResponsibilities, ""],
    });
  };

  const handleDeleteKeyResponsibility = (index) => {
    const updatedKeyResponsibilities = [...formData.keyResponsibilities];
    updatedKeyResponsibilities.splice(index, 1);
    setFormData({
      ...formData,
      keyResponsibilities: updatedKeyResponsibilities,
    });
  };

  const handleKeyResponsibilityChange = (index, value) => {
    const updatedKeyResponsibilities = [...formData.keyResponsibilities];
    updatedKeyResponsibilities[index] = value;
    setFormData({
      ...formData,
      keyResponsibilities: updatedKeyResponsibilities,
    });
  };
  const { addJob } = useJobs();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3300/api/jobs/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        console.log(data.data);
        addJob(data.data);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to add job post");
    } finally {
      setFormData(intitialFormData);
      setSelectedSkills([]);
      setSkill(null);

      setLoading(false);
    }
  };
  return (
    <div className="row my-2">
      <div className="col-10 offset-1 card shadow py-4">
        <form onSubmit={handleSubmit} autoComplete={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {" "}
              <Divider orientation="left" orientationMargin={10}>
                Primary Details
              </Divider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                name="jobTitle"
                label="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Job Category</InputLabel>
                <Select
                  name="category"
                  size="small"
                  value={formData.category}
                  onChange={(e) => {
                    const selectedCategory = e.target.value;
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      category: selectedCategory,
                    }));
                  }}
                  required
                >
                  {[...jobCategories].sort().map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              {" "}
              <Divider orientation="left" orientationMargin={10}>
                Job Specificcations
              </Divider>
            </Grid>
            {/* //!SECTION - skillsRequired */}
            {selectedSkills.length > 0 && (
              <Grid item xs={12}>
                <Divider orientation="center" orientationMargin={30}>
                  <small>Selected skills</small>
                </Divider>
                <div className="w-100 overflow-x-scroll d-flex flex-row">
                  {selectedSkills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      onDelete={() => handleDeleteSkill(skill)}
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                  ))}
                </div>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="skill">Select Skill</InputLabel>
                <Select
                  size="small"
                  labelId="skill"
                  id="skill-select"
                  placeholder="select skill"
                  onChange={handleSkillChange}
                  fullWidth
                  autoFocus={false}
                >
                  {[...skills].sort().map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* //SECTION - skills required 2 */}

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                name="experience"
                label="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                fullWidth
                size="small"
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                required
              /> */}
              <LocationInput size="small" onPlaceSelected={placeSelected} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
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
                size="small"
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
              <Divider orientation="left" orientationMargin={10}>
                Key Responsibilities
              </Divider>
              {formData.keyResponsibilities.map((keyResp, index) => (
                <div>
                  <TextField
                    className="my-2"
                    key={index}
                    fullWidth
                    size="small"
                    rows={1}
                    label={`Responsibility ${index + 1}`}
                    value={keyResp}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className="c-pointer "
                          onClick={() => handleDeleteKeyResponsibility(index)}
                        >
                          <ImCross size={15} color="black" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      handleKeyResponsibilityChange(index, e.target.value)
                    }
                    required
                  />
                </div>
              ))}
              <div>
                <Button
                  variant="outlined"
                  className="my-2 shadow-sm btn btn-black  text-black pe-2 ms-2 light text-center justify-content-center px-0 border-black border-2"
                  onClick={handleAddKeyResponsibility}
                >
                  <FaRegPlusSquare size={20} color="black" className="mx-2" />{" "}
                  Add
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider orientation="left" orientationMargin={10}>
                About Company
              </Divider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
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
                size="small"
                name="numberOfOpenings"
                label="Number of Openings"
                value={formData.numberOfOpenings}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                loading={loading}
                className="py-2 bg-info w-100 h-100 text-white fw-bolder"
                htmltype="submit"
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
