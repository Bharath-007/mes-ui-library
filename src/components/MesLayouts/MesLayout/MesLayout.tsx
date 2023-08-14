import React, { FC, useState } from "react";
import MesLayout1 from "../MesLayout1/MesLayout1";
import MesLayout2 from "../MesLayout2/MesLayout2";
import MesLayout3 from "../MesLayout3/MesLayout3";
import MesLayout4 from "../MesLayout4/MesLayout4";
import MesLayout5 from "../MesLayout5/MesLayout5";

type Layout = {
  children?: any;
};

const MesLayout: FC<Layout> = ({ children }) => {
  const [layout, setLayout] = useState(0);
  return (
    <>
      {layout === 0 && <MesLayout1></MesLayout1>}
      {layout === 1 && <MesLayout2></MesLayout2>}
      {layout === 2 && <MesLayout3></MesLayout3>}
      {layout === 3 && <MesLayout4></MesLayout4>}
      {layout === 4 && <MesLayout5></MesLayout5>}
    </>
  );
};

export default MesLayout;
