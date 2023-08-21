import React, { FC } from "react";
import Typography from "@mui/material/Typography";

const MesBreadCrumbsText: FC<{ children: string; id : string }> = ({
  children,
  id,
}) => {

  return (
    <Typography
      key={id}
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

export default MesBreadCrumbsText;
