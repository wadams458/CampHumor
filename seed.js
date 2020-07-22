const mongoose = require('mongoose');
const db = require('./models');

db.User.deleteMany({},(err,deletedStuff)=>{
    if(err)console.log(err);
    console.log(deletedStuff);
    db.User.create({
        firstName: "John",
        lastName: "Doe",
        email: "j@gmail.com",
    }, (err,createdUser)=>{
        if(err)console.log(err);
        console.log(createdUser);
    })
});