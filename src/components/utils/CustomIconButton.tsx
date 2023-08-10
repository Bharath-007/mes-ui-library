import React from "react";
import { IconButton } from "@mui/material";

const CustomIconButton = (props: any) => {
  return (
    <IconButton
      sx={{
        width: 64,
        height: 64,
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
      }}
      p={3}
      {...props}
    >
      {props.children ? props.children : props.icon}
    </IconButton>
  );
};

export default CustomIconButton;
