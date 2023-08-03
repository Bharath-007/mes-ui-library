import React, { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  Toolbar,
  Typography,
  StyledEngineProvider,
  Box,
  Fade,
  Slide,
  Grow,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import CustomIconButton from "../utils/CustomIconButton";
import ExpandMoreIcon from "../../Assets/ExpandMore.svg";
import ExpandLessIcon from "../../Assets/ExpandLess.svg";
import MainMenuIcon from "../../Assets/MainMenu.svg";
import CustomIconHolder from "../utils/CustomIconHolder";
import MesSideBarHeader from "./MesSideBarHeader/MesSideBarHeader";
import MesSideBarClosed from "./MesSideBarClosedState/MesSideBarClosed";

const drawerWidth: number = 280;
const shrunkDrawerWidth: number = 64;

export const CustomSideBar = styled(Drawer)(
  ({ theme, open }: { theme: any; open?: boolean }) => ({
    width: open ? drawerWidth : shrunkDrawerWidth,
    flexShrink: 0,
    marginTop: "64px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: 650,
    }),
    "& .MuiDrawer-paper": {
      width: open ? drawerWidth : shrunkDrawerWidth,
      // overflow: "hidden",
      variant: "permanent",
      display: "block",
      backgroundColor: "#F4F4F4",
      marginTop: "64px",
      marginLeft: 0,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: 650,
      }),
    },
  })
);

const NavMenus = [
  {
    mainId: 1,
    mainHeading: "Main Menu 1",
    icon: <MainMenuIcon />,
    subMenus: [
      {
        subId: 11,
        subHeading: "sub menu 1",
      },
      {
        subId: 12,
        subHeading: "sub menu 2",
      },
      {
        subId: 13,
        subHeading: "sub menu 3",
      },
      {
        subId: 14,
        subHeading: "sub menu 4",
      },
      {
        subId: 15,
        subHeading: "sub menu 5",
      },
      {
        subId: 16,
        subHeading: "sub menu 6",
      },
      {
        subId: 17,
        subHeading: "sub menu 7",
      },
      {
        subId: 18,
        subHeading: "sub menu 8",
      },
      {
        subId: 19,
        subHeading: "sub menu 9",
      },
    ],
  },
  {
    mainId: 2,
    mainHeading: "Main Menu 2",
    icon: <MainMenuIcon />,
    subMenus: [
      {
        subId: 21,
        subHeading: "sub menu 1",
      },
      {
        subId: 22,
        subHeading: "sub menu 2",
      },
      {
        subId: 33,
        subHeading: "sub menu 3",
      },
      {
        subId: 44,
        subHeading: "sub menu 4",
      },
      {
        subId: 55,
        subHeading: "sub menu 5",
      },
      {
        subId: 66,
        subHeading: "sub menu 6",
      },
      {
        subId: 77,
        subHeading: "sub menu 7",
      },
      {
        subId: 88,
        subHeading: "sub menu 8",
      },
      {
        subId: 99,
        subHeading: "sub menu 9",
      },
    ],
  },
  {
    mainId: 3,
    mainHeading: "Main Menu 3",
    icon: <MainMenuIcon />,
    subMenus: [
      {
        subId: 21,
        subHeading: "sub menu 1",
      },
      {
        subId: 22,
        subHeading: "sub menu 2",
      },
      {
        subId: 33,
        subHeading: "sub menu 3",
      },
      {
        subId: 44,
        subHeading: "sub menu 4",
      },
      {
        subId: 55,
        subHeading: "sub menu 5",
      },
      {
        subId: 66,
        subHeading: "sub menu 6",
      },
      {
        subId: 77,
        subHeading: "sub menu 7",
      },
      {
        subId: 88,
        subHeading: "sub menu 8",
      },
      {
        subId: 99,
        subHeading: "sub menu 9",
      },
    ],
  },
];

