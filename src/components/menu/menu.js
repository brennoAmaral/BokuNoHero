import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Motivation from '../../images/svg/motivation'
import Loupe from '../../images/svg/loupe'
import Blocks from '../../images/svg/blocks'

export const heightMenu = 55;
const NavBarStyle = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${heightMenu}px;
  border-top: 2px solid ${theme.tertiary};
  background-color: ${theme.primary};
  div:first-of-type {
    margin: 0  0 0 auto;
  }
  div:last-of-type {
    margin: 0  auto 0 0 ;
  }
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  p {
    font-size 12px;
    color: ${theme.white};
    margin: 5px 0 0 0;
  }
`
export default function Menu() {
  return (
    
    <NavBarStyle>
      <Div>
        <Motivation/>
        <p>
          Motivation
        </p>
      </Div>

      <Div>
        <Loupe/>
        <p>
          Search Heroes
        </p>
      </Div>

      <Div>
        <Blocks/>
        <p>
          Block Search
        </p>
      </Div>
    </NavBarStyle>
  );
}
