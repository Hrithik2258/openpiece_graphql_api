// Sword.js
const mongoose = require('mongoose');

const swordSchema = new mongoose.Schema({
  name: {
    type: String ,
    required: true
  },
  grade: String,
  owner: String
});

const Sword = mongoose.model('Sword', swordSchema);

module.exports = Sword;
