const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/TFTF';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(()=> console.log('MongoDB connected successfully'))
    .catch((err)=> console.log(`MongoDB connection error: ${err}`));

    module.exports = {
        User: require('./User'),
    };

