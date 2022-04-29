const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );


const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const writeRouter = require('./routes/write');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/write', writeRouter);

app.listen(5000, () => {
  console.log('server started on port 5000');
});