import React, { FC, ReactNode, useContext, useEffect } from "react";

// Catching Current layout
import MesLayoutContext from "../MesLayouts/MesLayoutContext/MesLayoutContext";
import { Stack } from "@mui/material";

const MesMenuModuleUtils: FC<{
  children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}> = ({ children }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);

  return (
    <>
      {currentLayout === "2" && (
        <Stack
          direction="row"
          style={{maxHeight:"24px"}}
          justifyContent={"center"}
          mb={"15px"}
        >
          {children}
        </Stack>
      )}
    </>
  );
};

export default MesMenuModuleUtils;
