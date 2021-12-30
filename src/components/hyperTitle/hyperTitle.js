import React, { children } from 'react'
import * as style from "./style"
export default function HyperTitle({children}) {
  return (
    <style.P>
      {children}
    </style.P>
  )
}
