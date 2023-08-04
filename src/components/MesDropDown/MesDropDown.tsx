import React, { memo, useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Stack, IconButton, Typography, Box, styled } from "@mui/material";
import Select from "@mui/material/Select";
import DropDownOpen from "../../Assets/DropdownOpen.svg";
import DropDownClose from "../../Assets/DropdownClose.svg";
import DropDownUnchecked from "../../Assets/DropdownUnchecked.svg";
import DropDownChecked from "../../Assets/DropdownChecked.svg";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 372,
      backgroundColor: "#EFEFEF",
      padding: "0px",
    },
  },
};

const SideIconButton = styled(IconButton)(({ theme }) => ({
  padding: `${0}`,
  width: 50,
  height: 50,
  bgcolor: "#D6D6D6",
  borderRadius: "5px",
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: 0,
  borderBottom: 1,
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  ".MuiSvgIcon-root": {
    display: "none",
  },
  ".MuiRadio-root": {
    display: "none",
  },

  "&.Mui-focused": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#002856!important",
    },
  },

  ".MuiSelect-select": {
    // backgroundColor: "red",
    padding: "13.5px 17px",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "capitalize",
    color: "#000",
    letterSpacing: "1px",
    paddingTop: "16px !important",
    paddingBottom: "5.25px !important",
  },
}));

const borderLess = {
  ".MuiOutlinedInput-notchedOutline": {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    borderColor: "#D6D6D6",
  },
};

let selectedValue;

function MesDropDown(props: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [touched, setTouched] = useState(false);
  selectedValue = props.value;
  const handleFocus = () => {
    setTouched(true);
  };

  const handleBlur = () => {
    setTouched(false);
  };

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Stack direction={"row"} gap={0.8}>
      <FormControl sx={{ width: 400 }}>
        {touched || props.value ? (
          <InputLabel
            sx={{
              "&.MuiInputLabel-root": {
                color: "#F15D22",
                paddingRight: "5px",
              },
            }}
          >
            {props.label}
          </InputLabel>
        ) : (
          <InputLabel
            sx={{
              "&.MuiInputLabel-root": {
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "1px",
                fontFamily: "Segoe UI",
                color: " #A9A9A9",
                opacity: 9,

                paddingBottom: "5px",
              },
            }}
          >
            {props.placeholder}
          </InputLabel>
        )}
        <CustomSelect
          open={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          input={<OutlinedInput label={props.label} />}
          MenuProps={MenuProps}
          // sx={props.value ? borderLess : null}
          sx={touched || (props.value !== "" && borderLess)}
        >
          {props.options.map((item: any) => (
            <MenuItemList
              key={item.value}
              value={item.value}
              checked={props.value === item.value}
            >
              {item.name}
            </MenuItemList>
          ))}
        </CustomSelect>
      </FormControl>
      <SideIconButton
        sx={{
          backgroundColor: "#D6D6D6",
          "&:hover": {
            backgroundColor: "#D6D6D6",
          },
        }}
        onClick={handleToggle}
      >
        {!isOpen ? <DropDownOpen /> : <DropDownClose />}
      </SideIconButton>
    </Stack>
  );
}

const MenuItemList = (props: any) => {
  return (
    <>
      <CustomMenuItem
        key={props.value}
        {...props}
        disableRipple
        sx={{
          height: "40px !important",
          borderRadius: "5px",
          backgroundColor: "#fff",
          m: "1.5px",
          "&:hover": {
            backgroundColor: "#002856",
            color: "#F15D22",
          },
          "&:focus": {
            color: "#F15D22",
            border: "1px solid #002856",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#002856",
            },
          },
          "li.MuiButtonBase-root.MuiMenuItem-root": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack direction={"row"} sx={{ p: 0, m: 0 }} alignItems={"center"}>
          <Box
            sx={{
              p: 0,
              // border: "1px solid red",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!props.checked ? <DropDownUnchecked /> : <DropDownChecked />}
          </Box>
          <Typography
            sx={{
              alignItems: "center",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "18px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            {props.children}
          </Typography>
        </Stack>
      </CustomMenuItem>
    </>
  );
};

export default memo(MesDropDown);
