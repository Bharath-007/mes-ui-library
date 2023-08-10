import { Icon, Stack, Typography, Button } from "@mui/material";
import PrivacyPolicyIcon from "../../../../Assets/PrivacyPolicy.svg";
import React from "react";

const MesPrivacyPolicy = () => {
  return (
    <Stack spacing={"26px"}>
      <Typography
        style={{
          width: "357px",
          height: "17px",
          color: "#454545",
          fontFamily: "Segoe UI",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}
      >
        Privacy Policy
      </Typography>
      <Stack
        style={{ width: "580px", height: "80px" }}
        sx={{
          pl: "13px",
          pr: "6px",
          borderRadius: "10px",
          background: "#F2F2F2",
          boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"8px"}
      >
        <Icon sx={{ width: "25px", height: "25px" }}>
          <PrivacyPolicyIcon />
        </Icon>
        <Stack direction={"row"}>
          <Typography
            style={{
              width: "421px",
              color: "#454545",
              fontFamily: "Segoe UI",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginLeft: "8px",
              paddingRight: 5,
            }}
            flexGrow={1}
          >
            Please read our privacy policy as it sets out important information
            about how we handle your information!
          </Typography>
          <Button
            variant="contained"
            style={{
              width: "102px",
              height: "37px",
              textTransform: "capitalize",
            }}
            sx={{
              p: 0,
              ml: 1,
              color: "#F2F2F2",
              backgroundColor: "#454545",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "Segeo UI",
              "&:hover": {
                backgroundColor: "#454545",
              },
              borderRadius: "6px",
            }}
          >
            Read
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MesPrivacyPolicy;
