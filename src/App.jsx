import React from "react";
import { Board } from "./Container/BoardContainer";
import { AppStateProvider } from "./Components/StateContext";
const App = () => {
 
  return (
    <AppStateProvider>
      <Board/>
    </AppStateProvider>
  );
};

export default App;
