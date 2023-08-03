import { useState } from "react";
import { Button, MesTextField } from "./components";
import TitleBar from "./components/MesTitleBar/MesTitleBar";
import MesSideBar from "./components/SideBar/MesSideBar";
import MesSideBarHeader from "./components/SideBar/MesSideBarHeader";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const handleDrawer = (): void => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <TitleBar version="cantier version MES 4.0" brand="Mes Brand" />
      <MesSideBar variant="permanent" open={open}>
        <MesSideBarHeader onClick={handleDrawer}>Hello</MesSideBarHeader>
      </MesSideBar>
      <MesTextField label="Machine ID" placeholder="Enter Machine ID" />
    </div>
  );
}

export default App;
