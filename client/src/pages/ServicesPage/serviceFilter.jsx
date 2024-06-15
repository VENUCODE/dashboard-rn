import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { AiOutlineControl } from "react-icons/ai";
import { Input } from "antd";
import ServiceFilterModal from "./serviceFilterModal"; // Corrected component import name
import { useServices } from "../../context/useServices";

const ServiceFilter = ({ setCurrent, count }) => {
  const { services } = useServices();
  const [categories, setCategories] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const allCategories = [
      ...new Set(services.map((service) => service.categoryName.toLowerCase())),
    ];
    const uniqueCategories = [
      ...new Set(allCategories.map((category) => category.toLowerCase())),
    ];
    setCategories(uniqueCategories);
  }, [services]);

  useEffect(() => {
    const handleFilter = () => {
      let filteredServices = [...services];

      //NOTE -  Apply category filter
      if (selectedCategories.length > 0) {
        filteredServices = filteredServices.filter((service) =>
          selectedCategories.some((category) =>
            [
              service.serviceName.toLowerCase(),
              service.categoryName.toLowerCase(),
              service.serviceDescription.toLowerCase(),
            ]
              .map((str) => str.toLowerCase())
              .includes(category.toLowerCase())
          )
        );
      }
      //NOTE -  Sort based on sortOrder
      if (sortOrder === "asc") {
        filteredServices.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      } else {
        filteredServices.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }

      //NOTE -  Apply search filter
      if (searchInput.trim()) {
        filteredServices = filteredServices.filter((service) =>
          service.serviceName.toLowerCase().includes(searchInput.toLowerCase())
        );
      }

      setCurrent(filteredServices);
    };

    handleFilter();
  }, [selectedCategories, services, setCurrent, searchInput, sortOrder]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setSelectedCategories([]);
  };

  return (
    <div className="service-filter">
      <div className="d-flex flex-row justify-content-between px-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by name or category"
            value={searchInput}
            onChange={handleSearchInputChange}
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
            onClick={() => setFiltersVisible((prev) => !prev)}
          >
            <AiOutlineControl color="#3B4CB8" size={30} />
          </IconButton>
        </div>
      </div>
      <ServiceFilterModal
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        isOpen={filtersVisible}
        onClose={() => setFiltersVisible(false)}
      />
    </div>
  );
};

export default ServiceFilter;
