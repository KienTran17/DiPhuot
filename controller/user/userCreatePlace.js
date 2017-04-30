const {getUserByUsername} = require('../../model/user');
const {verify} = require('../../config/jwt');

module.exports =  (req, res)=>{
    //getUserByUsername();
    const token = req.cookies.tk_lg;
    //res.send(token);
    verify(token)
    .then(r=>{
        getUserByUsername(r.username).then(detailUser => {
            res.render('./front-end/user/createPlace',{username: r.username, detailUser: detailUser.rows[0]});
        });
    })
    .catch(()=>{
        cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
        res.redirect('http://localhost:3000/')
    });
}