import React, { useState } from "react"
import Header from "../components/header"
import Avatar from "../components/avatar"
import styled from "styled-components"
import getData from "../services/getData"
import theme from "../theme"
import BlueParagraph from "../components/blueParagraph"
import HyperTitle from "../components/hyperTitle"
import BlackSpan from "../components/blackSpan"
import Title from "../components/title"

const DivStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

const UlStyle = styled.ul`
`
export default function IndexPage() {
  const [Data, SetData] = useState({})
  getData().then(result => {
    SetData(result)
  })
  return (
    <DivStyle>
      <Header />
      <Avatar />
      <Title>
        Features
      </Title>
      <UlStyle>
        <li>
          <BlueParagraph>
            Name : &nbsp; 
            <BlackSpan>
              {Data.name}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Occupation : &nbsp; 
            <BlackSpan>
              {Data.occupation}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Quirk : &nbsp; 
            <BlackSpan>
              {Data.quirk}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Affiliation : &nbsp; 
            <BlackSpan>
              {Data.affiliation}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Birthday : &nbsp; 
            <BlackSpan>
              {Data.birthday}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Gender: &nbsp; 
            <BlackSpan>
              {Data.gender}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Height : &nbsp; 
            <BlackSpan>
              {Data.height}
            </BlackSpan>
          </BlueParagraph>
        </li>
        <li>
          <BlueParagraph>
            Status : &nbsp; 
            <BlackSpan>
              {Data.status}
            </BlackSpan>
          </BlueParagraph>
        </li>
      </UlStyle>
      <Title>
        Brief History
      </Title>
      <BlueParagraph>
        {Data.description}
      </BlueParagraph>
    </DivStyle >
  );
}

