import { Grid, Stack } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
}

const MesIconMenuContainer: FC<IProps> = ({ children }) => {
  return (
    <Grid
      item
      width={"64px"}
      style={{
        // border: "1px solid blue",
        padding: "0px 12px",
      }}
      direction={"column"}
    >
      <Stack spacing={"12px"}>{children}</Stack>
    </Grid>
  );
};

export default MesIconMenuContainer;
