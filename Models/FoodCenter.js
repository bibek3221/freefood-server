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
    time: {
        required: true ,
        type: String
    },
    service: {
        required: true ,
        type: String
    },
    direction: {
        required: true ,
        type: String
    },
    Center_id:{
        require:true,
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('FoodCenter', dataSchema)