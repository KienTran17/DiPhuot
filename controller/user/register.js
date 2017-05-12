const { insertUser } = require('../../model/user');
const { verify } = require('../../config/jwt');
const { sign } = require('../../config/jwt');
const bycript = require('bcrypt');

module.exports = (req, res) => {
    //getUserByUsername();
    const token = req.cookies.tk_lg;
    const { txtFirstName, txtUsername, txtLastName, txtEmail, txtPassword } = req.body;
    bycript.hash(txtPassword, 10, (err, hash) => {
        if(err) return console.log(err+'');
        insertUser(txtFirstName, txtLastName, txtUsername, txtEmail, hash).then(r => {
            const username = txtUsername;
            sign({username}).then(token => {
                res.cookie('tk_lg', token);
                req.session.username = username;
                res.redirect('./');
            }).catch(e=> console.log('loi sign'+e));
        }).catch(er=>console.log('loi insert'+er));
    });


}