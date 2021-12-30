import React, { useEffect, useState } from "react";
import getImagePerson from "../../services/getImage.js";
import getData from "../../services/getData";
import HyperTitle from "../hyperTitle"
import * as style from "./style.js"




export default function Avatar() {
  const [characterImage, setCharacter] = useState([]);
  const [data, setData] = useState({})

  useEffect(() => {
    getImagePerson.then(response => {  
      setCharacter(response);
    })
    getData().then(result => {
      setData(result);
    })
  }, [])


  return (
    <style.Div>
      <style.AliasDiv>
        <HyperTitle>
          {data.alias}
        </HyperTitle>
      </style.AliasDiv>
      <style.Avatar>
        <style.DivImg>
          <img src={characterImage[characterImage.length-1]} />
        </style.DivImg>
      </style.Avatar>
    </style.Div>
  );
}