import {
  FormControlLabel,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { FC, ReactNode, useContext, useState } from "react";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ToggleIcon from "../../../../Assets/ThemeToggle.svg";
import SettingsIcon from "../../../../Assets/HomeSettings.svg";
import MesLayoutSwitcher from "../../../MesLayoutSwitcher/MesLayoutSwitcher/MesLayoutSwitcher";

// Catching Current layout
import MesLayoutContext from "../../MesLayoutContext/MesLayoutContext";

interface ISettings {
  onClick?: React.MouseEvent<MouseEvent> | any;
  props?: any;
  sx?: any;
  icon: ReactNode;
}

const MesSettings: FC<ISettings> = ({ props, sx, icon }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);

  const [openLayout, setLayoutOpen] = useState(false);

  const handleClose = () => {
    setLayoutOpen(false);
  };
  const handleClick = () => {
    setLayoutOpen((prev) => !prev);
  };

  return (
    <>
      <PopupState variant="popover">
        {(popupState) => (
          <>
            <IconButton
              disableRipple
              {...bindTrigger(popupState)}
              style={{ padding: 0 }}
              sx={sx}
            >
              {icon ?? <SettingsIcon />}
            </IconButton>
            <Menu
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    width: "143px",
                    height: 66,
                    overflow: "visible",
                    borderRadius: "10px",
                    filter:
                      "drop-shadow(0px 0px 20px rgba(117, 117, 117, 0.25))",
                    ml: currentLayout === "2" ? 1 : 4.9,
                    mt: currentLayout === "2" ?2:1.2,
                    px: 1.2,
                    marginBottom: "10px",
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top:0,
                      right: currentLayout === "2" ?60:25,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Stack direction={"row"} spacing={2.75}>
                <Typography
                  fontSize={"12px"}
                  color="#000"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Segoe UI",
                    p: 0,
                    mt: "5px",
                    pl: 1,
                    cursor: "pointer",
                  }}
                >
                  Dark Mode
                </Typography>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      icon={<ToggleIcon />}
                      checkedIcon={<ToggleIcon />}
                    />
                  }
                  {...props}
                />
              </Stack>
              <MenuItem
                onClick={handleClick}
                sx={{ p: 0, mt: 1, pl: 1, borderRadius: "3px" }}
                disableRipple
              >
                <Typography
                  fontSize={"12px"}
                  color="#000"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Segoe UI",
                  }}
                >
                  Layout Options
                </Typography>
              </MenuItem>
              <MesLayoutSwitcher open={openLayout} handleClose={handleClose} />
            </Menu>
          </>
        )}
      </PopupState>
    </>
  );
};

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 48,
  height: 14,
  padding: 0,
  paddingBottom: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 0,
    marginLeft: 1.4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#EFEFEF",
        opacity: 1,
        border: 1,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
      "&:before": {
        content: '"OFF"',
        transform: "translateX(-26%)",
        fontSize: 7,
        color: "#B0B0B0",
        marginLeft: -14,
      },
      "&:after": {
        content: '"ON"',
        transform: "translateX(-38%)",
        fontSize: 7,
        color: "#ffffff",
        marginLeft: -14,
      },
    },
    "&:before": {
      content: '"OFF"',
      transform: "translateX(145%)",
      fontSize: 7,
      color: "#ffffff",
      marginLeft: -14,
    },
    "&:after": {
      content: '"ON"',
      transform: "translateX(35%)",
      fontSize: 7,
      color: "#B0B0B0",
      margin: 0,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 8,
    // border: "1px solid red",
    boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.30) inset",
    backgroundColor: "#ffffff",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 1000,
    }),
  },
}));

export default MesSettings;
