import { Chip } from "@mui/material";
import React, { useEffect } from "react";

const serviceFilterModal = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  isOpen,
  onClose,
}) => {
  const handleSelectedCategories = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedCategories((preCategories) => [...preCategories, cat]);
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
                <h3>Service Categories</h3>
                <div className="chip-container">
                  {categories.map((category) => (
                    <Chip
                      size="small"
                      key={category}
                      label={category}
                      className={` m-1 ${
                        selectedCategories?.includes(category)
                          ? "bg-dark text-white"
                          : "bg-gray"
                      }`}
                      onClick={() => handleSelectedCategories(category)}
                    />
                  ))}
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

export default serviceFilterModal;
