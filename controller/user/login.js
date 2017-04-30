const {checkLogin} = require('../../model/user');
const cookieParser = require('cookie-parser');

const {sign} = require('../../config/jwt');

module.exports =  (req, res)=>{
    const {username,password} = req.body;
    checkLogin (username,password).then(result=>{
        if(result) {
            sign({username}).then(token=>{
                res.cookie('tk_lg',token);
                res.redirect('http://localhost:3000/');
            });
        }
    })
    .catch(r=>res.send('loi'));
}