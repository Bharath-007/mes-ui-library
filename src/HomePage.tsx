import React from "react";
import MesHome from "./components/Home/MesHome/MesHome";
import MesModules from "./components/Home/MesHomeComponents/MesModule/MesModules";
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
import MesHomeHeaderProfile from "./components/Home/MesHomeComponents/MesHomeHeaderProfile/MesHomeHeaderProfile";
import MesHomeHeaderSettings from "./components/Home/MesHomeComponents/MesHomeHeaderSettings/MesHomeHeaderSettings";
import MesHomeHeaderNotifications from "./components/Home/MesHomeComponents/MesHomeHeaderNotifications/MesHomeHeaderNotifications";
import MesHomeHeaderInfo from "./components/Home/MesHomeComponents/MesHomeHeaderInfo/MesHomeHeaderInfo";
import BruceProf from "./Assets/BruceProfile.png";

const HomePage = () => {
  return (
    <MesHome>
      {/* TitleBar Components */}
      <MesHomeHeader version="Mes X.0">
        <MesHomeHeaderInfo />
        <MesHomeHeaderNotifications />
        <MesHomeHeaderSettings />
        <MesHomeHeaderProfile src={BruceProf} />
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
