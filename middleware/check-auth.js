const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = (req,res,next)=>{
    try{
        console.log("i am in middleware");
        const token = req.headers.authorization;
        jwt.verify(token,process.env.SECRET_TOKEN_KEY);
        next();
    } catch(error){
        res.status(401).json({message:"Auth failed"});
    }
   
}