import React, { FC, memo } from "react";
import {
  FormControlLabel,
  Stack,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import ToggleIcon from "../../../Assets/Toggle.svg";

const CustomRadioLabels = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "#000",
  textAlign: "right",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "1px",
  textTransform: "capitalize",
}));

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100,
  height: 35,
  padding: 0,
  paddingBottom: 1,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(30px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#EFEFEF",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 38 / 2,
    // border: "1px solid red",
    boxShadow: "inset 0 0 3px rgba(0, 0, 0, 0.35)",
    backgroundColor: "#EFEFEF",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 1000,
    }),
  },
}));

const MesRadioController: FC<any> = (props) => {
  return (
    <Stack direction="row" sx={{ mt: "7px" }} height="34px">
      <CustomRadioLabels color="initial" pr={1.2} mr={1}>
        {props.labelleft}
      </CustomRadioLabels>
      <FormControlLabel
        control={
          <IOSSwitch icon={<ToggleIcon />} checkedIcon={<ToggleIcon />} />
        }
        {...props}
      />
      <CustomRadioLabels color="initial">{props.labelright}</CustomRadioLabels>
    </Stack>
  );
};

export default memo(MesRadioController);
