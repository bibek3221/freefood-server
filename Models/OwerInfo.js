const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Center_name: {
        required: true,
        type: String
    },
    Center_address: {
        required: true,
        type: String
    },
    email:{
        require : true,
        type: String,
        unique: true
    },
    pincode:{
        require: true,
        type:Number
    },
    password:{
        require:true,
        type:String
    },
    mobile:{
        require:true,
        type:number
    },
    profile_pic :{
        require:true,
        type:String
    },
    service:{
        require:true,
        type:String
    },
    Center_id:{
        require:true,
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('OwerInfo', dataSchema)