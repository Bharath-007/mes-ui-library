import { Box, Icon } from "@mui/material";
import React from "react";

type IconHolderProps = {
  children: JSX.Element;
};

const CustomIconHolder = (props: IconHolderProps) => {
  return (
    <Icon
      sx={{
        height: 48,
        width: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>{props.children}</Box>
    </Icon>
  );
};

export default CustomIconHolder;
