const {getListPlace} = require('../../model/place.js');


module.exports = (req,res)=>{
    if(req.session.daDangNhap === 0);
    getListPlace().then(lstPlace => {
        res.render('./front-end/home/index',{lstPlace: lstPlace.rows});
    }); 
}