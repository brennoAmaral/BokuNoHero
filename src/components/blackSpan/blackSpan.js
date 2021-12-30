import React from 'react'
import * as style from './style'

export default function blackSpan({children}) {
  return (
    <style.Span>
      {children}
    </style.Span>
  )
}
