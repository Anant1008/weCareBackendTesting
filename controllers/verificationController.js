const verifyUser = require('../models/verification');
var nodemailer = require('nodemailer');


const generateOTP = async(req, res) => {
    // const email = req.body.email;
    // console.log(req.body);
    // console.log("Email : " + email);
    // await verifyUser.findOne({ emailId: email },
    //     async function (err, user) {
    //         console.log(user);
    //         if (user == null) {
    //             const code = generateMyOTP();
    //             console.log("OTP Generated is : " + code);
    //             var transporter = nodemailer.createTransport({
    //                 service: 'gmail',
    //                 auth: {
    //                     user: 'godriveb5@gmail.com',
    //                     pass: 'Wecareproject'
    //                 }
    //             });
    //             var mailOptions = {
    //                 from: 'godriveb5@gmail.com',
    //                 to: email,
    //                 subject: `Account Verification`,
    //                 text: `Your OTP is ${code}`
    //             };

    //             transporter.sendMail(mailOptions, function (error, info) {
    //                 if (error) {
    //                     console.log(error);
    //                 } else {
    //                     console.log('Email sent: ' + info.response);
    //                 }
    //             });
    //             //Add to the database
    //             const details = {
    //                 emailId: email,
    //                 otp: code,
    //                 isVerified: false
    //             }
    //             const user = new verifyUser(details);
    //             console.log(user);
    //             const newUser = user.save();
    //             if (!newUser) {
    //                 throw new Error;
    //             }
    //             res.json({ "message": "OTP sent and stored in database!" })

    //         }
    //         else
    const otp = generateMyOTP();
    return res.status(200).json({ "error": "Error" });
    //  })

}

function generateMyOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


const verifyOTP = async(req, res) => {
    // console.log(req.params.email);
    // console.log(req.params.otp);
    // await verifyUser.findOne({ emailId: req.params.email }, (err, user) => {
    //     if (user == null) {
    //         return res.json({ "error": "User not registered" });
    //     } else {
    //         if(user.isVerified == true){
    //             return res.json({"message": "User already verified!"})
    //         }
    //         else if (user.otp == req.params.otp) {

    //                 verifyUser.findByIdAndUpdate(user.id, { isVerified: true },
    //                     function (err, docs) {
    //                         if (err) {
    //                             console.log(err)
    //                         }
    //                         else {
    //                             console.log("Updated User : ", docs);
    //                         } })
    //                 return res.status(200).json({ message: "User Verified" })
    //         } else {
    return res.status(200).json({ "message": "Wrong OTP" });
    //         }
    //     }
    // })
}

module.exports = { generateOTP, verifyOTP }