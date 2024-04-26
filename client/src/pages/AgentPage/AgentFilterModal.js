import { Chip } from "@mui/material";
import React from "react";

const AgentFilterModal = ({
  Occupation,
  selectedOccupation,
  setSelectedOccupation,
  isOpen,
  onClose,
}) => {
  const handleSelectedOccupation = (cat) => {
    if (selectedOccupation.includes(cat)) {
      setSelectedOccupation((prevCategories) =>
        prevCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedOccupation((prevOccupation) => [...prevOccupation, cat]);
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
                  {Occupation.map((occupation) => (
                    <Chip
                      size="small"
                      key={occupation}
                      label={occupation}
                      className={` m-1 ${
                        selectedOccupation.includes(occupation)
                          ? "bg-dark text-white"
                          : "bg-gray"
                      }`}
                      onClick={() => handleSelectedOccupation(occupation)}
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

export default AgentFilterModal;
