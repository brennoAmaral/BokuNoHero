const axios = require('axios');

export default async function getData(){
  const response = await axios({
    url: 'https://myheroacademiaapi.com/api/character/Toshinori_Yagi',
    method: 'GET'
  })
  const data = response.data;
  const result = {
      alias: data.alias,
      name: data.name,
      ocupation: data.ocupation,
      quirk: data.quirk,
      afiliation: data.afiliation,    
      birthday: data.birthday,    
      gender: data.gender,    
      height: data.height,    
      status: data.status,
      description: data.description,      
    }
  return result; 
}

