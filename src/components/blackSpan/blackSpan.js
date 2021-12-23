import React from 'react'
import styledComponents from 'styled-components'
import theme from '../../theme'


const SpanStyle = styledComponents.span`
font-size: 20px;
color: ${theme.black};
`

export default function blackSpan({children}) {
  return (
    <SpanStyle>
      {children}
    </SpanStyle>
  )
}
