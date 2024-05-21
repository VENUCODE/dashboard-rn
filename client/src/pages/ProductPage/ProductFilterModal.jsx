import { Chip } from "@mui/material";
import React from "react";

const ProductFilterModal = ({
  category,
  selectedcategory,
  setSelectedcategory,
  isOpen,
  onClose,
}) => {
  const handleSelectedcategory = (cat) => {
    if (selectedcategory.includes(cat)) {
      setSelectedcategory((prevCategories) =>
        prevCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedcategory((prevcategory) => [...prevcategory, cat]);
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
                <h3>categories</h3>
                <div className="chip-container">
                  {category.map((categ) => (
                    <Chip
                      size="small"
                      key={categ}
                      label={categ}
                      className={` m-1 ${
                        selectedcategory.includes(categ)
                          ? "bg-dark text-white"
                          : "bg-gray"
                      }`}
                      onClick={() => handleSelectedcategory(categ)}
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

export default ProductFilterModal;
