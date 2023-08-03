import React, { FC } from "react";
import CustomIconHolder from "../../utils/CustomIconHolder";
import { List, Stack } from "@mui/material";

interface IProps {
  children: any;
}

const MesSideBarClosed: FC<IProps> = ({ children }) => {
  return (
    <Stack>
      <CustomIconHolder>{children}</CustomIconHolder>
    </Stack>
  );
};

export default MesSideBarClosed;
