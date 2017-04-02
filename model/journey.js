const queryDB  = require('./db');

const getListJourney = ()=>( 
    queryDB(`select * from "journey"`,[])
);

const getJourneyFromId = (id) =>(
    queryDB(`select * from "journey" where id = $1`,[id])
);

module.exports = {getListJourney,getJourneyFromId};