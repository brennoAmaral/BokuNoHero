import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import getImagePerson from "../../services/firstGet.js";


const AvatarStyle = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgba(0,76,171,1) 50%, rgba(255,255,255,0) 50%);
  justify-content: center;
  align-items: center;
`
const DivImgStyle = styled.div`
  background-color: ${theme.secondary};
  width:  100px;
  height: 100px;
  img{
    border-radius: 50px;
  }
`



export default function Avatar(){
  const [ characterImage, setCharacter] = useState();

  getImagePerson.then( response => {
    setCharacter(response);
  })
  return(
    <AvatarStyle>
      <DivImgStyle>
        <img src={characterImage}/>
      </DivImgStyle>
    </AvatarStyle>
  );  
}