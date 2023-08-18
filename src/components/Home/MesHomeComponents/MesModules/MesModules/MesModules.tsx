import { Stack } from "@mui/system";
import React, { FC, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface IModuleProps {
  children: ReactNode | ReactNode[];
}
const MesModules: FC<IModuleProps> = ({ children }) => {
  return (
    <Stack spacing={3.9}>
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
        Modules
      </Typography>
      {/* <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
        minHeight={"294px"}
        sx={{ display: "flex", flexDirection: "row", gap: "25px" }}
      ></Grid> */}
      <Grid container gap={"20px"} width={"580px"}>
        {children}
      </Grid>
    </Stack>
  );
};

export default MesModules;
