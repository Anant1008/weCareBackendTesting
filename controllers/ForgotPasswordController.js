const express = require('express');
const User = require('../models/users');
var nodemailer = require('nodemailer');

const forgotPassword = async(req, res) => {
    // console.log(req.params);
    // const email = req.params.email;
    // console.log(email);
    // await User.findOne({ emailId: email },
    //     async function(err, user) {
    //         console.log(user);
            // if (user == null) {
              //  return res.status(400).json({ "error": "Error" });
            // } else {
                // console.log(user);
                // var transporter = nodemailer.createTransport({
                //     service: 'gmail',
                //     auth: {
                //         user: 'godriveb5@gmail.com',
                //         pass: 'Wecareproject'
                //     }
                // });
                // var mailOptions = {
                //     from: 'godriveb5@gmail.com',
                //     to: email,
                //     subject: `Password Recovery`,
                //     text: `Your password is ${user.password}`
                // };

                // transporter.sendMail(mailOptions, function(error, info) {
                //     if (error) {
                //         console.log(error);
                //     } else {
                //         console.log('Email sent: ' + info.response);
                //     }
                // });
                return res.status(200).json({ "message": "Password has been sent" })
            // }
        // });

}

module.exports = { forgotPassword };