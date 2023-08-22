import { Stack, IconButton, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IProps {
  label?: string;
  size?: string;
  icon: any;
  sx?:Object;
  style?:Object
  bgColor?:string
}

const MesIconButtonHolder: FC<IProps> = ({ size, label, icon,sx,style,bgColor }) => {
  return (
    <Stack
      spacing={"8px"}
      width={`${size ? size : 40}px`}
      {...sx}
      {...style}
    >
      <IconButton
        style={{
          width: `${size ?? "40px"}`,
          height: `${size ?? "40px"}`,
          borderRadius: `${size}`,
          boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
        }}
        disableRipple
        sx={{
          backgroundColor: bgColor?bgColor:"#F2F2F2",
          "&:hover": {
            backgroundColor: "#F15D22",
          },
        }}
      >
        {icon}
      </IconButton>
      <Typography
        style={{
          color: "#454545",
          textAlign: "center",
          fontFamily: "Segoe UI",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          alignItems: "left",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default MesIconButtonHolder;
