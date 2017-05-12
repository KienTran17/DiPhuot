const cookieParser = require('cookie-parser');

module.exports =  (req, res)=>{
    cookie = req.cookies;
    req.session.username = undefined;
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }    
        res.cookie(prop, '', {expires: new Date(0)});
    }
    res.redirect('/');
}