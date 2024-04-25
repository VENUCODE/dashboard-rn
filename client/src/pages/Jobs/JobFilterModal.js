import { Chip } from "@mui/material";
import React from "react";

const FilterModal = ({
  categories,
  selectedCategory,
  jobTypes,
  setJobTypes,
  setSelectedCategory,
  isOpen,
  onClose,
}) => {
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
    <>
      {isOpen && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
        tabIndex="-1"
        aria-hidden={!isOpen}
        role="dialog"
        aria-labelledby="filterModal"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModal">
                Filter Options
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="categories">
                <h3>Categories</h3>
                <div className="chip-container">
                  {categories.map((category) => (
                    <Chip
                      size="small"
                      key={category}
                      label={category}
                      className={` m-1 ${
                        selectedCategory.includes(category)
                          ? "bg-dark text-white"
                          : "bg-gray"
                      }`}
                      onClick={() => handleSelectedCategory(category)}
                    />
                  ))}
                </div>
              </div>
              <div className="job-type">
                <h3>Job Type</h3>
                <div className="chip-container">
                  {["remote", "full-time", "part-time", "hybrid"].map(
                    (type) => (
                      <Chip
                        size="small"
                        key={type}
                        label={type.charAt(0).toUpperCase() + type.slice(1)}
                        className={` px-1 mx-1 py-1 ${
                          jobTypes.includes(type)
                            ? "bg-dark text-white"
                            : "bg-gray"
                        }`}
                        onClick={() =>
                          setJobTypes((prevJobTypes) =>
                            prevJobTypes.includes(type)
                              ? prevJobTypes.filter((t) => t !== type)
                              : [...prevJobTypes, type]
                          )
                        }
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger bg-danger-subtle "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default FilterModal;
