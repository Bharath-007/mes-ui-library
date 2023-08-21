import React, { FC, ReactNode } from "react";
import { AppBar, Stack, Typography, styled } from "@mui/material";
import CantierLogo from "../../../../Assets/CantierHomeLogo.svg";
import { MesProfile } from "../../../MesLayouts";

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#0000",
  boxShadow: "none",
  paddingRight: "22px",
}));

const CantierIconVersion = (props: any) => {
  return (
    <Stack
      sx={{
        pt: "12px",
        pl: "15px",
        //    border: "1px solid red"
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

interface IMesHomeHeader {
  children?: ReactNode | ReactNode[];
  version: string;
  profileSrc?: string;
  profileStyle?: any;
}

const MesHomeHeader: FC<IMesHomeHeader> = ({
  children,
  version,
  profileSrc,
  profileStyle,
}) => {
  return (
    <TransparentAppBar>
      {/* <Info />
      <Notifications />
      <Settings />
      <Profile /> */}
      <Stack direction={"row"}>
        <CantierIconVersion version={version ?? "MES X.0"} />
        <Stack direction={"row"} sx={{ mt: "10px" }} spacing={"28.39px"}>
          {children}
        </Stack>
        <MesProfile src={profileSrc} sx={profileStyle} />
      </Stack>
    </TransparentAppBar>
  );
};

export default MesHomeHeader;
