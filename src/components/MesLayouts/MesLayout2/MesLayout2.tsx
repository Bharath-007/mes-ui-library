import { Stack } from "@mui/material";
import React, { FC } from "react";

interface ILayout2{
  children:any;
}

const MesLayout2:FC<ILayout2> = ({children}) => {
  return (
    <Stack width={"100%"} height={"100vh"}>
      {children}
    </Stack>
  );
};

export default MesLayout2;
