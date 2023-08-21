import React, { useState } from "react";
import MesHome from "./components/Home/MesHome/MesHome";
import MesModules from "./components/Home/MesHomeComponents/MesModule/MesModules/MesModules";
import MesQuiklinks from "./components/Home/MesHomeComponents/MesQuiklink/MesQuicklinks";
import MesPrivacyPolicy from "./components/Home/MesHomeComponents/MesPrivacyPolicy/MesPrivacyPolicy";
import MesFAQ from "./components/Home/MesHomeComponents/MesFAQ/MesFAQ";
import MesSupport from "./components/Home/MesHomeComponents/MesSupport/MesSupport";
import MesQuicklinkButton from "./components/Home/MesHomeComponents/MesQuiklink/MesQuicklinkButton/MesQuicklinkButton";
import MesModuleButton from "./components/Home/MesHomeComponents/MesModule/MesModuleButton/MesModuleButton";
import HomeMasterData from "./Assets/HomeMasterData.svg";
import HomeMasterDataHovered from "./Assets/HomeMasterDataHovered.svg";
import HomeSecurity from "./Assets/HomeSecurity.svg";
import HomeSecurityHovered from "./Assets/HomeSecurityHovered.svg";
import HomeIM from "./Assets/HomeIM.svg";
import HomeIMHovered from "./Assets/HomeIMHovered.svg";
import HomeIIOT from "./Assets/HomeIIOTM.svg";
import HomeIIOTHovered from "./Assets/HomeIIOTMHovered.svg";
import HomeFM from "./Assets/HomeFM.svg";
import HomeFMHovered from "./Assets/HomeFMHovered.svg";
import HomeDashboardBuilder from "./Assets/HomeDashboardBuilder.svg";
import HomeDashboardBuilderHovered from "./Assets/HomeDashboardHovered.svg";
import HomeARM from "./Assets/HomeARM.svg";
import HomeARMHovered from "./Assets/HomeARMHovered.svg";
import HomeLM from "./Assets/HomeLicenseManager.svg";
import HomeLMHovered from "./Assets/HomeLicenseManagerHovered.svg";
import MesHomeHeader from "./components/Home/MesHomeComponents/MesHomeHeader/MesHomeHeader";
import Dp1 from "./Assets/dp1.jpg";
import MesLayoutProvider from "./components/MesLayouts/MesLayoutProvider/MesLayoutProvider";
import HomeInfoIcon from "./Assets/HomeInfo.svg";
import HomeNotificationIcon from "./Assets/HomeNotification.svg";
import HomeSettingsIcon from "./Assets/HomeSettings.svg";
import {
  MesInfo,
  MesNotification,
  MesSettings,
  MesProfile,
} from "./components";

import MesTitleBar from "./components/MesTitleBar/MesTitleBar";
import DP from "./Assets/dp1.jpg";
import InfoIcon from "./Assets/MesInfo.svg";
import NotificationIcon from "./Assets/MesNotification.svg";
import SettingsIcon from "./Assets/MesSettings.svg";
import MenuHome from "./Assets/MenuHome.svg";
import MenuHomeHovered from "./Assets/MenuHomeHovered.svg";
import MenuMasterData from "./Assets/MenuMasterData.svg";
import MenuMasterDataHovered from "./Assets/MenuMasterDataHovered.svg";
import MenuSecurity from "./Assets/MenuSecurity.svg";
import MenuSecurityHovered from "./Assets/MenuSecurityHovered.svg";
import MenuIM from "./Assets/MenuIG.svg";
import MenuIMHovered from "./Assets/MenuIGHovered.svg";
import MenuIIOT from "./Assets/MenuIIOT.svg";
import MenuIIOTHovered from "./Assets/MenuIIOTHovered.svg";
import MenuFM from "./Assets/MenuFM.svg";
import MenuFMHovered from "./Assets/MenuFMHovered.svg";
import MenuDB from "./Assets/MenuDB.svg";
import MenuDBHovered from "./Assets/MenuDBHovered.svg";
import MenuARM from "./Assets/MenuARM.svg";
import MenuARMHovered from "./Assets/MenuARMHovered.svg";
import MenuLM from "./Assets/MenuLM.svg";
import MenuLMHovered from "./Assets/MenuLMHovered.svg";
import MesInfoL2 from "./Assets/MesInfoL2.svg";
import MesSettingsL2 from "./Assets/MesSettingsL2.svg";
import MesNotificationL2 from "./Assets/MesNotificationL2.svg";
// import { MesInfo, MesNotification, MesProfile, MesSettings } from "../utils";
import MesMenuIconBtn from "./components/Button/MesMenuIconBtn/MesMenuIconBtn";
// import {MesModuleButton} from "./components/Home/MesHomeComponents/MesModules";
import MesMenuListBtn from "./components/Button/MesMenuListBtn/MesMenuListBtn";
import MesMenuModule from "./components/MesMenuModule/MesMenuModule";
import EmployeeIcon from "./Assets/SubMenuEmployees.svg";
import MesIconMenuContainer from "./components/MesIconMenuContainer/MesIconMenuContainer";
import { Grid, Stack } from "@mui/material";
import MesBodyContainer from "./components/MesBodyContainer/MesBodyContainer";
import MesSideBarContainer from "./components/MesSideBarContainer/MesSideBarContainer";
import MesMenuModuleUtils from "./components/MesMenuModuleUtils/MesMenuModuleUtils";
import MesBreadCrumbs from "./components/MesBreadCrumbs/MesBreadCrumbs";
import MesBreadCrumbsText from "./components/MesBreadCrumbsText/MesBreadCrumbsText";

