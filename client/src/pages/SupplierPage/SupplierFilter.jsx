import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

import { Input } from "antd";
import { useSuppliers } from "../../context/useSupplier";

const SupplierFilter = ({ setCurrent, count }) => {
  const { suppliers } = useSuppliers();
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const handleFilter = () => {
      let filteredSuppliers = [...suppliers];

      if (searchInput.trim()) {
        filteredSuppliers = filteredSuppliers.filter((supplier) =>
          supplier.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }

      setCurrent(filteredSuppliers);
    };

    handleFilter();
  }, [suppliers, setCurrent, searchInput, sortOrder]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="service-filter">
      <div className="d-flex flex-row align-items-center py-1 px-2 justify-content-between px-2 bg-white">
        <Input
          type="text"
          placeholder="Search by name or category"
          value={searchInput}
          onChange={handleSearchInputChange}
          style={{ width: 200 }}
        />

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
  );
};

export default SupplierFilter;
