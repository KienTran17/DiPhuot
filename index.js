let express = require('express');
let app = express();

const session = require('express-session');


app.use(session({
    secret: 'sh72cjs2c92du82dhfd',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 5000
    }
}));

app.listen('3000', ()=> console.log('server started'));



//gói body-parser lấy dữ liệu từ form (POST) trong ejs
let parser = require('body-parser').urlencoded({extended:false});

//sử dụng gói ejs tạo trang html
app.set('view engine','ejs');
app.set('views','./views'); //views

app.use(express.static('public'));

app.get('/', parser, require('./controller/home/home'));

app.get('/place/:id', parser, require('./controller/place/get_place'));




