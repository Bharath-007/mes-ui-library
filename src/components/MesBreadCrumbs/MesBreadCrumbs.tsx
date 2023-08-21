import { Breadcrumbs, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import BreadCrumbsSeperator from "../../Assets/BreadCrumbs.svg";

const MesBreadCrumbs: FC<{
  children: ReactNode | ReactNode[] | JSX.Element;
}> = ({children}) => {

  return (
    <Breadcrumbs separator={<BreadCrumbsSeperator />} >
      {children}
    </Breadcrumbs>
  );
};

export default MesBreadCrumbs;
