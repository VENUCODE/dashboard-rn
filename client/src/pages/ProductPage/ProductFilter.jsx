import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

import { Input } from "antd";
import { useProducts } from "../../context/useProducts";
import { IconButton } from "@mui/material";
import ProductFilterModal from "./ProductFilterModal";
import { AiOutlineControl } from "react-icons/ai";
const ProductFilter = ({ setCurrent }) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const { products } = useProducts();
  const [categories, setCategories] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((p) => p.categoryName.toLowerCase()))
    );
    setCategories(uniqueCategories);
  }, [products]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const handleFilter = () => {
      let filteredProducts = [...products];
      if (selectedCategory.length > 0) {
        filteredProducts = products.filter((product) => {
          return selectedCategory.includes(product.categoryName.toLowerCase());
        });
      }
      if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredProducts = filteredProducts.filter((product) =>
          product.productName.toLowerCase().includes(searchTerm)
        );
      }
      if (sortOrder === "asc") {
        filteredProducts.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        );
      } else if (sortOrder === "desc") {
        filteredProducts.sort((a, b) =>
          b.productName.localeCompare(a.productName)
        );
      }
      setCurrent(filteredProducts);
    };

    handleFilter();
  }, [searchInput, sortOrder, selectedCategory]);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="product-filter  py-2 px-1">
      <div className="d-flex flex-row justify-content-between px-2 py-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by product title or Occupation"
            value={searchInput}
            onChange={(e) => handleSearchInputChange(e.target.value)}
            style={{ width: 200 }}
          />
        </div>

        <div className="justify-content-center align-items-center d-flex gap-1">
          <Chip
            size="small"
            className="bg-primary text-white"
            label={"All"}
            onClick={() => {
              setSortOrder("asc");
              setSearchInput("");
              setSelectedCategory([]);
            }}
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
          <IconButton
            color="secondary"
            aria-label="filter"
            onClick={() => setFiltersVisible((p) => !p)}
          >
            <AiOutlineControl color="#3B4CB8" size={30} />
          </IconButton>
        </div>
        <ProductFilterModal
          category={categories}
          selectedcategory={selectedCategory}
          setSelectedcategory={setSelectedCategory}
          isOpen={filtersVisible}
          onClose={() => setFiltersVisible(false)}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
