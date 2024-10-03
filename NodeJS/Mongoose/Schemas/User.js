const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('UserCollections',userSchema);