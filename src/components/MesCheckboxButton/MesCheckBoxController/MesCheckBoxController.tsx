import { Checkbox, FormControlLabel, styled } from "@mui/material";
import CheckedIcon from "../../../Assets/checked.svg";
// import CheckediIon from "../../../Assets/checked.svg";
import UnCheckedIcon from "../../../Assets/unChecked.svg";
import { FC, memo } from "react";

const MesFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&.MuiFormControlLabel-root": {
    marginTop: "7px",
    marginLeft: "5px",
  },
  "& .MuiTypography-root": {
    width: "163px",
    height: "34px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "1px",
  },

  "& .MuiButtonBase-root": {
    padding: 0,
    marginRight: "13.5px",
  },
  "& .PrivateSwitchBase-input": {
    width: "25px",
    height: "25px",
  },
}));

const MesController: FC<any> = (props) => {
  return (
    <MesFormControlLabel
      {...props}
      control={
        <Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
      }
    />
  );
};

export default memo(MesController);
