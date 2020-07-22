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
<<<<<<< HEAD

=======
>>>>>>> f6365cbe3f39245669f96b37200e4dcdc84f61ae
module.exports = router;