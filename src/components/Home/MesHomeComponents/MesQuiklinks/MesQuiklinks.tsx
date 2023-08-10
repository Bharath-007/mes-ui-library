import { Typography, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC, ReactNode } from "react";

interface IQuickLinks {
  children: ReactNode | ReactNode[] | JSX.Element;
}

const MesQuiklinks: FC<IQuickLinks> = ({ children }) => {
  return (
    <Stack spacing={3.4}>
      <Typography
        style={{
          width: "357px",
          height: "17px",
          color: "#454545",
          fontFamily: "Segoe UI",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}
      >
        Quick Links
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        {children}
      </Grid>
    </Stack>
  );
};

export default MesQuiklinks;
