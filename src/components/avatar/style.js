import styled from "styled-components"
import theme from "../../theme"

export const Div = styled.div`
margin: 0 0 10px 0;
`
export const AliasDiv = styled.div`
background-color: ${theme.primary};
text-align: center;
h1{
  margin: 0;
}
`
export const Avatar = styled.div`
  display: flex;
  background: linear-gradient(180deg,rgba(0,76,171,1) 50%,rgb(255 255 255) 50%);
  justify-content: center;
  align-items: center;
`
export const DivImg = styled.div`
  img{
    border-radius: 100%;
  }
`