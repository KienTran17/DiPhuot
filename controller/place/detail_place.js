const { getPlaceFromId } = require('../../model/place');
const { verify } = require('../../config/jwt');
const { getUserByUsername } = require('../../model/user');

module.exports = (req, res) => {
    const id = req.params.id;
            getPlaceFromId(id+"").then(result => {
                // getUserByUsername(req.username).then(detailUser => {
                //     res.render('./front-end/place/index', { result: result.rows, username: req.username, detailUser: detailUser.rows[0] });
                // })
                // .catch(()=>{
                    res.render('./front-end/place/index', { result: result.rows });
                // });
            });
}