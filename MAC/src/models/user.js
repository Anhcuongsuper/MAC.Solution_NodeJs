const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    facebookID: {
        type: String
    },
    googleID: {
        type: String
    },
    authType: [{
        type: String,
        enum: ['local, facebook, google'],
        default: 'local'
    }]
})
const User = mongoose.model('User', UserSchema)
module.exports = User