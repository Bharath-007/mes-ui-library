import { Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IModuleButtonProps {
  icon?: ReactNode;
  children: string;
}
const MesModuleButton: FC<IModuleButtonProps> = ({ icon, children }) => {
  return (
    <Grid item>
      <Stack>
        <IconButton
          style={{
            margin: 0,
            padding: 32,
            width: "100px",
            height: "100px",
            borderRadius: "10px",
            backgroundColor: " #F2F2F2",
            boxShadow: " 0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
            marginBottom: "8px",
          }}
        >
          {icon}
        </IconButton>
        <Typography
          alignItems={"center"}
          style={{
            width: "85px",
            height: "29px",
            color: "#454545",
            textAlign: "center",
            fontWeight: 600,
            letterSpacing: 0.5,
            lineHeight: 1.204,
            fontSize: "15px",
            fontFamily: "Segoe UI",
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 7,
            marginRight: 5,
          }}
          //   sx={{ border: "1px solid red" }}
        >
          {children}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default MesModuleButton;
