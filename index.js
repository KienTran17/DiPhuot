const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');

let getArrayUpload = require('./upload.js');
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
app.listen('3000', () => console.log('server started'));


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

app.post('/register', parser, require('./controller/user/register'));

app.post('/saveuser', parser, require('./controller/user/saveuser'));

app.get('/logout', require('./controller/user/logout'));

app.get('/getplace/:token/:idUser', require('./controller/api/getPlace'));
app.get('/getjourney/:token/:idUser', require('./controller/api/getJourney'));
app.get('/getuser/:token', require('./controller/api/getUser'));

app.get('/createplace', parser, require('./controller/user/userCreatePlace'));

app.post('/file-upload-batch/2', parser, (req,res)=>{
     getArrayUpload("image")(req, res, function(err){
    if(err){
      res.send(''+err);
    }else{
    
      res.send('0');
    }
  })
});

app.post('/createplace', parser, (req,res)=>{
    getArrayUpload("image")(req, res, function(err){
    if(err){
      res.send(''+err);
    }else{
      if(req.session.filename)
      res.send(req.session.filename);
      else res.send(JSON.stringify(req.files));
    }
  })
    
});
// app.post("/upload",  fn);

// http.createServer(app).listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });