import React, { useState, useRef, useEffect } from "react";
import "./styles.css"; // Import your CSS for styling
import TuneIcon from "@mui/icons-material/Tune";

import { useAppState } from "../StateContext";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOptions, updateSelectedOptions } = useAppState();

  const dropdownRef = useRef(null);

  // const {selectedOptions, setSelectedOptions}=useAppState();
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleGroupChange = (event) => {
    updateSelectedOptions(event.target.value, selectedOptions.ordering);
  };
  const handleOrderChnage = (event) => {
    updateSelectedOptions(selectedOptions.grouping, event.target.value);
  };
  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        Display
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-option">
            <span>Grouping</span>
            <select
              value={selectedOptions.grouping}
              onChange={handleGroupChange}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="dropdown-option">
            <span>Ordering</span>
            <select
              value={selectedOptions.ordering}
              onChange={handleOrderChnage}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

