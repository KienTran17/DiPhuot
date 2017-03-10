let express = require('express');
let app = express();
app.listen('1000', ()=> console.log('server started'));

let parser = require('body-parser').urlencoded({extended:false});

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));

app.get('/', parser, (req,res)=>{
    res.render('./front-end/index');
});