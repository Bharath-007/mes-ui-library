import { Icon, IconButton, Stack, Typography } from "@mui/material";
import SupportMessageIcon from "../../../../Assets/SupportMessage.svg";
import SupportIcon from "../../../../Assets/Support.svg";
import SupportCallIcon from "../../../../Assets/SupportCall.svg";

const MesSupport = () => {
  return (
    <Stack
      style={{ width: "580px", height: "52px" }}
      sx={{
        pl: "13px",
        pr: "6px",
        borderRadius: "10px",
        background: "#F2F2F2",
        boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
        // border: "1px solid red",
      }}
      direction={"row"}
      alignItems={"center"}
      spacing={"8px"}
    >
      <Icon sx={{ width: "25px", height: "25px" }}>
        <SupportIcon />
      </Icon>
      <Typography
        style={{
          width: "421px",
          color: "#454545",
          fontFamily: "Segoe UI",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          marginLeft: "8px",
        }}
        flexGrow={1}
      >
        Support
      </Typography>
      <IconButton sx={{ width: "35px", height: "35px", m: 0, p: 0 }}>
        <SupportMessageIcon />
      </IconButton>
      <IconButton sx={{ width: "35px", height: "35px", m: 0, p: 0 }}>
        <SupportCallIcon />
      </IconButton>
    </Stack>
  );
};

export default MesSupport;
