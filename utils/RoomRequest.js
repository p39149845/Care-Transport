var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoomSchema = new Schema({

    carType: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },

},{
    Collation : 'RoomRequest'
}
)

module.exports = mongoose.model('RoomRequest', RoomSchema)