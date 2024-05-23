import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

import { Input } from "antd";

const SuppliesFilter = ({ setCurrent, products }) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchInput, setSearchInput] = useState("");
  const [sortCount, setSortCount] = useState("asc");
  useEffect(() => {
    const handleFilter = () => {
      let filteredProducts = [...products];

      if (searchInput.trim()) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.productName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            product.categoryName
              .toLowerCase()
              .includes(searchInput.toLowerCase())
        );
      }
      if (sortOrder !== "") {
        if (sortOrder === "asc") {
          filteredProducts.sort((a, b) =>
            a.productName.localeCompare(b.productName)
          );
        } else if (sortOrder === "desc") {
          filteredProducts.sort((a, b) =>
            b.productName.localeCompare(a.productName)
          );
        }
      }
      if (sortCount !== "") {
        if (sortCount === "asc") {
          filteredProducts.sort((a, b) => a.requestCount - b.requestCount);
        } else if (sortCount === "desc") {
          filteredProducts.sort((a, b) => b.requestCount - a.requestCount);
        }
      }

      setCurrent(filteredProducts);
    };

    handleFilter();
  }, [products, setCurrent, searchInput, sortOrder, sortCount]);

  const handleSearchInputChange = (event) => {
    setSortCount("");
    setSortOrder("");
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
        <div className="d-flex gap-1">
          <Chip
            size="small"
            className="bg-primary text-white"
            label={"sort" + (sortOrder !== "asc" ? "(A-Z)" : "(Z-A)")}
            onClick={() => {
              setSortCount("");
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
          <Chip
            size="small"
            className="bg-primary text-white"
            label={"Count" + (sortCount !== "asc" ? "(0-9)" : "(9-0)")}
            onClick={() => {
              setSortOrder("");
              setSortCount((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SuppliesFilter;
