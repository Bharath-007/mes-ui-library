import React, { FC } from "react";
import CustomIconHolder from "../../utils/CustomIconHolder";
import { List } from "@mui/material";
interface IProps {
  index?: any;
  children: any;
}

const MesSideBarClosed: FC<IProps> = ({ index, children }) => {
  return (
    <>
      <List key={index} disablePadding>
        <CustomIconHolder>{children}</CustomIconHolder>
      </List>
    </>
  );
};

export default MesSideBarClosed;
