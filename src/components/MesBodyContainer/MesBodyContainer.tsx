import { Stack } from "@mui/material";
import React, { FC, ReactNode, useContext, useEffect } from "react";

// importing via context
import MesLayoutContext from "../../components/MesLayouts/MesLayoutContext/MesLayoutContext";

const MesBodyContainer: FC<{
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);

  useEffect(() => {
    console.log(currentLayout);
  }, []);

  return (
    <>
      {currentLayout !== "0" && (
        <Stack sx={{ width: "100%" }} height={"100vh"} direction={"row"}>
          {children}
        </Stack>
      )}
    </>
  );
};

export default MesBodyContainer;
