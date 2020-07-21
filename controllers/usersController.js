const express = require ('express');
const router = express.Router();

//DB
const db = require('../models');

router.get('/', (req,res)=>{
    res.render('users/user-index');
});


module.exports = router;