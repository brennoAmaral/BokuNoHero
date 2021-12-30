import theme from "../../theme"
import styled from "styled-components"

export const Header = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    margin: 0;
    width: 160px;
  }

`