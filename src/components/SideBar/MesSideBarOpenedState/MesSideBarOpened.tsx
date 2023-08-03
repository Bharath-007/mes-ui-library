import { Stack } from "@mui/material";
import React, { FC, ReactElement, ReactNode } from "react";

interface IProps {
  children: JSX.Element | ReactNode;
}

const MesSideBarOpened: FC<IProps> = ({ children }) => {
  return <Stack width={280}>{children}</Stack>;
};

export default MesSideBarOpened;
