
const getPlace = (token,idUser) => (
  fetch('http://localhost:3000/getPlace/' + token+'/'+idUser)
    .then(res => res.json())
);
  


export default getPlace;