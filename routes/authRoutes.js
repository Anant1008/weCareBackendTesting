const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController'); 
const verificationController = require('../controllers/verificationController');
const forgotPasswordController = require('../controllers/ForgotPasswordController');

router.post("/login/:type", loginController.login);   //Storing inside User database
router.post('/generateOTP', verificationController.generateOTP); //Generating OTP and sending OTP
router.get('/verify/:otp/:email', verificationController.verifyOTP); // Email Verification
router.post('/login',loginController.userLogin);    
router.get('/:email', forgotPasswordController.forgotPassword);     //forgotpassword sending email
router.patch('/:email', loginController.updatePassword);
module.exports =  router ;