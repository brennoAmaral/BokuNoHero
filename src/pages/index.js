import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Avatar from "../components/avatar"
import styled from "styled-components"
import getData from "../services/getData"
import BlueParagraph from "../components/blueParagraph"
import BlackSpan from "../components/blackSpan"
import Title from "../components/title"
import Menu from "../components/menu"
import { heightMenu } from "../components/Menu/menu"

const DivStyle = styled.div`
  width: 100vw;
  height: 100%;
`

const UlStyle = styled.ul`
  list-style-type:none;
`
const MarginStyle = styled.div`
  margin: 0 20px 20px 20px;
  Title{
    margin-bottom: 20px;
  }
`
const Div = styled.div`
margin: 0 0 ${heightMenu+(heightMenu/2)}px 0;
`

export default function IndexPage() {
  const [data, setData] = useState({})
  useEffect(() => {
    getData().then(result => {
      setData(result)
    })
  }, [])

  return (
    <>
      <Div>
        <DivStyle>
          <Header />
          <Avatar />
          <MarginStyle>
            <Title>
              Features
            </Title>
            <UlStyle>
              <li>
                <BlueParagraph>
                  Name : &nbsp;
                  <BlackSpan>
                    {data.name}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Occupation : &nbsp;
                  <BlackSpan>
                    {data.occupation}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Quirk : &nbsp;
                  <BlackSpan>
                    {data.quirk}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Affiliation : &nbsp;
                  <BlackSpan>
                    {data.affiliation}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Birthday : &nbsp;
                  <BlackSpan>
                    {data.birthday}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Gender: &nbsp;
                  <BlackSpan>
                    {data.gender}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Height : &nbsp;
                  <BlackSpan>
                    {data.height}
                  </BlackSpan>
                </BlueParagraph>
              </li>
              <li>
                <BlueParagraph>
                  Status : &nbsp;
                  <BlackSpan>
                    {data.status}
                  </BlackSpan>
                </BlueParagraph>
              </li>
            </UlStyle>
          </MarginStyle>
          <MarginStyle>
            <Title>
              Brief History
            </Title>
            <BlueParagraph>
              {data.description}
            </BlueParagraph>
          </MarginStyle>
        </DivStyle >
      </Div>
      <Menu/>
    </>
  );
}