const HomePage = () => {
  return (
    <>
      <MesLayoutProvider>
        <Stack
          width={"100%"}
          height={"100vh"}
          style={{ backgroundColor: "#E5E5E5" }}
        >
          <MesTitleBar version="Mes X.0">
            <Stack
              direction="row"
              style={{ zIndex: 9999 }}
              spacing={"28.85px"}
              justifyContent={"center"}
            >
              <MesInfo icon={<InfoIcon />} />
              <MesNotification icon={<NotificationIcon />} />
              <MesSettings icon={<SettingsIcon />} />
              <MesProfile src={DP} sx={{ marginLeft: "16.24px" }} />
            </Stack>
          </MesTitleBar>
          {/* Sidebar & Body */}
          <MesBodyContainer>
            <MesSideBarContainer>
              {/* Menu Buttons */}
              <MesIconMenuContainer>
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
              </MesIconMenuContainer>
              {/* Menu-Module */}
              <MesMenuModule title="Master Data">
                <Stack flexGrow={1}>
                  <MesMenuListBtn icon={<EmployeeIcon />}>
                    Employees
                  </MesMenuListBtn>
                  <MesMenuListBtn icon={<EmployeeIcon />}>
                    Employees
                  </MesMenuListBtn>
                </Stack>
                <MesMenuModuleUtils>
                  <Stack spacing={"24.85px"} direction={"row"}>
                    <MesInfo icon={<MesInfoL2 />} />
                    <MesNotification icon={<MesNotificationL2 />} />
                    <MesSettings icon={<MesSettingsL2 />} />
                  </Stack>
                  <MesProfile
                    src={DP}
                    size={"24px"}
                    sx={{ marginLeft: "17px" }}
                  />
                </MesMenuModuleUtils>
              </MesMenuModule>
            </MesSideBarContainer>
            {/* Body */}

            <Stack
              flexGrow={1}
              style={{
                // Page margins
                marginTop: "81px",
                marginLeft: "12px",
                marginRight: "12px",
              }}
              sx={{ border: "1px solid red" }}
            >
              <Stack mb={3}>
                <MesBreadCrumbs>
                  <MesBreadCrumbsText id="1">Home</MesBreadCrumbsText>
                  <MesBreadCrumbsText id="1">
                    Integration Manager
                  </MesBreadCrumbsText>
                  <MesBreadCrumbsText id="1">CRON Jobs</MesBreadCrumbsText>
                </MesBreadCrumbs>
              </Stack>
            </Stack>
          </MesBodyContainer>
        </Stack>
      </MesLayoutProvider>
      {/* <Home /> */}
    </>
  );
};

const Home = () => {
  return (
    <MesHome>
      {/* TitleBar Components */}
      <MesHomeHeader
        version="Mes X.0"
        profileSrc={Dp1}
        profileStyle={{
          mt: "10px",
          ml: "16.2px",
        }}
      >
        <MesInfo icon={<HomeInfoIcon />} sx={{ mt: "5.9px" }} />
        <MesNotification icon={<MesNotificationL2 />} sx={{ mt: "5.9px" }} />
        <MesSettings icon={<HomeSettingsIcon />} sx={{ mt: "5.9px" }} />
      </MesHomeHeader>
      {/* Modules Components */}
      {/* Mes Modules */}
      <MesModules>
        <MesModuleButton
          icon={<HomeMasterData />}
          hoverIcon={<HomeMasterDataHovered />}
        >
          Master Data
        </MesModuleButton>
        <MesModuleButton
          icon={<HomeSecurity />}
          hoverIcon={<HomeSecurityHovered />}
        >
          Security
        </MesModuleButton>
        <MesModuleButton icon={<HomeIM />} hoverIcon={<HomeIMHovered />}>
          Integration Manager
        </MesModuleButton>
        <MesModuleButton icon={<HomeIIOT />} hoverIcon={<HomeIIOTHovered />}>
          IIoT Manager
        </MesModuleButton>
        <MesModuleButton icon={<HomeFM />} hoverIcon={<HomeFMHovered />}>
          Flow Manager
        </MesModuleButton>
        <MesModuleButton
          icon={<HomeDashboardBuilder />}
          hoverIcon={<HomeDashboardBuilderHovered />}
        >
          Dashboard Builder
        </MesModuleButton>
        <MesModuleButton icon={<HomeARM />} hoverIcon={<HomeARMHovered />}>
          AR Manager
        </MesModuleButton>
        <MesModuleButton icon={<HomeLM />} hoverIcon={<HomeLMHovered />}>
          License Manager
        </MesModuleButton>
      </MesModules>
      {/* Mes Quick links */}
      <MesQuiklinks>
        <MesQuicklinkButton>API Event Viewer</MesQuicklinkButton>
        <MesQuicklinkButton>CRON Jobs</MesQuicklinkButton>
        <MesQuicklinkButton>User accounts</MesQuicklinkButton>
      </MesQuiklinks>
      {/* Mes Privacy Policy */}
      <MesPrivacyPolicy />
      {/* Mes FAQ */}
      <MesFAQ />
      {/* Mes Support */}
      <MesSupport />
    </MesHome>
  );
};

export default HomePage;
