import { Box, TextField, styled } from "@mui/material";
import React, { useState } from "react";

const CustomMesTextField = styled(TextField)({
  height: "50px",
  "label.MuiInputLabel-outlined": {
    color: "#F15D22 !important",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#002856",
    },
  },
  ".MuiInputBase-input": {
    padding: 0,
    height: "50px",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "18px",
    fontStyle: "normal",
    color: "#000",
    letterSpacing: "1px",
    fontFamily: "Segoe UI",
    // color: " #A9A9A9",
    opacity: 9,
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

const MesTextField = (props: any) => {
  const [touched, setTouched] = useState(false);

  const handleFocus = () => {
    setTouched(true);
  };

  const handleBlur = () => {
    setTouched(false);
  };

  return (
    <CustomMesTextField
      {...props}
      InputLabelProps={{
        shrink: true,
        style: { visibility: "visible" },
      }}
      inputProps={{
        style: {
          paddingInlineStart: "17px",
          paddingInlineEnd: props.paddingEnd ? props.paddingEnd : "55px",
          fontFamily: "Segoe UI",
          // color: "#A9A9A9",
          letterSpacing: "1px",
          color: "black",
        },
      }}
      label={touched || props.value !== "" ? props.label : ""}
      variant="outlined"
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ width: props.width ? props.width : "455px" }}
      sx={touched || (props.value !== "" && borderLess)}
    ></CustomMesTextField>
  );
};

export default MesTextField;
