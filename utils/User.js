var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    idnumber: {
        type: String,
        required:true
    },
    phnumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

},{
    Collation : 'Users'
}
)

module.exports = mongoose.model('User', userSchema)