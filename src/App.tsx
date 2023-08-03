import { useState } from "react";
import { Button, MesSideBarClosed, MesTextField } from "./components";
import TitleBar from "./components/MesTitleBar/MesTitleBar";
import MesSideBar from "./components/SideBar/MesSideBar";
import MesSideBarHeader from "./components/SideBar/MesSideBarHeader";
import MainMenuIcon from "./Assets/MainMenu.svg";
import MesSideBarOpened from "./components/SideBar/MesSideBarOpenedState/MesSideBarOpened";
import MesListItemDropDown from "./components/SideBar/MesSideBarOpenedListDropDown/MesListItemDropDown";
import MesListItem from "./components/SideBar/MesSideBarOpenedListItem/MesListItem";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<number>();
  const [active, setActive] = useState<number>();
  const handleDrawer = (): void => {
    setOpen(!open);
  };

  const handleDropDown = (id: any) => {
    setDropdown(id);
  };

  const handleActive = (id: any) => {
    setActive(id);
  };

  return (
    <div className="App">
      <TitleBar version="cantier version MES 4.0" brand="Mes Brand" />
      <MesSideBar variant="permanent" open={open}>
        <MesSideBarHeader onClick={handleDrawer}>Module Name</MesSideBarHeader>
        {!open ? (
          <>
            <MesSideBarClosed>
              <MainMenuIcon />
            </MesSideBarClosed>
            <MesSideBarClosed>
              <MainMenuIcon />
            </MesSideBarClosed>
            <MesSideBarClosed>
              <MainMenuIcon />
            </MesSideBarClosed>
          </>
        ) : (
          <MesSideBarOpened>
            <MesListItemDropDown
              id={1}
              label="Main Menu 1"
              open={dropdown}
              onClick={() => handleDropDown(1)}
            >
              <MesListItem
                id={1}
                label="Sub Menu 1"
                active={active}
                onClick={() => handleActive(1)}
              />
              <MesListItem
                id={2}
                label="Sub Menu 2"
                active={active}
                onClick={() => handleActive(2)}
              />
              <MesListItem
                id={3}
                label="Sub Menu 3"
                active={active}
                onClick={() => handleActive(3)}
              />
              <MesListItem
                id={4}
                label="Sub Menu 4"
                active={active}
                onClick={() => handleActive(4)}
              />
            </MesListItemDropDown>
            <MesListItemDropDown
              id={2}
              label="Main Menu 2"
              open={dropdown}
              onClick={() => handleDropDown(2)}
            >
              <MesListItem
                id={5}
                label="Sub Menu 1"
                active={active}
                onClick={() => handleActive(5)}
              />
              <MesListItem
                id={6}
                label="Sub Menu 2"
                active={active}
                onClick={() => handleActive(6)}
              />
              <MesListItem
                id={7}
                label="Sub Menu 3"
                active={active}
                onClick={() => handleActive(7)}
              />
              <MesListItem
                id={8}
                label="Sub Menu 4"
                active={active}
                onClick={() => handleActive(8)}
              />
            </MesListItemDropDown>
            <MesListItemDropDown
              id={3}
              label="Main Menu 3"
              open={dropdown}
              onClick={() => handleDropDown(3)}
            >
              <MesListItem
                id={9}
                label="Sub Menu 1"
                active={active}
                onClick={() => handleActive(9)}
              />
              <MesListItem
                id={10}
                label="Sub Menu 2"
                active={active}
                onClick={() => handleActive(10)}
              />
              <MesListItem
                id={11}
                label="Sub Menu 3"
                active={active}
                onClick={() => handleActive(11)}
              />
              <MesListItem
                id={12}
                label="Sub Menu 4"
                active={active}
                onClick={() => handleActive(12)}
              />
            </MesListItemDropDown>
          </MesSideBarOpened>
        )}
      </MesSideBar>
      <MesTextField label="Machine ID" placeholder="Enter Machine ID" />
    </div>
  );
}

export default App;
