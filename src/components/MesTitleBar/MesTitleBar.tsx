<<<<<<< HEAD
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Stack,
  AppBar,
  Box,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CantierLogo from "../../Assets/Cantier.svg";
import MenuIcon from "../../Assets/Menu.svg";

const CustomAppbar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#002856",
  minHeight: "64px",
  maxHeight: "64px",
  boxShadow: "none",
}));

const CantierIcon = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"start"}
      flexGrow={1}
      minWidth={"md"}
      sx={{ mt: "14px", mb: "15px" }}
    >
      <Link href="/" sx={{ height: "30px", width: "106.25px", ml: "10px" }}>
        <CantierLogo />
      </Link>
    </Box>
  );
};

const Menu = (props: any) => {
  return (
    <IconButton
      sx={{
        width: 64,
        height: 64,
        borderRadius: 0,
        backgroundColor: "#F15D22",
      }}
      onClick={props.OnClick}
    >
      <MenuIcon />
    </IconButton>
  );
};

const Version = (props: any) => {
  return (
    <Typography
      noWrap
      sx={{
        color: "white",
        textAlign: "right",
        fontFamily: "Segoe UI",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        pr: 3,
        textTransform: "capitalize",
      }}
    >
      {props.children}
    </Typography>
  );
};

const BrandName = (props: any) => {
  console.log(props);
  return (
    <Typography
      noWrap
      sx={{
        color: "white",
        textAlign: "right",
        fontFamily: "Segoe UI",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        pl: 3,
        textTransform: "uppercase",
      }}
      borderLeft={2}
      borderColor={"#F15D22"}
    >
      {props.children}
    </Typography>
  );
};

type Props = {
  version: string;
  brand: string;
};

const MesTitleBar: FC<Props> = ({ version, brand }) => {
  return (
    <Stack>
      <CustomAppbar>
        <Stack direction={"row"} alignItems={"center"}>
          <Menu />
          <CantierIcon />
          <Box
            justifyContent={"end"}
            alignItems={"center"}
            mr={"17px"}
            my={"15px"}
            sx={{
              width: "468px",
              height: "34px",
              display: {
                xs: "none",
                md: "flex",
              },
              // border: "1px orange solid",
            }}
          >
            <Version>{version}</Version>
            <BrandName>{brand}</BrandName>
          </Box>
        </Stack>
      </CustomAppbar>
    </Stack>
  );
};

export default MesTitleBar;
=======
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
>>>>>>> MesLayout1
