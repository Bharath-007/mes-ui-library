import { IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";
import NotificationIcon from "../../../../Assets/HomeNotification.svg";

interface INotifications {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon: ReactNode;
  sx?: any;
}

const MesNotification: FC<INotifications> = ({ onClick, sx, icon }) => {
  return (
    <IconButton disableRipple onClick={onClick} style={{ padding: 0 }} sx={sx}>
      {icon ?? <NotificationIcon />}
    </IconButton>
  );
};

export default MesNotification;
