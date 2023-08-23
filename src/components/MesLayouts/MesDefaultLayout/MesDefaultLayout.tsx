import { Stack } from "@mui/material";
import React, { FC, useContext } from "react";

// importing via context
import MesLayoutContext from "../../MesLayouts/MesLayoutContext/MesLayoutContext";

const MesDefaultLayout: FC<{ children?: any }> = ({ children }) => {
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);
  return (
    <>
      {currentLayout === "0" && (
        <Stack width={"100%"} height={"100vh"}>
          {children}
        </Stack>
      )}
    </>
  );
};

export default MesDefaultLayout;
