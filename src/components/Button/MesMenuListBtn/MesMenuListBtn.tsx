import {
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IProps {
  icon?: ReactNode;
  hoverIcon?: ReactNode;
  selectedIcon?: ReactNode;
  children?: string;
  onClick?: React.MouseEvent<MouseEvent> | any ;
}

const MesMenuListBtn: FC<IProps> = ({ children, onClick, icon }) => {
  return (
    <>
      <ListItemButton
        sx={{
          margin: 0,
          borderRadius: 0,
          maxHeight: "39px",
          padding: 0,
          "&:hover": {
            background: "#F15D22",
          },
        }}
        onClick={onClick}
        // sx={{ border: "1px solid red" }}
      >
        <ListItemIcon
          sx={{
            "&.MuiListItemIcon-root": {
              // border: "1px solid green",
              marginLeft: "12px",
              marginRight: "4px",
              minWidth: "24px",
              maxWidth: "24px",
              height: "14px",
              my: "5px",
              justifyContent: "center",
            },
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            ".MuiTypography-root": {
              // border: "1px solid blue",
              marginRight: "2px",
              minHeight: "24px",
              fontFamily: "Segoe UI ",
              fontSize: "12px",
              fontWeight: 600,
              width: "134px",
              color: "#002856",
              lineHeight: 2,
              "&:hover": {
                color: "#fff",
              },
              "&:focus": {
                color: "#002856",
              },
            },
          }}
        >
          {children}
        </ListItemText>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default MesMenuListBtn;
