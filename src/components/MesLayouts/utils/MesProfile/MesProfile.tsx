import { Avatar } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IMesProfile {
  src: ReactNode | any;
  borderColor?: string;
  sx: any;
  size?: string;
}
const MesProfile: FC<IMesProfile> = ({ src, borderColor, sx, size }) => {
  return (
    <Avatar
      variant="circular"
      src={src}
      alt={"#"}
      style={{
        width: size ? size : "29px",
        height: size ? size : "29px",
        border: `1px solid ${borderColor ?? "#002856"}`,
      }}
      sx={sx}
    />
  );
};

export default MesProfile;
