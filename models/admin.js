const mongoose = require('mongoose');


const dataModeling = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name data required']
    },
    email : {
        type : String,
        required : [true, 'email data required'],
        unique : true,
    },
    call : {
        type : String,
        required : [true, 'Call data required']
    },
    username : {
        type : String,
        required : [true, 'username data required'],
        unique : true,
        lowercase : true,
    },
    location : {
        type : String,
        required : false,
        default : "Dhaka"
    },
    skill : {
        type : String,
        required : [true, 'skill data required']
    },
    password : String
},{
    timestamps : true
})

module.exports = mongoose.model('admins', dataModeling)