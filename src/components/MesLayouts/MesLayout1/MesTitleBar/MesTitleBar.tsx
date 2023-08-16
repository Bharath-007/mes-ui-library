import React, { FC, ReactNode } from "react";
import { AppBar, Stack, Typography, styled } from "@mui/material";
import CantierLogo from "../../../../Assets/Cantier.svg";

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

const MesTitleBar: FC<IMesTitleBar> = ({ children, version }) => {
  return (
    <CustomAppBar>
      <Stack direction={"row"} sx={{ pt: "12px", pl: "8px", pd: "12px" }}>
        <CantierIconVersion version={version ?? "MES X.0"} />
        {children}
      </Stack>
    </CustomAppBar>
  );
};

export default MesTitleBar;
