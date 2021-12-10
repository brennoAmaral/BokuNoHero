import * as React from "react"
import theme from "../../theme"
import styled from "styled-components"
import BokuNoHeroLogo from "../../images/boku-no-hero-logo.png"
import BrennoDevLogo from "../../images/brenno-dev-logo"

const HeaderStyle = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    margin: 0;
  }

  svg {
    position: absolute;
    right: 20px;
}

`


const Header = () => (
  <HeaderStyle>
    <img src={BokuNoHeroLogo} />
    <BrennoDevLogo />
  </HeaderStyle>
)

export default Header
