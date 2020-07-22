const express = require ('express');
const router = express.Router();

//DB
const db = require('../models');

router.get('/', (req,res)=>{
    db.User.find({},(err,users)=>{
        if(err)console.log(err);
        res.render('users/user-index',{
            users: users,
        });
    })
});

router.post('/', (req,res)=>{
    db.User.create(req.body,(err,newUser)=>{
        if(err)console.log(err);
        console.log(newUser);
    })
    res.redirect('/');
});


module.exports = router;