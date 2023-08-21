import { IconButton } from "@mui/material";
import React, { FC } from "react";
import NotificationIcon from "../../../../Assets/MesNotification.svg";

interface INotifications {
  onClick?: React.MouseEvent<MouseEvent> | any;
}

const MesHomeHeaderNotifications: FC<INotifications> = ({ onClick }) => {
  return (
    <IconButton
      disableRipple
      onClick={onClick}
      sx={{ ml: "28.39px", mt: "7px", p: 0 }}
    >
      <NotificationIcon />
    </IconButton>
  );
};

export default MesHomeHeaderNotifications;
