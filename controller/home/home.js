const { getListPlace } = require('../../model/place.js');
const { getUserByUsername } = require('../../model/user.js');
const cookieParser = require('cookie-parser');
const { verify } = require('../../config/jwt');

module.exports = (req, res) => {
    const token = req.cookies.tk_lg;
    console.log(token);
    console.log(req.session.username);
    //res.send(token);
    verify(token)
        .then(r => {
            getListPlace().then(lstPlace => {
                //res.send(req.cookies);
                getUserByUsername(r.username).then(detailUser => {
                    req.session.username = r.username;
                    res.render('./front-end/home/index', { lstPlace: lstPlace.rows, username: r.username, detailUser: detailUser.rows[0] });
                }).catch((e) => res.send("loi"+e));
            });
        })
        .catch(() => getListPlace().then(lstPlace => {
            //res.send(req.cookies);
            //res.send(token);
            cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
            res.render('./front-end/home/index', { lstPlace: lstPlace.rows });
        }));
}