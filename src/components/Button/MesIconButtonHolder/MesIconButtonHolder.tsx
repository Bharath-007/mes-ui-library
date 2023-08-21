import { Stack } from "@mui/system";
import React, { FC, ReactNode } from "react";

const MesIconButtonHolder: FC<{
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return <Stack spacing={"8px"}>{children}</Stack>;
};

export default MesIconButtonHolder;
