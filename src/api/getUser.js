
const getUser = (token) => (
  fetch('http://localhost:3000/getuser/' + token)
    .then(res => res.json())
);
  


export default getUser;