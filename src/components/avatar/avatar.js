import React, { useState } from "react";
import styled from "styled-components";
import getImagePerson from "../../services/firstGet.js";
import getData from "../../services/getData";
import theme from "../../theme.js";
import HyperTitle from "../hyperTitle";



const Div = styled.div`
margin: 0 0 10px 0;
`
 const AliasDiv = styled.div`
background-color: ${theme.primary};
text-align: center;
h1{
  margin: 0;
}
`
 const AvatarStyle = styled.div`
  display: flex;
  background: linear-gradient(180deg,rgba(0,76,171,1) 50%,rgb(255 255 255) 50%);
  justify-content: center;
  align-items: center;
`
const DivImgStyle = styled.div`
  img{
    border-radius: 100%;
  }
`

export default function Avatar() {
  const [characterImage, setCharacter] = useState();
  getImagePerson.then(response => {
    setCharacter(response);
  })
  const [Data, SetData] = useState({})
  getData().then(result => {
    SetData(result)
  })
  return (
    <Div>
      <AliasDiv>
        <HyperTitle>
          {Data.alias}
        </HyperTitle>
      </AliasDiv>
      <AvatarStyle>
        <DivImgStyle>
          <img src={characterImage} />
        </DivImgStyle>
      </AvatarStyle>
    </Div>
  );
}