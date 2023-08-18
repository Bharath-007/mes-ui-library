import { IconButton } from "@mui/material";
import React, {
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Catching Current layout
import MesLayoutContext from "../../MesLayouts/MesLayoutContext/MesLayoutContext";

interface IProps {
  icon: ReactNode | ReactElement;
  sx?: any;
  hovered?: ReactNode | ReactElement;
  home?: boolean;
}

const MesMenuIconBtn: FC<IProps> = ({ icon, sx, hovered, home }) => {
  //using global state(currentLayout) globally using useContext
  const { currentLayout, setCurrentLayout } = useContext(MesLayoutContext);
  const [hover, setHover] = useState(false);

  return (
    <IconButton
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "4px",
        boxShadow: "0px 0px 20px 0px rgba(117, 117, 117, 0.25)",
      }}
      disableRipple
      sx={[
        {
          backgroundColor: "#F2F2F2",
          "&:hover": {
            backgroundColor: "#F15D22",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: currentLayout === "2" ? 35 : 15,
              right: 0,
              left: currentLayout === "2" ? 28:45,
              width: home ? 0 : 8,
              height: home ? 0 : 10,
              bgcolor: "#F15D22",
              transform: "translateX(-130%)  rotate(45deg)",
              zIndex: 1,
            },
          },
          "&:focus": {
            backgroundColor: "#002856",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: currentLayout === "2" ? 35 : 15,
              right: 0,
              left: currentLayout === "2" ? 28:45,
              width: home ? 0 : 8,
              height: home ? 0 : 10,
              bgcolor: "#002856",
              transform: "translateX(-130%)  rotate(45deg)",
              zIndex: 0,
            },
          },
        },
        sx,
      ]}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {hover ? hovered : icon}
    </IconButton>
  );
};

export default MesMenuIconBtn;
