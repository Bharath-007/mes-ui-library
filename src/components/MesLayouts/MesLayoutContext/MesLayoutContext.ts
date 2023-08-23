import React from "react";
import { Dispatch, SetStateAction, createContext } from "react";

type ILayoutContext = {
    currentLayout:string,
    setCurrentLayout:Dispatch<SetStateAction<string | null>>,
  }

  const IUserContextState = {
    currentLayout:'0',
    setCurrentLayout:() => {},
  }

const MesLayoutContext = createContext<ILayoutContext>(IUserContextState)

export default MesLayoutContext;        