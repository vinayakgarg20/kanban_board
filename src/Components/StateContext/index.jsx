import React, { createContext, useContext, useState } from "react";

// Create a context for the application state
const AppStateContext = createContext();

// Define the AppStateProvider component to manage and provide application state
export const AppStateProvider = ({ children }) => {
  // Define the initial state for selected options
  const initialState = {
    grouping: "status",
    ordering: "priority"
  };

  // Retrieve saved state from local storage, if available
  const savedState = JSON.parse(localStorage.getItem("appState"));

  // Initialize state using the saved state or the initial state
  const [selectedOptions, setSelectedOptions] = useState(
    savedState || initialState
  );

  // Function to update selected options and save to local storage
  const updateSelectedOptions = (grouping, ordering) => {
    const newSelectedOptions = { grouping, ordering };
    setSelectedOptions(newSelectedOptions);

    // Save the new state to local storage
    localStorage.setItem("appState", JSON.stringify(newSelectedOptions));
  };

  // Provide the selectedOptions and updateSelectedOptions values to the context
  return (
    <AppStateContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to access the application state values
export const useAppState = () => {
  return useContext(AppStateContext);
};
