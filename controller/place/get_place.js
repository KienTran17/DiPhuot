const {getPlaceFromId} = require('../../model/place');

module.exports = (req,res)=>{
    const id = req.params.id;
    getPlaceFromId(id).then(result=>{
         res.render('./front-end/place/index',{result: result.rows});
    })   
}