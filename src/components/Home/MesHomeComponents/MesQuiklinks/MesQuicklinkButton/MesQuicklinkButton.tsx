import { Button, Grid } from "@mui/material";
import React, { FC } from "react";

interface IProps {
  children: string;
  to?: string;
}

const MesQuicklinkButton: FC<IProps> = ({ children, to }) => {
  return (
    <Grid item>
      <Button
        style={{
          textTransform: "none",
          color: "#454545",
          borderRadius: "6px",
          background: " #F2F2F2",
          boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
          textAlign: "center",
          fontFamily: "Segoe UI",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          marginRight: 12,
        }}
      >
        {children}
      </Button>
    </Grid>
  );
};

export default MesQuicklinkButton;
