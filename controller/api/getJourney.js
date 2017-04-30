const { getUserByUsername } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { getListJourneyFromUser } = require('../../model/journey');

module.exports = (req, res) => {
    //getUserByUsername();
    const { token } = req.params;
    //res.send(token);
    verify(token)
        .then(r => {
            const { idUser } = req.params;
            getListJourneyFromUser(idUser).then(lstJourney => {
                res.send(lstJourney.rows);
            });

        })
        .catch((e) => {
            cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
            res.send(e + 'loi lay journey');
        });
}