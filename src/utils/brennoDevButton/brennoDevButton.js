import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BrennoDevLogo from "../../images/svg/brenno-dev-logo"

const BtnIcon = styled.button`
width: 60px;
height: 55px;
border: none;
cursor: pointer;
position: absolute;
rigth: 0;
display: flex;
align-items: center;
background-color: transparent;
  svg{
    right: 0;
  }
`
const BtnDiv= styled.div`
width: 60px;
height: 55px;
margin: 0;
padding: 0;
position: absolute;
top: 20px;
right: 10px;
`


export default function brennoDevButton() {
  return (
    <BtnDiv >
      <BtnIcon onClick={() => navigate('https://brenno.dev/')}>
        <BrennoDevLogo />
      </BtnIcon>
    </BtnDiv>
  )
}
