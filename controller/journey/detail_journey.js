const { getJourneyFromId } = require('../../model/journey');
const { verify } = require('../../config/jwt');
const { getUserByUsername } = require('../../model/user');

module.exports = (req, res) => {
    const token = req.cookies.tk_lg;
    const id = req.params.id;
    verify(token)
        .then(r => {
            getJourneyFromId(id).then(result => {
                getUserByUsername(r.username).then(detailUser => {
                    res.render('./front-end/journey/index', { result: result.rows, username: r.username, detailUser: detailUser.rows[0] });
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
            getJourneyFromId(id).then(result => {
                res.render('./front-end/journey/index', { result: result.rows });
            });
        });
}