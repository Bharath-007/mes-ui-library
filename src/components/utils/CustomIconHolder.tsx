import { Box, Icon } from "@mui/material";
import React, { FC } from "react";

type IconHolderProps = {
  children?: JSX.Element | string;
};

const CustomIconHolder: FC<IconHolderProps> = ({ children }) => {
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
      <Box>{children}</Box>
    </Icon>
  );
};

export default CustomIconHolder;
