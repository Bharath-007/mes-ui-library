import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import MesLayout1 from "../../../Assets/MesLayout1.svg";
import MesLayout2 from "../../../Assets/MesLayout2.svg";
import MesLayout3 from "../../../Assets/MesLayout3.svg";
import MesLayout4 from "../../../Assets/MesLayout4.svg";
import MesLayout5 from "../../../Assets/MesLayout5.svg";
import {
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// importing via context
import MesLayoutContext from "../../MesLayouts/MesLayoutContext/MesLayoutContext";

interface ILayoutProps {
  open: boolean;
  handleClose?: Dispatch<SetStateAction<boolean>> | any;
  isHome?:boolean
  setHome?:Dispatch<SetStateAction<boolean>> | any;
}

const MesLayoutSwitcher: FC<ILayoutProps> = ({ open, handleClose ,isHome,setHome}) => {
  const {currentLayout,setCurrentLayout}=useContext(MesLayoutContext);
  const [close, setClose] = useState(false);
  const [layoutSlider, setLayoutSlider] = useState(1);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            height: "447px",
            width: "583px",
            m: 0,
          },
        },
      }}
    >
      {/* close button */}
      <Stack
        sx={{
          height: "48px",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <IconButton
          sx={{
            width: 2,
            height: 2,
            mr: "18px",
            // mt: 2,
          }}
          style={{ backgroundColor: "#FF6B6B" }}
          onMouseEnter={() => setClose(true)}
          onMouseLeave={() => setClose(false)}
          onClick={handleClose}
        >
          {close && <CloseIcon sx={{ fontSize: "14px" }} />}
        </IconButton>
      </Stack>
      <Divider />
      {/* Main Content Area */}
      <Stack flexGrow={1} sx={{ justifyContent: "center" }}>
        <DialogContent sx={{ p: 0 }}>
          {/* Title's */}
          <Typography
            fontSize={"31px"}
            sx={{
              color: "#000",
              fontWeight: 300,
              ml: "51px",
              mt: "22px",
              fontFamily: "Segoe UI",
            }}
          >
            Select Layout
          </Typography>
          <Typography
            fontSize={"14px"}
            sx={{
              color: "#565656",
              fontWeight: 300,
              ml: "52px",
              fontFamily: "Segoe UI",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspeno{" "}
          </Typography>
          {/* switcher layout icon */}
          <Stack
            direction={"row"}
            spacing={"52px"}
            sx={{
              width: "494px",
              mt: "34px",
              ml: "51px",
            }}
          >
            {layoutSlider === 1 ? (
              <>
                <MesLayoutButton name="Layout 1"  onClick={()=>{
                  setCurrentLayout("1")
                  setHome(false)
                }}>
                  <MesLayout1 />
                </MesLayoutButton>
                <MesLayoutButton name="Layout 2"  onClick={()=>{
                  setCurrentLayout("2")
                }}>
                  <MesLayout2 />
                </MesLayoutButton>
                <MesLayoutButton name="Layout 3"  onClick={()=>{
                  setCurrentLayout("3")
                }}>
                  <MesLayout3 />
                </MesLayoutButton>
              </>
            ) : (
              <>
                <MesLayoutButton name="Layout 4"  onClick={()=>{
                  setCurrentLayout("4")
                }}>
                  <MesLayout4 />
                </MesLayoutButton>
                <MesLayoutButton name="Layout 5"  onClick={()=>{
                 setCurrentLayout("5")
                }}>
                  <MesLayout5 />
                </MesLayoutButton>
              </>
            )}
          </Stack>
          {/* switcher buttons */}
          <Stack
            direction={"row"}
            spacing={"15px"}
            justifyContent={"center"}
            sx={{ mt: "34px" }}
            // style={{ border: "1px solid red" }}
          >
            <IconButton
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: layoutSlider === 1 ? "#002856" : "#D9D9D9",
                "&:focus": {
                  backgroundColor: "#002856",
                },
              }}
              value={layoutSlider}
              onClick={() => setLayoutSlider(1)}
            ></IconButton>
            <IconButton
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: layoutSlider === 2 ? "#002856" : "#D9D9D9",
                "&:focus": {
                  backgroundColor: "#002856",
                },
              }}
              value={layoutSlider}
              onClick={() => setLayoutSlider(2)}
            ></IconButton>
          </Stack>
        </DialogContent>
      </Stack>
    </Dialog>
  );
};

interface IMesLayoutButton {
  children: ReactNode;
  name: string;
  onClick:any
}

const MesLayoutButton: FC<IMesLayoutButton> = ({ children, name ,onClick}) => {
  return (
    <Stack>
      <IconButton
        disableRipple
        sx={{
          p: 0,
          m: 0,
          borderRadius: 0,
          transition: "transform 0.10s",
          transform: "scale(1.35)",
          "&:hover": {
            transform: "scale(1.38)",
          },
        }}
        style={{ width: "130px", height: "105px" }}
        onClick={onClick}
      >
        {children}
      </IconButton>
      <Typography
        sx={{
          color: "#565656",
          mt: "20px",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: "24px",
          fontFamily: "Segoe UI",
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default MesLayoutSwitcher;
