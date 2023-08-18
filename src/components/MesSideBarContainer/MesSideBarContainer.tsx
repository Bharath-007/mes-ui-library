import React, { FC, ReactNode, useContext } from "react";
import { Grid, Stack } from "@mui/material";
// Catching Current layout
import MesLayoutContext from "../MesLayouts/MesLayoutContext/MesLayoutContext";

const MesSideBarContainer: FC<{
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}> = ({ children }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);
  return (
    <>
      {currentLayout === "1" && (
        <Stack
          width={"256px"}
          height={"505px"}
          mt={"72px"}
        //   sx={{ border: "1px solid green" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            height={"680px"}
            wrap="wrap"
            // sx={{ border: "1px solid red" }}
          >
            {children}
          </Grid>
        </Stack>
      )}
      {currentLayout === "2" && (
        <Stack
          width={"192px"}
          height={"680px"}
          mt={"72px"}
          ml={"12px"}
        //   sx={{ border: "1px solid green" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            height={"680px"}
            wrap="wrap"
            // sx={{ border: "1px solid red" }}
          >
            {children}
          </Grid>
        </Stack>
      )}
    </>
  );
};

export default MesSideBarContainer;
