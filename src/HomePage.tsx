import React from "react";
import MesHome from "./components/Home/MesHome/MesHome";
import MesModules from "./components/Home/MesHomeComponents/MesModules/MesModules";
import MesQuiklinks from "./components/Home/MesHomeComponents/MesQuiklinks/MesQuiklinks";
import MesPrivacyPolicy from "./components/Home/MesHomeComponents/MesPrivacyPolicy/MesPrivacyPolicy";
import MesFAQ from "./components/Home/MesHomeComponents/MesFAQ/MesFAQ";
import MesSupport from "./components/Home/MesHomeComponents/MesSupport/MesSupport";
import MesQuicklinkButton from "./components/Home/MesHomeComponents/MesQuiklinks/MesQuicklinkButton/MesQuicklinkButton";
import MesModuleButton from "./components/Home/MesHomeComponents/MesModules/MesModuleButton/MesModuleButton";

import HomeMasterData from "./Assets/HomeMasterData.svg";
import HomeSecurity from "./Assets/HomeSecurity.svg";
import HomeIM from "./Assets/HomeIM.svg";
import HomeIIOT from "./Assets/HomeIIOTM.svg";
import HomeFM from "./Assets/HomeFM.svg";
import HomeDashboardBuilder from "./Assets/HomeDashboardBuilder.svg";
import HomeARM from "./Assets/HomeARM.svg";
import HomeLM from "./Assets/HomeLicenseManager.svg";
import MesHomeHeader from "./components/Home/MesHomeComponents/MesHomeHeader/MesHomeHeader";
import MesHomeHeaderProfile from "./components/Home/MesHomeComponents/MesHomeHeaderProfile/MesHomeHeaderProfile";
import MesHomeHeaderSettings from "./components/Home/MesHomeComponents/MesHomeHeaderSettings/MesHomeHeaderSettings";
import MesHomeHeaderNotifications from "./components/Home/MesHomeComponents/MesHomeHeaderNotifications/MesHomeHeaderNotifications";
import MesHomeHeaderInfo from "./components/Home/MesHomeComponents/MesHomeHeaderInfo/MesHomeHeaderInfo";

const HomePage = () => {
  return (
    <MesHome>
      {/* TitleBar Components */}
      <MesHomeHeader version="Mes X.0">
        <MesHomeHeaderInfo />
        <MesHomeHeaderNotifications />
        <MesHomeHeaderSettings />
        <MesHomeHeaderProfile />
      </MesHomeHeader>
      {/* Modules Components */}
      <MesModules>
        <MesModuleButton icon={<HomeMasterData />}>Master Data</MesModuleButton>
        <MesModuleButton icon={<HomeSecurity />}>Security</MesModuleButton>
        <MesModuleButton icon={<HomeIM />}>Integration Manager</MesModuleButton>
        <MesModuleButton icon={<HomeIIOT />}>IIoT Manager</MesModuleButton>
        <MesModuleButton icon={<HomeFM />}>Flow Manager</MesModuleButton>
        <MesModuleButton icon={<HomeDashboardBuilder />}>
          Dashboard Builder
        </MesModuleButton>
        <MesModuleButton icon={<HomeARM />}>AR Manager</MesModuleButton>
        <MesModuleButton icon={<HomeLM />}>License Manager</MesModuleButton>
      </MesModules>
      <MesQuiklinks>
        <MesQuicklinkButton>API Event Viewer</MesQuicklinkButton>
        <MesQuicklinkButton>CRON Jobs</MesQuicklinkButton>
        <MesQuicklinkButton>User accounts</MesQuicklinkButton>
      </MesQuiklinks>
      <MesPrivacyPolicy />
      <MesFAQ />
      <MesSupport />
    </MesHome>
  );
};

export default HomePage;