const ExpandGroup = (props: any) => {
  const [expandGroup, setexpandGroup] = React.useState(null);
  const handleClick = (id: any) => {
    if (expandGroup === id) {
      setexpandGroup(null);
    } else {
      setexpandGroup(id);
    }
  };
  return (
    <>
      <ListItemButton
        onClick={() => handleClick(props.item.mainId)}
        sx={{
          minHeight: "48px",
          maxHeight: "48px",
        }}
        key={props.item.mainId + props.item.mainHeading}
        style={{ borderBottom: "1px solid #EBEBEB", padding: 0 }}
      >
        <CustomIconHolder>{props.item.icon}</CustomIconHolder>
        <ListItemText
          disableTypography
          primary={
            <Typography
              sx={{
                fontWeight: 600,
                color: "black",
                fontSize: "14px",
                fontFamily: "Segoe UI",
                lineHeight: "18px",
                letterSpacing: "0.16px",
                textTransform: "capitalize",
              }}
            >
              {props.item.mainHeading}
            </Typography>
          }
        />
        {expandGroup === props.item.mainId ? (
          <Box sx={{ width: "24px", height: "48px" }}>
            <Box sx={{ mx: "4px", my: "16px" }}>
              <ExpandLessIcon />
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: "24px", height: "48px" }}>
            <Box sx={{ mx: "4px", my: "16px" }}>
              <ExpandMoreIcon />
            </Box>
          </Box>
        )}
      </ListItemButton>
      <Collapse
        in={expandGroup === props.item.mainId}
        timeout="auto"
        unmountOnExit
      >
        {props.item.subMenus.map((children: any) => (
          <ExpandGroupChildren key={children.subId} children={children} />
        ))}
      </Collapse>
    </>
  );
};

const ExpandGroupChildren = (props: any) => {
  const [active, setActive] = useState(false);

  const handleSubMenu = (val: any) => {
    // console.log(val);
    setActive(val);
  };

  return (
    <>
      <List component="div" disablePadding>
        <ListItemButton
          // component={Link}
          // to={`/${}`}
          sx={{
            p: 0,
            height: "36px",
            "&:hover": {
              backgroundColor: "#F15D22",
            },
            borderLeft: active === props.children.subId ? 8 : 0,
            borderColor: "#002856",
            // backgroundColor: "red",
          }}
          style={{ borderBottom: "1px solid white" }}
          onClick={() => handleSubMenu(props.children.subId)}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography
                fontSize={"14px"}
                sx={{
                  ml: active === props.children.subId ? "56px" : "64px",
                  fontWeight: 300,
                  color: active === props.children.subId ? "#F15D22" : "black",
                  fontFamily: "Segoe UI",
                  lineHeight: "18px",
                  letterSpacing: "0.16px",
                  textTransform: "capitalize",
                  //   "&:hover": {
                  //     color: active && "white",
                  //   },
                  "&:hover": {
                    color: active ? "#fff" : "#000",
                  },
                }}
              >
                {props.children.subHeading}
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </>
  );
};

// const MesSideBar = (): JSX.Element => {
//   const [open, setOpen] = useState<boolean>(false);
//   const handleDrawer = (): void => {
//     setOpen(!open);
//   };

//   return (
//     <CustomSideBar
//       variant="permanent"
//       open={open}
//       sx={{
//         "& .MuiDrawer-paper": {
//           marginTop: "64px",
//           marginLeft: "0px",
//         },
//         display: "block",
//       }}
//     >
//       <MesSideBarHeader handleDrawer={handleDrawer}>
//         Module Name
//       </MesSideBarHeader>
//       {!open ? (
//         <>
//           <MesSideBarClosed>{NavMenus[0].icon}</MesSideBarClosed>
//           <MesSideBarClosed>{NavMenus[1].icon}</MesSideBarClosed>
//           <MesSideBarClosed>{NavMenus[2].icon}</MesSideBarClosed>
//         </>
//       ) : (
//         <Stack width={280}>
//           {NavMenus.map((item, index) => (
//             <List key={index} disablePadding>
//               <ExpandGroup item={item} />
//             </List>
//           ))}
//           <Toolbar />
//         </Stack>
//       )}
//     </CustomSideBar>
//   );
// };

// export default MesSideBar;

interface IProps {
  children?: JSX.Element;
  variant?: string;
  sx?: any;
  open: Boolean;
}

const MesSideBar: FC<IProps> = ({ children, open, sx, variant }) => {
  return (
    <CustomSideBar {...sx} variant={variant} open={open}>
      {children}
    </CustomSideBar>
  );
};

export default MesSideBar;
