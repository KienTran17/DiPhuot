const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');


let parser = require('body-parser').urlencoded({ extended: false });

app.use(session({
    secret: 'sh72cjs2c92du82dhfd',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 20000
    }
}));
app.use(cookieParser());
app.set('port', (process.env.PORT || 3000));


//gói body-parser lấy dữ liệu từ form (POST) trong ejs

//sử dụng gói ejs tạo trang html
app.set('view engine', 'ejs');
app.set('views', './views'); //views

app.use(express.static('public'));

app.get('/', parser, require('./controller/home/home'));

app.get('/place/:id', parser, require('./controller/place/detail_place'));
app.get('/journey/:id', parser, require('./controller/journey/detail_journey'));

app.post('/login', parser, require('./controller/user/login'));

app.get('/profile', parser, require('./controller/user/userDetail'));

//đổi ajax
app.post('/register', parser, require('./controller/user/register'));
//đổi ajax
app.post('/saveuser', parser, require('./controller/user/saveuser'));

app.get('/logout', require('./controller/user/logout'));

app.get('/getplace/:token/:idUser', require('./controller/api/getPlace'));
app.get('/getjourney/:token/:idUser', require('./controller/api/getJourney'));
app.get('/getuser/:token', require('./controller/api/getUser'));

app.get('/createplace', parser, require('./controller/user/userCreatePlace'));

app.post('/createplace',parser, require('./controller/user/addPlace'));

//đổi ajax
app.post('/place/getward',parser, require('./controller/place/getWard'));

app.post('/upload',parser, require('./controller/user/addPlace'));

// app.post("/upload",  fn);

// http.createServer(app).listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });

