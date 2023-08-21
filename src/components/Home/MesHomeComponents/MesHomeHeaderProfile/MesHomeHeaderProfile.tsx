import { Avatar } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IMesProfile {
  src?: ReactNode | any;
  borderColor?: string;
  style?: Object;
}
const MesHomeHeaderProfile: FC<IMesProfile> = ({ src, borderColor }) => {
  return (
    <Avatar
      variant="circular"
      src={src}
      alt={"#"}
      sx={{
        width: "29px",
        height: "29px",
        border: `1px solid ${borderColor ?? "#002856"}`,
        mt: "10px",
        ml: "16.2px",
      }}
    />
  );
};

export default MesHomeHeaderProfile;
