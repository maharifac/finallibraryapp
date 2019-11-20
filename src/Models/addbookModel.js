const mongoose = require('mongoose');
const addbookschema = new mongoose.Schema(
    {
        booktitle: {
            type: String,
            required: true
        },
        authorname: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        imagename:{
            type:String,
            required:true
        },
    })
var addbookModel = mongoose.model('books', addbookschema);
module.exports = { addbookModel };