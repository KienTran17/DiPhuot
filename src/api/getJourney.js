
const getJourney = (token,idUser) => (
  fetch('http://localhost:3000/getjourney/' + token + '/'+ idUser)
    .then(res => res.json())
);
  
export default getJourney;