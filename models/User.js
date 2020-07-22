// User Schema

const mongoose = require('mongoose');
<<<<<<< HEAD
=======
// require('mongoose-type-email')
>>>>>>> master

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
<<<<<<< HEAD
=======
        // type: mongoose.SchemaTypes.Email,
>>>>>>> master
        type: String,
        required: true,
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;

