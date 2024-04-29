// Arc.js
const mongoose = require('mongoose');

const arcSchema = new mongoose.Schema({
  name: {
    type: String ,
    required: true
  },
mainvillan:String
});

const Arc = mongoose.model('Arc', arcSchema);

module.exports = Arc;
