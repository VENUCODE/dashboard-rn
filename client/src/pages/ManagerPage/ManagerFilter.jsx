import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { AiOutlineControl } from "react-icons/ai";
import FilterModal from "./ManagerFilterModal";
import { Card, Input } from "antd";
import { useManager } from "../../context/useManager";
const ManagerFilter = ({ setCurrent }) => {
  const { managers } = useManager();
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const handleFilter = () => {
      let filteredManagers = [...managers];

      if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredManagers = filteredManagers.filter((manager) =>
          manager.name.toLowerCase().includes(searchTerm)
        );
      }
      if (sortOrder === "asc") {
        filteredManagers.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "desc") {
        filteredManagers.sort((a, b) => b.name.localeCompare(a.name));
      }

      setCurrent(filteredManagers);
    };

    handleFilter();
  }, [searchInput, sortOrder]);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="manager-filter  py-2 px-1">
      <div className="d-flex flex-row justify-content-between px-2 py-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by manager title or Occupation"
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
          {/* <IconButton
            color="secondary"
            aria-label="filter"
            onClick={() => setFiltersVisible((p) => !p)}
          >
            <AiOutlineControl color="#3B4CB8" size={30} />
          </IconButton> */}
        </div>
      </div>
      {/* <FilterModal
        isOpen={filtersVisible}
        onClose={() => setFiltersVisible(false)}
      /> */}
    </div>
  );
};

export default ManagerFilter;
