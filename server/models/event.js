var mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Event = new Schema({
    contents: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: 0,
    },
    date: {
        created : {type:Date, default:Date.now},
        edited : {type:Date, default:Date.now}
    },
    is_edited: {
        type: Boolean,
        default:false
    }
})
 
module.exports = mongoose.model('event',Event);