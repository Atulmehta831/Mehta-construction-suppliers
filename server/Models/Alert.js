
const mongoose = require ('mongoose');

const alertSchema = new mongoose.Schema({
    message:{
        type : String,
        required : true
    },
    date :{
        type : Date ,
        default : Date.now
    },
    active :{
        type : Boolean,
        default: true,
    }
});
module.exports = mongoose.model('Alert', alertSchema);