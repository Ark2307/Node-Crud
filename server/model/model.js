const mongoose = require('mongoose'); 
const Email = require('mongoose-type-email');

var schemaDB = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:Email,
        required:true,
        unique:true
    },
    gender:String,
    status:String

})

const UserDB = mongoose.model('userdb',schemaDB);
module.exports= UserDB;