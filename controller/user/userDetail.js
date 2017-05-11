const {getUserByUsername} = require('../../model/user');
const {verify} = require('../../config/jwt');

module.exports =  (req, res)=>{
      const username = req.session.username;
        getUserByUsername(username).then(detailUser => {
            res.render('./front-end/user/index',{username: username, detailUser: detailUser.rows[0]});
        });
}