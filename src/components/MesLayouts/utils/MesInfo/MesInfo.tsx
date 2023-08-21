import { IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";
import InfoIcon from "../../../../Assets/HomeInfo.svg";

interface IInfo {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon: ReactNode;
  sx?: any;
}

const MesInfo: FC<IInfo> = ({ icon, onClick, sx }) => {
  return (
    <IconButton disableRipple onClick={onClick} style={{ padding: 0 }} sx={sx}>
      {icon ?? <InfoIcon />}
    </IconButton>
  );
};

export default MesInfo;
