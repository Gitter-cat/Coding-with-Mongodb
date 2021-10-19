const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data', err => {
  if (err) return console.log(err);
  console.log('Connection secure');
});

const course = require('./item.model');