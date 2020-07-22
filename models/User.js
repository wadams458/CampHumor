// User Schema

const mongoose = require('mongoose');
// require('mongoose-type-email')

const userSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        // type: mongoose.SchemaTypes.Email,
        type: String,
        required: true,
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;

