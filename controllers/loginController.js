
const WeCareUser = require('../models/users');
const Patients = require('../models/patient');
const Doctors = require('../models/doctor');
const jwt = require('jsonwebtoken');
require('dotenv/config');


const updatePassword = async(req,res)=>{
    console.log("here")
  try {
    // console.log(req.body);
    // WeCareUser.updateOne(
    //   { emailId: req.params.email },
    //   {
    //     $set: {
    //       password: req.body.password
    //     }
    //   }
    // )
    //   .then((result) => {
    //     res.status(200).json({ message: "Update succesfully password" });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    res.status(200).json({message:"Updated succesfully"})
  } catch (err) {
    res.status(400).json(err);
  }

}

const login = async (req, res) => {
    
    const value = {
        emailId: req.body.email,
        password: req.body.password,
        typeOfUser: req.params.type,
    }

    console.log(value);
    const newPosts = new WeCareUser(value);
    console.log(newPosts);
    try {
        // const post = await newPosts.save();
        // console.log(post);
        // if (!post)
        //     throw error("something went wrong while saving");
        //res.status(201).json(post);
        res.status(201).json({message:'added user credentiles succesfully'});
    }
    catch (err) {
        res.status(400).json({ message: "error" });
    }
}

const userLogin = async function(req,res,next){
    
    // WeCareUser.findOne({emailId:req.body.email})
    //     .then(user =>{
    //         if(!user){
    //             return res.status(401).json({
    //                 message:"Auth failed"
    //             });
    //         }
    //         if(user.emailId ===req.body.email && user.password === req.body.password && user.typeOfUser === req.body.userType){
    //             const token = jwt.sign({ userId:user._id,email:user.emailId, userType:user.typeOfUser},
    //                  process.env.SECRET_TOKEN_KEY);
    //             res.status(200).json({
    //                 status:200,
    //                 token:token
    //             });
    //         }else{
    //             res.status(401).json({
    //                 message:"Password did not match"
    //             });
    //         }
    //     })
    const actualCredentails = {
      emailId :'paraschowdhary098@gmail.com',
      password : '1234',
      typeofUser : 'patient' 
    }

    if(req.body.email === actualCredentails.emailId && req.body.password === actualCredentails.password && req.body.userType === actualCredentails.typeofUser){
      res.status(200).json({status:200, token:"ajebce2561se"});
    }else{
      res.status(401).json({error:"Authentication failed"});
    }
}



module.exports = { login , userLogin, updatePassword};