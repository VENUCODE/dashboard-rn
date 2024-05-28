import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { Input } from "antd";
import { useAd } from "../../context/useAd";
const AdFilter = ({ setCurrent }) => {
  const { ads } = useAd();
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const handleFilter = () => {
      let filteredads = [...ads];
      if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredads = filteredads.filter(
          (ad) =>
            ad.adTitle.toLowerCase().includes(searchTerm) ||
            ad.adCategory.toLowerCase().includes(searchTerm) ||
            ad.adOrigins.toLowerCase().includes(searchTerm) ||
            ad.adLocation.toLowerCase().includes(searchTerm)
        );
      }
      if (sortOrder === "asc") {
        filteredads.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
      } else if (sortOrder === "desc") {
        filteredads.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
      }

      setCurrent(filteredads);
    };
    handleFilter();
  }, [searchInput, sortOrder, ads]);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="ad-filter  w-100">
      <div className="d-flex flex-row justify-content-between px-2 py-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by title,category,.."
            value={searchInput}
            onChange={(e) => handleSearchInputChange(e.target.value)}
            style={{ width: 200 }}
          />
        </div>

        <div className="justify-content-center align-items-center d-flex">
          <Chip
            size="small"
            className="bg-primary text-white"
            label={"sort" + (sortOrder !== "asc" ? "(A-Z)" : "(Z-A)")}
            onClick={() => {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdFilter;
