const { getUserByUsername } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { getAllCity } = require('../../model/city');

module.exports = (req, res) => {
    //getUserByUsername();
    const token = req.cookies.tk_lg;
    //res.send(token);
    verify(token)
        .then(r => {
            getUserByUsername(r.username).then(detailUser => {
                getAllCity().then(lstCity => {
                    res.render('./front-end/user/createPlace', { username: r.username, detailUser: detailUser.rows[0], lstCity: lstCity.rows });
                }).catch(()=> res.send('khong load dc city'));
            });
        })
        .catch(() => {
            cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
            res.redirect('./')
        });
}