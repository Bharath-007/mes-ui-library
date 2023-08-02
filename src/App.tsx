import { useState } from "react";
import { Button, MesTextField } from "./components";
import TitleBar from "./components/MesTitleBar/MesTitleBar";
import MesSideBar from "./components/MesSideBar/MesSideBar";

function App() {
  return (
    <div className="App">
      <TitleBar version="cantier version MES 4.0" brand="Mes Brand" />
      <MesSideBar />
      <MesTextField label="Machine ID" placeholder="Enter Machine ID" />
    </div>
  );
}

export default App;
