const { getUserByUsername } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { getAllCity } = require('../../model/city');

module.exports = (req, res) => {
    //getUserByUsername();
    console.log(req.session.username)
    const username = req.session.username;
            getUserByUsername(username).then(detailUser => {
                getAllCity().then(lstCity => {
                    res.render('./front-end/user/createPlace', { username: username, detailUser: detailUser.rows[0], lstCity: lstCity.rows });
                }).catch(()=> res.send('khong load dc city'));
            });
}