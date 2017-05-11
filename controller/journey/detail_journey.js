const { getJourneyFromId } = require('../../model/journey');
const { verify } = require('../../config/jwt');
const { getUserByUsername } = require('../../model/user');

module.exports = (req, res) => {
    const id = req.params.id;

            getJourneyFromId(id).then(result => {
                // getUserByUsername(req.username).then(detailUser => {
                //     res.render('./front-end/journey/index', { result: result.rows, username: r.username, detailUser: detailUser.rows[0] });
                // })
                // .catch(()=>{
                    res.render('./front-end/journey/index', { result: result.rows });
                // })
            });

}