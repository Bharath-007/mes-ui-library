import { useState } from "react";
import { Button, MesTextField } from "./components";
import TitleBar from "./components/MesTitleBar/MesTitleBar";
import MesSideBar from "./components/MesSideBar/MesSideBar";
import Typography from "@mui/material/Typography";
import { MesSideBarHeader } from "./components/MesSideBar/MesSideBarHeader";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const handleDrawer = (): void => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <TitleBar version="cantier version MES 4.0" brand="Mes Brand" />
      <MesSideBar
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            marginTop: "64px",
            marginLeft: "0px",
          },
          display: "block",
        }}
      >
        <Typography variant="body1" color="initial" onClick={handleDrawer}>
          <MesSideBarHeader>Hello</MesSideBarHeader>
        </Typography>
      </MesSideBar>
      <MesTextField label="Machine ID" placeholder="Enter Machine ID" />
    </div>
  );
}

export default App;
