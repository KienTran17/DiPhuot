const {getUserByUsername} = require('../../model/user');
const {verify} = require('../../config/jwt');
const { getListPlaceFromUser } = require('../../model/place');

module.exports =  (req, res)=>{
    //getUserByUsername();
    const {token} = req.params;
    //res.send(token);
    verify(token)
    .then(r=>{
            const {idUser} = req.params;
            getListPlaceFromUser(idUser).then(lstPlace=>{
                //console.log(lstPlace.rows);
                res.send(lstPlace.rows);
        });
    })
    .catch((e)=>{
        cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
        res.send(e+'loi lay place');
    });
}