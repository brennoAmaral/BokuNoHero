import React, { children } from 'react'
import * as style from './style'



export default function title({children}) {
  return (
    <style.P>
      {children}
    </style.P>
  )
}
