import React, { FC } from "react";
import CustomIconButton from "../../utils/CustomIconButton";
import MenuButton from "../MenuButton";
import { Typography, Stack } from "@mui/material";

interface IProps {
  onClick?: () => void;
  children?: string;
}

const MesSideBarHeader: FC<IProps> = ({ onClick, children }) => {
  return (
    <Stack direction={"row"} justifyContent={"start"} alignItems="center">
      <div>
        <CustomIconButton onClick={onClick}>
          <MenuButton />
        </CustomIconButton>
      </div>
      <Typography
        color="#F15D22"
        noWrap
        sx={{
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Segoe UI",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "18px",
          letterSpacing: "0.16px",
          textTransform: "capitalize",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default MesSideBarHeader;
