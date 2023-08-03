import React, { FC, ReactNode, memo } from "react";
import CustomIconHolder from "../../utils/CustomIconHolder";
import { List, Stack } from "@mui/material";

interface IProps {
  children?: ReactNode | ReactNode[] | JSX.Element | any;
}

const MesSideBarClosed: FC<IProps> = ({ children }) => {
  return (
    <Stack>
      <CustomIconHolder>{children}</CustomIconHolder>
    </Stack>
  );
};

export default memo(MesSideBarClosed);
