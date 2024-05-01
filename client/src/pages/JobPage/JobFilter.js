import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { AiOutlineControl } from "react-icons/ai";
import FilterModal from "./JobFilterModal";
import { Input } from "antd";
const JobFilter = ({ jobs, setCurrent, count }) => {
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
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

  const [searchInput, setSearchInput] = useState("");
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
      if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredJobs = filteredJobs.filter(
          (job) =>
            job.jobTitle.toLowerCase().includes(searchTerm) ||
            job.category.toLowerCase().includes(searchTerm)
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
  }, [selectedCategory, jobTypes, jobs, setCurrent, sortOrder, searchInput]);

  const handleSelectedCategory = (cat) => {
    if (selectedCategory.includes(cat)) {
      setSelectedCategory((prevCategories) =>
        prevCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedCategory((prevCategories) => [...prevCategories, cat]);
    }
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setSelectedCategory([]);
    setJobTypes([]);
  };

  return (
    <div className="job-filter">
      <div className="d-flex flex-row justify-content-between px-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by job title or category"
            value={searchInput}
            onChange={(e) => handleSearchInputChange(e)}
            style={{ width: 200 }}
          />
        </div>

        <div className="justify-content-center align-items-center d-flex">
          <Chip
            size="small"
            className="bg-primary text-white"
            label={sortOrder === "asc" ? "Oldest" : "Newest"}
            onClick={() => {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
          <IconButton
            color="secondary"
            aria-label="filter"
            onClick={() => setFiltersVisible((p) => !p)}
          >
            <AiOutlineControl color="#3B4CB8" size={30} />
          </IconButton>
        </div>
      </div>
      <FilterModal
        categories={categories}
        selectedCategory={selectedCategory}
        jobTypes={jobTypes}
        setJobTypes={setJobTypes}
        setSelectedCategory={setSelectedCategory}
        isOpen={filtersVisible}
        onClose={() => setFiltersVisible(false)}
      />
    </div>
  );
};

export default JobFilter;
