import React, {useState} from "react"
import Header from "../components/header"
import Avatar from "../components/avatar"
import styled from "styled-components"
import getData from "../services/getData"

const DivStyle =  styled.div`
  width: 100vw;
  height: 100vh;
`
const H1Style = styled.h1`
  font-size: 20px;
`
export default function IndexPage (){
  const [Data, SetData] = useState({})
  getData().then(result => {
    SetData(result)
  })
  return(
    <DivStyle>
      <Header />
      <Avatar />
      <H1Style>
        {Data.alias}
      </H1Style>
    </DivStyle>
  );
}

