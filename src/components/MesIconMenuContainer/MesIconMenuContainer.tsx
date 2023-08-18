import { Grid, Stack } from "@mui/material";
import React, { FC, ReactNode, useContext } from "react";

// Catching Current layout
import MesLayoutContext from "../MesLayouts/MesLayoutContext/MesLayoutContext";

interface IProps {
  children: ReactNode | ReactNode[];
}

const MesIconMenuContainer: FC<IProps> = ({ children }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);

  return (
    <>
      {currentLayout === "1" && (
        <Grid
          item
          width={"64px"}
          style={{
            // border: "1px solid blue",
            padding: "0px 12px",
          }}
          direction={"column"}
        >
          <Stack spacing={"12px"}>{children}</Stack>
        </Grid>
      )}
      {currentLayout === "2" && (
        <Grid
          item
          height={"64px"}
          width={"543px"}
          style={{
            // border: "1px solid blue",
            position:"absolute",
            top:20,
            padding: "0px 2px",
            zIndex:9999
          }}
          direction={"row"}
        >
          <Stack spacing={"12px"} direction={"row"}>{children}</Stack>
        </Grid>
      )}
    </>
  );
};

export default MesIconMenuContainer;
