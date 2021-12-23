import React from 'react'
import styledComponents from 'styled-components'
import theme from '../../theme'


const PStyle = styledComponents.p`
font-size: 20px;
color: ${theme.primary};
`

export default function blueParagraph({children}) {
  return (
    <PStyle>
      {children}
    </PStyle>
  )
}
