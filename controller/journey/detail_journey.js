const {getJourneyFromId} = require('../../model/journey');

module.exports = (req,res)=>{
    const id = req.params.id;
    getJourneyFromId(id).then(result=>{
         res.render('./front-end/journey/index',{result: result.rows});
    })   
}