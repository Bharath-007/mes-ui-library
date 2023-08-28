import React, { FC, ReactNode,Dispatch, SetStateAction, createContext, useState, useEffect } from "react";
import MesLayout1 from "../MesLayout1/MesLayout1";
import MesLayout2 from "../MesLayout2/MesLayout2";
import MesLayout3 from "../MesLayout3/MesLayout3";
import MesLayout4 from "../MesLayout4/MesLayout4";
import MesLayout5 from "../MesLayout5/MesLayout5";
import MesLayoutContext from "../MesLayoutContext/MesLayoutContext";
import MesDefaultLayout from "../MesDefaultLayout/MesDefaultLayout";
import { MesHome } from "../../Home";


interface Layout{
  children?: ReactNode | ReactNode[] |any;
};


const MesLayoutProvider: FC<Layout> = ({ children }) => {
  
  const [currentLayout, setCurrentLayout] = useState<string | any>('0');

  useEffect(() => {
    // console.log(currentLayout);
  }, [currentLayout])
  
  return (
    <MesLayoutContext.Provider value={{currentLayout,setCurrentLayout}}>
    {currentLayout === '0'&&<MesDefaultLayout>{children}</MesDefaultLayout>}
    {currentLayout === '1' && <MesLayout1>{children}</MesLayout1>}
    {currentLayout === '2' && <MesLayout2>{children}</MesLayout2>}
    {/* {currentLayout === '3' && <MesLayout3>{children}</MesLayout3>}
    {currentLayout === '4' && <MesLayout4>{children}</MesLayout4>}
    {currentLayout === '5' && <MesLayout5>{children}</MesLayout5>} */}
  </MesLayoutContext.Provider>
  );
};

export default MesLayoutProvider;