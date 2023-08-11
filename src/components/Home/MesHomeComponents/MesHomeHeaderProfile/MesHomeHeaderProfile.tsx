import { Avatar } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IMesProfile {
  src?: ReactNode | any;
}
const MesHomeHeaderProfile: FC<IMesProfile> = ({ src }) => {
  return (
    <Avatar
      variant="circular"
      src={src}
      alt={"#"}
      sx={{
        width: "30px",
        height: "30px",
        border: "0px solid #002856",
        mt: "10px",
        ml: "16.2px",
      }}
    />
  );
};

export default MesHomeHeaderProfile;
