// Arc.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String ,
    required: true
  },
bounty:{
    type:Number ,
    required: true
},
group:String,
devilfruits:String

});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
