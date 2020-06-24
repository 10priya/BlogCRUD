var mongoose  = require('mongoose');

//Create Schema
var userRegSchema = mongoose.Schema({
    userName   :{
        type : String
    },
    password    :{
        type : String,
    },
    DOB :{
        type :Date
    }
});

//Create Model
module.exports  = mongoose.model('userRegistration',userRegSchema); 