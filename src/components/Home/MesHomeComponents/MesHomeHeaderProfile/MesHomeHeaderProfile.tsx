import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface IMesProfile {
  src?: string;
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
        border: "1px solid #002856",
        mt: "10px",
        ml: "16.2px",
      }}
    />
  );
};

export default MesHomeHeaderProfile;
