import React, { useState, useCallback, useRef } from "react";
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
import { endpoints, hostUri } from "../../fetch";

const JobForm = () => {
  const { userData } = useAuth();
  const intitialFormData = {
    postedBy: userData.id,
    jobTitle: "",
    category: "",
    skillsRequired: [],
    expectedSalary: null,
    companyName: "",
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
  const [loading, setLoading] = useState(false);
  const jobForm = useRef(null);
  const [skill, setSkill] = useState("Select Skill");

  const handleSkillChange = useCallback(
    (selectedSkill) => {
      if (
        selectedSkill !== "Select Skill" &&
        !selectedSkills.includes(selectedSkill)
      ) {
        setSelectedSkills((prevSelectedSkills) => [
          ...prevSelectedSkills,
          selectedSkill,
        ]);
        setFormData((prevFormData) => ({
          ...prevFormData,
          skillsRequired: [...prevFormData.skillsRequired, selectedSkill],
        }));
        setSkill(""); // Reset skill state after adding
      } else {
        message.warning(
          selectedSkill ? "Already selected" : "Please select a valid skill",
          1
        );
      }
    },
    [selectedSkills]
  );

  const handleDeleteSkill = useCallback(
    (deletedSkill) => {
      const updatedSkills = selectedSkills.filter(
        (skill) => skill !== deletedSkill
      );
      setSelectedSkills(updatedSkills);
      message.error("Skill deleted");
    },
    [selectedSkills]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const placeSelected = useCallback((data) => {
    const { formatted_address, lat, lng } = data;
    const location = formatted_address;
    const latitude = lat;
    const longitude = lng;
    setFormData((prevFormData) => ({
      ...prevFormData,
      location,
      coordinates: { lat: latitude, long: longitude },
    }));
  }, []);

  const handleAddKeyResponsibility = useCallback(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      keyResponsibilities: [...prevFormData.keyResponsibilities, ""],
    }));
  }, []);

  const handleDeleteKeyResponsibility = useCallback((index) => {
    setFormData((prevFormData) => {
      const updatedKeyResponsibilities = [...prevFormData.keyResponsibilities];
      updatedKeyResponsibilities.splice(index, 1);
      return {
        ...prevFormData,
        keyResponsibilities: updatedKeyResponsibilities,
      };
    });
  }, []);

  const handleKeyResponsibilityChange = useCallback((index, value) => {
    setFormData((prevFormData) => {
      const updatedKeyResponsibilities = [...prevFormData.keyResponsibilities];
      updatedKeyResponsibilities[index] = value;
      return {
        ...prevFormData,
        keyResponsibilities: updatedKeyResponsibilities,
      };
    });
  }, []);

  const { addJob } = useJobs();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log({ selectedSkills, formData });
      // return;
      const response = await fetch(hostUri + endpoints.addJobPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        addJob();
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to add job post");
    } finally {
      setFormData(intitialFormData);

      setSelectedSkills([]);
      setSkill("Select Skill");
      jobForm.current?.reset();
      setLoading(false);
    }
  };

  return (
    <div className="row my-2" data-aos="fade-in">
      <div className="col-10 offset-1 card shadow py-4 ">
        <form onSubmit={handleSubmit} ref={jobForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Divider
                className="p-0 m-0 "
                orientation="left"
                orientationMargin={10}
              >
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
                <InputLabel className="bg-white">Job Category</InputLabel>
                <Select
                  name="category"
                  size="small"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {[...jobCategories].sort().map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider
                className="p-0 m-0 "
                orientation="left"
                orientationMargin={10}
              >
                Job Specificcations
              </Divider>
            </Grid>
            {selectedSkills.length > 0 && (
              <Grid item xs={12}>
                <Divider
                  className="p-0 m-0 "
                  orientation="center"
                  orientationMargin={30}
                >
                  <small>Selected skills</small>
                </Divider>
                <div className="w-100 overflow-x-scroll d-flex flex-row">
                  {selectedSkills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      className="mx-1 p-1"
                      size="small"
                      onDelete={() => handleDeleteSkill(skill)}
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                  ))}
                </div>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="skill" className="bg-white">
                  Select Skill
                </InputLabel>
                <Select
                  size="small"
                  labelId="skill"
                  id="skill-select"
                  placeholder="Select skill"
                  onChange={(e) => handleSkillChange(e.target.value)}
                  fullWidth
                  value={skill}
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
              <TextField
                fullWidth
                size="small"
                name="expectedSalary"
                label="Expected Salary"
                value={formData.expectedSalary}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel className="bg-white">Job Type</InputLabel>
                <Select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="remote">Remote</MenuItem>
                  <MenuItem value="fulltime">Full-time</MenuItem>
                  <MenuItem value="hybrid">Hybrid</MenuItem>
                  <MenuItem value="parttime">Part-time</MenuItem>
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
              <Divider
                className="p-0 m-0 "
                orientation="left"
                orientationMargin={10}
              >
                Key Responsibilities
              </Divider>
              {formData.keyResponsibilities.map((keyResp, index) => (
                <div key={index}>
                  <TextField
                    className="my-2"
                    fullWidth
                    size="small"
                    rows={1}
                    label={`Responsibility ${index + 1}`}
                    value={keyResp}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className="c-pointer"
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
                  className="my-2 shadow-sm btn btn-black text-black pe-2 ms-2 light text-center justify-content-center px-0 border-black border-2"
                  onClick={handleAddKeyResponsibility}
                >
                  <FaRegPlusSquare size={20} color="black" className="mx-2" />{" "}
                  Add
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider
                className="p-0 m-0 "
                orientation="left"
                orientationMargin={10}
              >
                About Company
              </Divider>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                name="companyName"
                label="Company name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <LocationInput
                fullWidth
                size="small"
                onPlaceSelected={placeSelected}
              />
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
