var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        default: 20
    },
    address: [{
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        pincode: Number
    }]
})

module.exports = mongoose.model('people', person)