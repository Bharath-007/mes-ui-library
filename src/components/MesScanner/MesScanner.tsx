import { TextField, styled, Box, Stack, IconButton } from "@mui/material";
import React, { FC, memo, useState } from "react";
import ScannerIcon from "../../Assets/SkidScan.svg";
import ClearIcon from "../../Assets/SkidClear.svg";

const CustomMesTextField = styled(TextField)({
  width: "400px",
  height: "50px !important",
  "label.MuiInputLabel-outlined": {
    color: "#F15D22 !important",
  },
  ".MuiInputBase-input": {
    padding: 0,
    height: "50px",
    fontFamily: "Segoe UI",
    fontSize: "20px",
    // fontWeight: 400,
    lineHeight: "18px",
    textTransform: "capitalize",
    color: "#000",
    letterSpacing: "1px",
  },
  input: {
    backgroundColor: "white",
  },
});

const borderLess = {
  ".Mui-focused": {
    ".MuiOutlinedInput-notchedOutline": {
      borderRight: 0,
      borderLeft: 0,
      borderTop: 0,
      borderRadius: 0,
      borderColor: "#D6D6D6",
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
    borderRadius: 0,
    borderColor: "#D6D6D6",
  },
};

const SideIconButton = styled(IconButton)(({ theme }) => ({
  padding: `${0}`,
  width: 50,
  height: 50,
  bgcolor: "#D6D6D6",
  borderRadius: "5px",
}));

const MesScanner: FC<any> = (props) => {
  const [touched, setTouched] = useState(false);

  const handleFocus = () => {
    setTouched(true);
  };

  const handleBlur = () => {
    setTouched(false);
  };
  return (
    <Stack direction={"row"} gap={"5px"}>
      <CustomMesTextField
        {...props}
        InputLabelProps={{
          shrink: true,
          style: { visibility: "visible" },
        }}
        inputProps={{
          style: {
            paddingInlineStart: "17px",
            paddingInlineEnd: "0",
            fontFamily: "Segoe UI",
            // color: "#A9A9A9",
            color: "#000",
          },
        }}
        sx={touched || (props.value !== "" && borderLess)}
        label={touched || props.value !== "" ? props.label : ""}
        variant="outlined"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></CustomMesTextField>
      <SideIconButton onClick={props.onClick}>
        {!props.value ? <ScannerIcon /> : <ClearIcon />}
      </SideIconButton>
    </Stack>
  );
};

export default MesScanner;
