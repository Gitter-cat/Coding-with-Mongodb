const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: String,
  index: Number,
  rank: Number,
});

mongoose.model('item', schema);