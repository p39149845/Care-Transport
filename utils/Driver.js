var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    carType: { type: String },
    carOption: { type: String },
  });

const driverSchema = new Schema({

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
        required: true
    },
    phnumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    car:[carSchema],
},{
    Collation: "Drivers"
}
)

module.exports = mongoose.model('Driver', driverSchema)