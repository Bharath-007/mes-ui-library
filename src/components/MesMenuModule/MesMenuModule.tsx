import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";

// Catching Current layout
import MesLayoutContext from "../MesLayouts/MesLayoutContext/MesLayoutContext";
import MesMenuModuleUtils from "../MesMenuModuleUtils/MesMenuModuleUtils";

interface ISubMenuModule {
  title: string;
  children?: ReactNode;
}

const MesMenuModule: FC<ISubMenuModule> = ({ title, children }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);
  return (
    <>
      {currentLayout === "1" && (
        <Grid
          item
          width={"192px"}
          minHeight={"458px"}
          borderRadius={"4px"}
          style={{
            // border: "1px solid green",
            background: "#F2F2F2",
            boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
          }}
        >
          <Stack>
            <Box
              height={"40px"}
              sx={{
                backgroundColor: "#002856",
                borderRadius: "4px",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Segoe UI",
                  fontSize: "14px",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Stack>{children}</Stack>
          </Stack>
        </Grid>
      )}
      {currentLayout === "2" && (
        <Grid
          item
          width={"192px"}
          minHeight={"680px"}
          borderRadius={"4px"}
          style={{
            // border: "1px solid green",
            background: "#F2F2F2",
            boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
          }}
        >
          <Stack>
            <Box
              height={"40px"}
              sx={{
                backgroundColor: "#002856",
                borderRadius: "4px",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Segoe UI",
                  fontSize: "14px",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Stack sx={{ height: "640px" }}>
              {children}
            </Stack>
          </Stack>
        </Grid>
      )}
    </>
  );
};

export default MesMenuModule;
