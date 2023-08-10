import {
  AppBar,
  Box,
  Link,
  styled,
  Grid,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import CantierLogo from "../../../Assets/CantierHomeLogo.svg";
import BruceDP from "../../../Assets/BruceProfile.png";
import SettingsIcon from "../../../Assets/HomeSettings.svg";
import NotificationIcon from "../../../Assets/HomeNotification.svg";
import InfoIcon from "../../../Assets/HomeInfo.svg";
import { Stack } from "@mui/system";

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#0000",
  minHeight: "64px",
  maxHeight: "64px",
  boxShadow: "none",
}));

interface ISettings {
  onClick?: React.MouseEvent<MouseEvent> | any;
}

const Settings: FC<ISettings> = ({ onClick }) => {
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

interface INotifications {
  onClick?: React.MouseEvent<MouseEvent> | any;
}

const Notifications: FC<INotifications> = ({ onClick }) => {
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

interface IInfo {
  onClick?: React.MouseEvent<MouseEvent> | any;
}

const Info: FC<IInfo> = ({ onClick }) => {
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

interface IProps {
  children?: JSX.Element | ReactNode | ReactNode[];
}

const MesHome: FC<IProps> = ({ children }) => {
  return (
    <Stack
      alignItems="center"
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      {/* Tools */}
      <Stack
        // sx={{ marginTop: "65px" }}
        spacing={"48px"}
        style={{
          minWidth: "580px",
          minHeight: "802px",
          marginTop: "20px",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default MesHome;
