import { Box, Icon, IconButton, Stack, Typography } from "@mui/material";
import FaqAdd from "../../../../Assets/FaqAdd.svg";
import Faq from "../../../../Assets/FAQ.svg";


const MesFAQ = () => {
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
    >
      <Icon sx={{ width: "25px", height: "25px" }}>
        <Faq />
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
        FAQ
      </Typography>
      <IconButton sx={{ width: "35px", height: "35px", m: 0, p: 0 }}>
        <FaqAdd />
      </IconButton>
    </Stack>
  );
};

export default MesFAQ;
