import { Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'

const MesBodyContainer:FC<{children:ReactNode|ReactNode[]|JSX.Element|JSX.Element[]}> = ({children}) => {
  return (
    <Stack sx={{ width: "100%" }} height={"100vh"} direction={"row"}>{children}</Stack>
  )
}

export default MesBodyContainer