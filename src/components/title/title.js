import React, { children } from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const PStyle = styled.p`
  font-size: 30px;
  -webkit-text-stroke: 1.5px ${theme.tertiary};
  color: ${theme.white};
  padding: 10px;
  text-align:center;
`

export default function title({children}) {
  return (
    <PStyle>
      {children}
    </PStyle>
  )
}
