import React, { FC, memo } from "react";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";

interface IProps {
  id?: string | number;
  label?: string;
  active?: number | string | boolean;
  onClick?: any;
}

const MesListItem: FC<IProps> = ({ id, label, active, onClick }) => {
  return (
    <List component="div" disablePadding>
      <ListItemButton
        // component={Link}
        // to={`/${}`}
        sx={{
          p: 0,
          height: "36px",
          "&:hover": {
            backgroundColor: "#F15D22",
          },
          borderLeft: active === id ? 8 : 0,
          borderColor: "#002856",
        }}
        style={{ borderBottom: "1px solid white" }}
        onClick={onClick}
      >
        <ListItemText
          disableTypography
          primary={
            <Typography
              fontSize={"14px"}
              sx={{
                ml: active === id ? "56px" : "64px",
                fontWeight: 300,
                fontFamily: "Segoe UI",
                lineHeight: "18px",
                letterSpacing: "0.16px",
                textTransform: "capitalize",
                "&:hover": {
                  color: active ? "#fff" : "#000",
                },
              }}
            >
              {label}
            </Typography>
          }
        />
      </ListItemButton>
    </List>
  );
};

export default memo(MesListItem);
