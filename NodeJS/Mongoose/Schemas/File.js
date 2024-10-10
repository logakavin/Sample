const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    Title:String,
    SubTitle:String,
    Filename:String,
    path:String
});

module.exports = mongoose.model('FileCollection',fileSchema);