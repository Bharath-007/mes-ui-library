import { IconButton } from "@mui/material";
import React, { FC } from "react";
import SettingsIcon from "../../../../Assets/HomeSettings.svg";

interface ISettings {
  onClick?: React.MouseEvent<MouseEvent> | any;
}

const MesHomeHeaderSettings: FC<ISettings> = ({ onClick }) => {
  return (
    <IconButton
      disableRipple
      onClick={onClick}
      sx={{ ml: "28.39px", mt: "7px", p: 0 }}
    >
      <SettingsIcon />
    </IconButton>
  );
};

export default MesHomeHeaderSettings;
