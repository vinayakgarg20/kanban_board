import React, { useState, useRef, useEffect } from "react";
import "./styles.css"; // Import CSS for styling
import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useAppState } from "../StateContext";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGroupingOpen, setIsGroupingOpen] = useState(false);
  const [isOrderingOpen, setIsOrderingOpen] = useState(false);

  const { selectedOptions, updateSelectedOptions } = useAppState();

  const dropdownRef = useRef(null);

  // Function to toggle the main dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the grouping dropdown
  const toggleGroupingDropdown = () => {
    setIsGroupingOpen(!isGroupingOpen);
  };

  // Function to toggle the ordering dropdown
  const toggleOrderingDropdown = () => {
    setIsOrderingOpen(!isOrderingOpen);
  };

  // Function to handle grouping selection
  const handleGroupChange = (event) => {
    updateSelectedOptions(event.target.value, selectedOptions.ordering);
    setIsGroupingOpen(true);
    setIsOrderingOpen(false);
  };

  // Function to handle ordering selection
  const handleOrderChange = (event) => {
    updateSelectedOptions(selectedOptions.grouping, event.target.value);
    setIsGroupingOpen(false);
    setIsOrderingOpen(true);
  };

  // Function to handle click outside to close the dropdowns
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsGroupingOpen(false);
      setIsOrderingOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener to handle click outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <TuneIcon sx={{ color: "#4C5159", fontSize: "16px" }} />
        <span className="header-text">Display</span>
        {isOpen ? (
          <ExpandLessIcon sx={{ color: "#4C5159", fontSize: "16px" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#4C5159", fontSize: "16px" }} />
        )}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-option" onClick={toggleGroupingDropdown}>
            <span className="dropdown-option-label">Grouping</span>
            <div className="select-container">
              {/* Use a select element for grouping */}
              <select
                className="dropdown-selector"
                value={selectedOptions.grouping}
                onChange={handleGroupChange}
              >
                <option value="status">Status</option>
                <option value="priority">Priority</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <div className="dropdown-option" onClick={toggleOrderingDropdown}>
            <span className="dropdown-option-label">Ordering</span>
            <div className="select-container">
              {/* Use a select element for ordering */}
              <select
                className="dropdown-selector"
                value={selectedOptions.ordering}
                onChange={handleOrderChange}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
