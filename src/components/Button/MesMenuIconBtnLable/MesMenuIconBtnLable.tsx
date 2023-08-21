import { Stack } from "@mui/system";
import React, { FC, ReactElement, ReactNode } from "react";
import MesMenuIconBtn from "../MesMenuIconBtn/MesMenuIconBtn";
import Typography from "@mui/material/Typography";

const MesMenuIconBtnLable: FC<{ children: string }> = ({ children }) => {
  return (
    <Typography
      style={{
        color: "#454545",
        textAlign: "center",
        fontFamily: "Segoe UI",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
      }}
    >
      {children}
    </Typography>
  );
};

export default MesMenuIconBtnLable;
