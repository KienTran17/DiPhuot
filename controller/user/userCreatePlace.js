const { getUserByUsername } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { getAllCity } = require('../../model/city');

module.exports = (req, res) => {
    //getUserByUsername();
    const username = req.session.username;
            getUserByUsername(username).then(detailUser => {
                getAllCity().then(lstCity => {
                    req.session.username = username + '';
                    res.render('./front-end/user/createPlace', { username: username, detailUser: detailUser.rows[0], lstCity: lstCity.rows });
                }).catch(()=> res.send('khong load dc city'));
            })
            .catch((e)=> console.log('ko load username: ' + e));
}