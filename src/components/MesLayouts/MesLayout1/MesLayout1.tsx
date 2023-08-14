import React, { FC, ReactNode } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MesTitleBar from "./MesTitleBar";
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

interface IProps {
  children?: ReactNode | ReactNode[];
}

const MesLayout1: FC<IProps> = ({ children }) => {
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <MesTitleBar version="Mes X.0">
        <Stack direction={"row"} spacing={"28.85px"}>
          <MesInfo icon={<InfoIcon />} />
          <MesNotification icon={<NotificationIcon />} />
          <MesSettings icon={<SettingsIcon />} />
        </Stack>
        <MesProfile src={DP} sx={{ marginLeft: "16.24px" }} />
      </MesTitleBar>
      {/* Body */}

      <Stack sx={{ width: "100%" }} height={"100vh"} direction={"row"}>
        <Stack
          width={"256px"}
          height={"505px"}
          mt={"72px"}
          // sx={{ border: "1px solid red" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="wrap"
          >
            {/* Menu Buttons */}
            <Grid
              item
              width={"64px"}
              style={{
                // border: "1px solid blue",
                padding: "0px 12px",
              }}
              direction={"column"}
            >
              <Stack spacing={"12px"}>
                <MesMenuIconBtn
                  icon={<MenuHome />}
                  hovered={<MenuHomeHovered />}
                  home={true}
                />
                <MesMenuIconBtn
                  icon={<MenuMasterData />}
                  hovered={<MenuMasterDataHovered />}
                />
                <MesMenuIconBtn
                  icon={<MenuSecurity />}
                  hovered={<MenuSecurityHovered />}
                />
                <MesMenuIconBtn
                  icon={<MenuIIOT />}
                  hovered={<MenuIIOTHovered />}
                />
                <MesMenuIconBtn icon={<MenuFM />} hovered={<MenuFMHovered />} />
                <MesMenuIconBtn icon={<MenuDB />} hovered={<MenuDBHovered />} />
                <MesMenuIconBtn
                  icon={<MenuARM />}
                  hovered={<MenuARMHovered />}
                />
                <MesMenuIconBtn icon={<MenuLM />} hovered={<MenuLMHovered />} />
              </Stack>
            </Grid>
            {/* Sub-menus */}
            <Grid
              item
              width={"192px"}
              minHeight={"458px"}
              borderRadius={"4px"}
              style={{
                border: "1px solid green",
                background: "#F2F2F2",
                boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
              }}
            >
              <SubMenuModule title="Master Data"></SubMenuModule>
            </Grid>
          </Grid>
        </Stack>
        {/* Body */}
        <Stack
          flexGrow={1}
          style={{ marginTop: "72px", marginLeft: "12px", marginRight: "12px" }}
          sx={{ border: "1px solid red" }}
        ></Stack>
      </Stack>
    </Stack>
  );
};
interface ISubMenuModule {
  title: string;
}

const SubMenuModule: FC<ISubMenuModule> = ({ title }) => {
  return (
    <Stack>
      <Stack
        height={"40px"}
        sx={{ backgroundColor: "#002856" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontFamily: "Segoe UI",
            fontSize: "14px",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MesLayout1;
