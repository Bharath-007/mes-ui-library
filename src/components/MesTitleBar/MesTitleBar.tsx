import React, { FC, ReactNode, useContext, useEffect } from "react";
import { AppBar, Stack, Typography, styled } from "@mui/material";
import CantierLogo from "../../Assets/Cantier.svg";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#002856",
  boxShadow: "none",
  paddingRight: "22px",
  height: "50px",
}));

const CantierIconVersion = (props: any) => {
  return (
    <Stack
      sx={{
        // border: "1px solid red",
        height: "26px",
      }}
      direction={"row"}
      alignItems={"center"}
      flexGrow={1}
      style={props.style}
    >
      <CantierLogo />
      <Typography
        style={{
          width: "82px",
          height: "20px",
          padding: 0,
          margin: 0,

          fontFamily: "Inter !important",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
        sx={{
          fontSize: 20,
        }}
        color="#F15D22"
      >
        {props.version}
      </Typography>
    </Stack>
  );
};

interface IMesTitleBar {
  children?: ReactNode | ReactNode[];
  version?: string;
}

// Catching Current layout
import MesLayoutContext from "../MesLayouts/MesLayoutContext/MesLayoutContext";
import MesMenuModuleUtils from "../MesMenuModuleUtils/MesMenuModuleUtils";

const MesTitleBar: FC<IMesTitleBar> = ({ children, version }) => {
  //using global state(currentLayout) globally using useContext
  const {currentLayout,setCurrentLayout}=useContext(MesLayoutContext);


  return (
    <>
      {currentLayout === '1' && <CustomAppBar>
      <Stack direction={"row"} sx={{ pt: "12px", pl: "8px", pd: "12px" }}>
        <CantierIconVersion version={version ?? "MES X.0"} />
        {children}
      </Stack>
    </CustomAppBar>}
    {currentLayout === '2' && <CustomAppBar>
      <CantierIconVersion version={version ?? "MES X.0"} style={{position:"fixed",top:12,right:15}}/>
    </CustomAppBar>}
    </>
  );
};

export default MesTitleBar;
