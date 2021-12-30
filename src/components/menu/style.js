import styled from "styled-components";
import theme from "../../theme";

export const heightMenu = 55;
export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${heightMenu}px;
  border-top: 2px solid ${theme.tertiary};
  background-color: ${theme.primary};
  button:first-of-type {
    margin: 0  0 0 auto;
  }
  button:last-of-type {
    margin: 0  auto 0 0 ;
  }
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  mouse: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  p {
    font-size 12px;
    color: ${theme.white};
    margin: 5px 0 0 0;
  }
`