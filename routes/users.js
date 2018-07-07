const express=require('express')
const router=express.Router();
const User=require('../models/user')
router.post('/intro',function(req,res,next){
    let newUser = new User({
        name: req.body.name,
        description: req.body.description
    })

    User.addUser(newUser,(err,usr)=>{
        if(err)
        {
            res.json({sucess:false,msg:'failed to add user'})
        }else{
            res.json({sucess:true,msg:'User added to database'})
        }
    })
})


module.exports=router;