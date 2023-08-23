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
  MesIconButtonHolder,
} from "./components";
import MesDefaultLayout from "./components/MesLayouts/MesDefaultLayout/MesDefaultLayout";

const Home = () => {
  return (
    // <MesDefaultLayout>
    //   <MesHome>
    //     {/* TitleBar Components */}
    //     <MesHomeHeader
    //       version="Mes X.0"
    //       profileSrc={Dp1}
    //       profileStyle={{
    //         mt: "10px",
    //         ml: "16.2px",
    //       }}
    //     >
    //       <MesInfo icon={<HomeInfoIcon />} sx={{ mt: "5.9px" }} />
    //       {/* <MesNotification icon={<MesNotification />} sx={{ mt: "5.9px" }} /> */}
    //       <MesSettings icon={<HomeSettingsIcon />} sx={{ mt: "5.9px" }} />
    //     </MesHomeHeader>
    //     {/* Modules Components */}
    //     {/* Mes Modules */}
    //     <MesModules>
    //       <MesModuleButton
    //         icon={<HomeMasterData />}
    //         hoverIcon={<HomeMasterDataHovered />}
    //       >
    //         Master Data
    //       </MesModuleButton>
    //       <MesModuleButton
    //         icon={<HomeSecurity />}
    //         hoverIcon={<HomeSecurityHovered />}
    //       >
    //         Security
    //       </MesModuleButton>
    //       <MesModuleButton icon={<HomeIM />} hoverIcon={<HomeIMHovered />}>
    //         Integration Manager
    //       </MesModuleButton>
    //       <MesModuleButton icon={<HomeIIOT />} hoverIcon={<HomeIIOTHovered />}>
    //         IIoT Manager
    //       </MesModuleButton>
    //       <MesModuleButton icon={<HomeFM />} hoverIcon={<HomeFMHovered />}>
    //         Flow Manager
    //       </MesModuleButton>
    //       <MesModuleButton
    //         icon={<HomeDashboardBuilder />}
    //         hoverIcon={<HomeDashboardBuilderHovered />}
    //       >
    //         Dashboard Builder
    //       </MesModuleButton>
    //       <MesModuleButton icon={<HomeARM />} hoverIcon={<HomeARMHovered />}>
    //         AR Manager
    //       </MesModuleButton>
    //       <MesModuleButton icon={<HomeLM />} hoverIcon={<HomeLMHovered />}>
    //         License Manager
    //       </MesModuleButton>
    //     </MesModules>
    //     {/* Mes Quick links */}
    //     <MesQuiklinks>
    //       <MesQuicklinkButton>API Event Viewer</MesQuicklinkButton>
    //       <MesQuicklinkButton>CRON Jobs</MesQuicklinkButton>
    //       <MesQuicklinkButton>User accounts</MesQuicklinkButton>
    //     </MesQuiklinks>
    //     {/* Mes Privacy Policy */}
    //     <MesPrivacyPolicy />
    //     {/* Mes FAQ */}
    //     <MesFAQ />
    //     {/* Mes Support */}
    //     <MesSupport />
    //   </MesHome>
    // </MesDefaultLayout>
    <>Home</>
  );
};

export default Home;
