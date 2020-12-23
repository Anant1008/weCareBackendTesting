const Patient = require('../models/patient');
const fs = require('fs');
const path = require('path');

const registerPatient = async(req, res, next) => {
    //     console.log(req.body);
    //     try {
    //         // await Patient.find({ 'email': (req.body.email).toLowerCase() }, async function(err, docs) {
    //         //     if (docs.length) {
    //         //         return res.json({ "message": "This Email is already Present" });
    //         //     } else {
    //         //         let patient = new Patient(req.body);
    //         //         patient.email = (patient.email).toLowerCase();
    //         //         let defaultImagePath = req.protocol + '://' + req.get("host") + "/images/" + "User-01.jpg";
    //         //         patient.profile = defaultImagePath;
    //         //         console.log(patient);
    //         //         await patient.save();
    //         //         // const dir1 = './images/patients/' + patient.email;
    //         //         // if (!fs.existsSync(dir1)) {
    //         //         //     fs.mkdirSync(dir1);
    //         //         // }
    //         //         // const dir2 = './reports/patients/' + patient.email;
    //         //         // if (!fs.existsSync(dir2)) {
    //         //         //     fs.mkdirSync(dir2);
    //         //         // }
    //         //         // const pathToFile = path.join(__dirname, "../images/User-01.jpg");
    //         //         // const pathToNewDestination = path.join(__dirname, "../images/patients/" + patient.email, "default-dp.png");
    //         //         // fs.copyFile(pathToFile, pathToNewDestination, function(err) {
    //         //         //     if (err) {
    //         //         //         throw err
    //         //         //     } else {
    //         //         //         console.log("Successfully copied and moved the file!");
    //         //         //     }
    //         //         // });
    return res.status(200).json({ "message": "Data Saved" });
    //         //     }
    //         //     // return flag;
    //         // });
    //     } catch (error) {
    //         console.log("hello from catch");
    //         return res.status(404).json({ error });
    //     }
};


module.exports = {
    registerPatient
}