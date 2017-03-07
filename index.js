let express = require('express');
let app = express();
app.listen('3000', ()=> console.log('server started'));

let parser = require('body-parser').urlencoded({extended:false});

app.set('view engine','ejs');
app.set('views','./views');