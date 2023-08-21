import { IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";
import InfoIcon from "../../../../Assets/HomeInfo.svg";

interface IInfo {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon?: ReactNode;
}

const MesHomeHeaderInfo: FC<IInfo> = ({ onClick }) => {
  return (
    <IconButton
      disableRipple
      onClick={onClick}
      sx={{ ml: "28.39px", mt: "7px", p: 0 }}
    >
      <InfoIcon />
    </IconButton>
  );
};

export default MesHomeHeaderInfo;
