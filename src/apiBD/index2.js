const express = require('express');
const bodyParser = require('express');
const User =require('../apiBD/app/models/User.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/index')(app);


app.listen(4000);
