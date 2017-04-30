const { getPlaceFromId } = require('../../model/place');
const { verify } = require('../../config/jwt');
const { getUserByUsername } = require('../../model/user');

module.exports = (req, res) => {
    const id = req.params.id;
    const token = req.cookies.tk_lg;

    verify(token)
        .then(r => {
            getPlaceFromId(id+"").then(result => {
                getUserByUsername(r.username).then(detailUser => {
                    res.render('./front-end/place/index', { result: result.rows, username: r.username, detailUser: detailUser.rows[0] });
                });
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
            getPlaceFromId(id).then(result => {

                res.render('./front-end/place/index', { result: result.rows });
            });
        });
}