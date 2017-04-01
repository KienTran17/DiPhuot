const queryDB  = require('./db');

const getListPlace = ()=>( 
    queryDB(`select * from "place"`,[])
);

const getPlaceFromId = (id) =>(
    queryDB(`select * from "place" where id = $1`,[id])
);

module.exports = {getListPlace,getPlaceFromId};