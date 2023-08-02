import React, { FC } from "react";
import CustomIconButton from "../../utils/CustomIconButton";
import MenuButton from "../MenuButton";
import { Typography, Stack } from "@mui/material";

interface IProps {
  handleDrawer: () => void;
  children: string;
}

const MesSideBarHeader: FC<IProps> = ({ handleDrawer, children }) => {
  return (
    <Stack direction={"row"} justifyContent={"start"} alignItems="center">
      <div>
        <CustomIconButton onClick={handleDrawer}>
          <MenuButton />
        </CustomIconButton>
      </div>
      <Typography
        color="orange.main"
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
