import { FormControl, FormLabel, styled } from "@mui/material";
import React, { FC, memo } from "react";

const MesFormLabel = styled(FormLabel)(({ theme }) => ({
  "&.MuiFormLabel-root": {
    color: "#F15D22",
    display: "flex",
    width: "172.9px",
    padding: "0px 5px",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    textAlign: "left",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "1px",
    textTransform: "capitalize",
  },
}));

const MesRadioLabel: FC<any> = (props) => {
  return (
    <FormControl>
      <MesFormLabel>{props.label}</MesFormLabel>
      {props.children}
    </FormControl>
  );
};

export default memo(MesRadioLabel);
