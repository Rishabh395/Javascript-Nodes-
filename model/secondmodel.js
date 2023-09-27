const mongoose = require('mongoose');

const secondschema = new mongoose.Schema({
      name:String, 
      sex:String, 
      GodPray:String
});

const secondone = mongoose.model('secndschema'  , secondschema);

module.exports = secondone;