import React, { FC, ReactNode } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MesTitleBar from "../../MesTitleBar/MesTitleBar";
import DP from "../../../Assets/dp1.jpg";
import InfoIcon from "../../../Assets/MesInfo.svg";
import NotificationIcon from "../../../Assets/MesNotification.svg";
import SettingsIcon from "../../../Assets/MesSettings.svg";
import MenuHome from "../../../Assets/MenuHome.svg";
import MenuHomeHovered from "../../../Assets/MenuHomeHovered.svg";
import MenuMasterData from "../../../Assets/MenuMasterData.svg";
import MenuMasterDataHovered from "../../../Assets/MenuMasterDataHovered.svg";
import MenuSecurity from "../../../Assets/MenuSecurity.svg";
import MenuSecurityHovered from "../../../Assets/MenuSecurityHovered.svg";
import MenuIM from "../../../Assets/MenuIG.svg";
import MenuIMHovered from "../../../Assets/MenuIGHovered.svg";
import MenuIIOT from "../../../Assets/MenuIIOT.svg";
import MenuIIOTHovered from "../../../Assets/MenuIIOTHovered.svg";
import MenuFM from "../../../Assets/MenuFM.svg";
import MenuFMHovered from "../../../Assets/MenuFMHovered.svg";
import MenuDB from "../../../Assets/MenuDB.svg";
import MenuDBHovered from "../../../Assets/MenuDBHovered.svg";
import MenuARM from "../../../Assets/MenuARM.svg";
import MenuARMHovered from "../../../Assets/MenuARMHovered.svg";
import MenuLM from "../../../Assets/MenuLM.svg";
import MenuLMHovered from "../../../Assets/MenuLMHovered.svg";
import { MesInfo, MesNotification, MesProfile, MesSettings } from "../utils";
import MesMenuIconBtn from "../../Button/MesMenuIconBtn/MesMenuIconBtn";
// import { MesModuleButton } from "../../Home/MesHomeComponents/MesModule/MesModuleButton/MesModuleButton";
import MesMenuListBtn from "../../Button/MesMenuListBtn/MesMenuListBtn";
// import MesMenuModule from "./MesMenuModule/MesMenuModule";
import EmployeeIcon from "../../../Assets/SubMenuEmployees.svg";
import MesIconMenuContainer from "../../MesIconMenuContainer/MesIconMenuContainer";

interface IProps {
  children?: ReactNode | ReactNode[];
}

const MesLayout1: FC<IProps> = ({ children }) => {
  return (
    <Stack width={"100%"} height={"100vh"}>{children}</Stack>
  );
};

export default MesLayout1;
