import Axios from 'axios'

async function getImagePerson(){
  const response = await Axios({
    url: 'https://myheroacademiaapi.com/api/character/Toshinori_Yagi',
    method: 'GET'
  })
  const data = response.data;
  const image = data.images[2];
  return image;
}

export default getImagePerson();
