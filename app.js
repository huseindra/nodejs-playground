//import module http
const http = require('http');

//import module express.js
const express  = require('express');

//import module body parser
const bodyParser  = require('body-parser');


//declaration app variable to call express
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next) => {
    res.send('<form action="product" method="POST"> <input type="text" name="title"><button type="submit">add</button>');
});

app.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/'); 
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hello from express</h1>')
});

app.listen(5000);