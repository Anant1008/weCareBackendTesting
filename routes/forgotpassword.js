const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/',async (req,res)=>{
    console.log(req.body);
    try{
    const user = new User(req.body);
    const post = await user.save();
    if(!post){
        throw Error("Something went wrong")
    }
    res.status(400).json(user);
    }catch(err){
        res.status(400).json({
            message : err
        })
    }
    res.send(post);
})


module.exports = router;