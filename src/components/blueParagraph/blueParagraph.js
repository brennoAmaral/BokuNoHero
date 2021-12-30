import React from 'react'
import * as style from './style'

export default function blueParagraph({children}) {
  return (
    <style.P>
      {children}
    </style.P>
  )
}
