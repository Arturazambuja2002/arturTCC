const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bancotcc')
mongoose.Promise = global.Promise;

module.exports = mongoose;