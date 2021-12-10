import axios from "contentful-management/node_modules/axios";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";


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
  border-radius: 50px;
`

export default function Avatar(){

  return(
    <AvatarStyle>
      <DivImgStyle>
      
      </DivImgStyle>
    </AvatarStyle>
  );  
}