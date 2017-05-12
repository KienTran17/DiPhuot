const { getPlaceFromId } = require('../../model/place');
const { verify } = require('../../config/jwt');
const { getUserByUsername, getUserById } = require('../../model/user');
const { getImageFromPlace } = require('../../model/image');

module.exports = (req, res) => {
    const id = req.params.id;
    
    const token = req.cookies.tk_lg;
    console.log(token)
    //if(typeof username === 'undefined')
    verify(token)
        .then(r => {
            req.session.username = r.username;
        });
    getPlaceFromId(id + "").then(result => {
        //user create place
        getUserById(result.rows[0].user_id)
            .then(userPlace => {
                getUserByUsername(req.session.username)
                    .then(user => {
                        //get list image have in place
                        getImageFromPlace(id)
                            .then(lstImage => {
                                res.render('./front-end/place/index', { result: result.rows[0], username: req.session.username, detailUser: user.rows[0], lstImage: lstImage.rows, userPlace: userPlace.rows[0] });
                            })
                            .catch(e => res.send('loi lay anh ' + e));
                    })
                    .catch(() => {

                        res.render('./front-end/place/index', { result: result.rows[0] });
                    });
            })
            .catch(e=> res.send('Khong lay duoc user tu place ' + e))
        //user login

    })
    .catch(er=> res.send('Khong lay duoc place tu id ' + er));
}