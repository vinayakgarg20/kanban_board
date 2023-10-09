import React, { createContext, useContext, useState } from "react";
const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const initialState = {
    grouping: "status",
    ordering: "priority"
  };
  const savedState = JSON.parse(localStorage.getItem("appState"));
  const [selectedOptions, setSelectedOptions] = useState(
    savedState || initialState
  );
  const updateSelectedOptions = (grouping, ordering) => {
    const newSelectedOptions = { grouping, ordering };
    setSelectedOptions(newSelectedOptions);

    // saving "useState" into an "appState" at local storage of browser
    localStorage.setItem("appState", JSON.stringify(newSelectedOptions));
  };
  return (
    <AppStateContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
export const useAppState = () => {
    return useContext(AppStateContext);
  };
