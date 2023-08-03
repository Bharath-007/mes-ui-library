import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import CustomIconHolder from "../../utils/CustomIconHolder";
import ExpandMoreIcon from "../../../Assets/ExpandMore.svg";
import ExpandLessIcon from "../../../Assets/ExpandLess.svg";
import { FC, ReactNode, memo } from "react";

interface IProps {
  id?: string | number;
  icon?: string | JSX.Element;
  label?: string;
  open?: boolean | number | string;
  onClick?: void | any;
  children?: ReactNode | ReactNode[] | JSX.Element;
}

const MesListItemDropDown: FC<IProps> = ({
  id,
  icon,
  label,
  open,
  children,
  onClick,
}) => {
  return (
    <List key={id} disablePadding>
      <ListItemButton
        onClick={onClick}
        sx={{
          minHeight: "48px",
          maxHeight: "48px",
        }}
        style={{ borderBottom: "1px solid #EBEBEB", padding: 0 }}
      >
        <CustomIconHolder>{icon}</CustomIconHolder>
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
              {label}
            </Typography>
          }
        />
        {open === id ? (
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
      <Collapse in={Boolean(open === id)} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  );
};

export default memo(MesListItemDropDown);
