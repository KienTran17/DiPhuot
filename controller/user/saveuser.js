const { checkExistAccount,insertUserFb } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { sign } = require('../../config/jwt');
const cookieParser = require('cookie-parser');
const bycript = require('bcrypt');

module.exports = (req, res) => {
    const data= req.body;
    checkExistAccount(data.email,data.id).then(r=>{
        if(r.rows.length === 0){
            insertUserFb(data.first_name,data.last_name,data.email,data["picture[data][url]"], data.link, data.id).then(isOk=>{
                const username = data.email;
                sign({username}).then(token=>{
                //console.log(token);
                req.session.username = username;
                res.send({token,username});
                //res.redirect('http://localhost:3000/');
                });
            })
            .catch(er=> console.log(er+''));
        }
        else {
            const username = data.email;
            sign({username}).then(token=>{
                //console.log(token);
                req.session.username = username;
                res.send({token,username});
                //res.redirect('http://localhost:3000/');
            });
        }
    }).catch(e=>console.log(e+''));
    //res.send({a: 'ok'});
}