import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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

const MesTitleBar = (props: Props) => {
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
            <Version>{props.version}</Version>
            <BrandName>{props.brand}</BrandName>
          </Box>
        </Stack>
      </CustomAppbar>
    </Stack>
  );
};

export default MesTitleBar;
