import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { AiOutlineControl } from "react-icons/ai";
import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
const JobFilter = ({ jobs, setCurrent }) => {
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:3300/api/jobs/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      let filteredJobs = [...jobs];
      if (jobTypes.length > 0) {
        filteredJobs = filteredJobs.filter((job) =>
          jobTypes.includes(job.jobType)
        );
      }
      if (selectedCategory.length > 0) {
        filteredJobs = filteredJobs.filter((job) =>
          selectedCategory.includes(job.category)
        );
      }
      if (sortOrder === "asc") {
        filteredJobs.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      } else if (sortOrder === "desc") {
        filteredJobs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      setCurrent(filteredJobs);
    };

    handleFilter();
  }, [selectedCategory, jobTypes, jobs, setCurrent, sortOrder]);

  const handleSelectedCategory = (cat) => {
    if (selectedCategory.includes(cat)) {
      setSelectedCategory((prevCategories) =>
        prevCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedCategory((prevCategories) => [...prevCategories, cat]);
    }
  };

  return (
    <div className="job-filter">
      <IconButton
        color="secondary"
        aria-label="filter"
        onClick={() => setFiltersVisible(!filtersVisible)}
      >
        <AiOutlineControl size={30} color="black" />
      </IconButton>
      <Chip
        label={sortOrder === "asc" ? "Oldest" : "Newest"}
        onClick={() => {
          setSortOrder((prevSortOrder) =>
            prevSortOrder === "asc" ? "desc" : "asc"
          );
        }}
      />
      {filtersVisible && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="categories">
              <h3>Categories</h3>
              <div className="chip-container">
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    className={
                      selectedCategory.includes(category)
                        ? "bg-dark text-white"
                        : "bg-gray"
                    }
                    onClick={() => handleSelectedCategory(category)}
                  />
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="job-type">
              <h3>Job Type</h3>
              <div className="chip-container">
                {["remote", "full-time", "part-time", "hybrid"].map((type) => (
                  <Chip
                    key={type}
                    label={type.charAt(0).toUpperCase() + type.slice(1)}
                    className={
                      jobTypes.includes(type) ? "bg-dark text-white" : "bg-gray"
                    }
                    onClick={() =>
                      setJobTypes((prevJobTypes) =>
                        prevJobTypes.includes(type)
                          ? prevJobTypes.filter((t) => t !== type)
                          : [...prevJobTypes, type]
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default JobFilter;
