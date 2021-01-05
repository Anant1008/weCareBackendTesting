const Doctor = require('../models/doctor');
const fs = require('fs');
const path = require('path');

const registerDoctor = async(req, res, next) => {
    // try {
        // await Doctor.find({ 'email': (req.body.email).toLowerCase() }, async function(err, docs) {
        //     if (docs.length) {
        //         return res.json({ "message": "This Email is already Present" });
        //     } else {
        //         let doctor = new Doctor(req.body);
        //         doctor.email = (doctor.email).toLowerCase();
        //         let defaultImagePath = req.protocol + '://' + req.get("host") + "/images/" + "User-01.jpg";
        //         doctor.profile = defaultImagePath;
        //         doctor.slots = ["10:00 A.M - 10:30 A.M",
        //             "10:30 A.M - 11:00 A.M",
        //             "11:00 A.M - 11:30 A.M",
        //             "11:30 A.M - 12:00 P.M",
        //             "5:00 P.M - 5:30 P.M",
        //             "5:30 P.M - 6:00 P.M",
        //             "6:00 P.M - 6:30 P.M",
        //             "6:30 P.M - 7:00 P.M",
        //             "7:00 P.M - 7:30 P.M",
        //             "7:30 P.M - 8:00 P.M",
        //         ]
        //         // doctor.rating.push({
        //         //     "patient_email" : "abc@axyz.com",
        //         //     "star": 3
        //         // });
        //         let obj = {};
        //         obj["patient_email"] = "abc@xyz.com"
        //         obj["star"] = 3;
        //         doctor.rating.push(obj);
        //         console.log(obj);
        //         console.log(doctor.rating);
        //         console.log(doctor);
        //         await doctor.save();
        //         // const dir = './images/doctors/' + doctor.email;
        //         // if (!fs.existsSync(dir)) {
        //         //     fs.mkdirSync(dir);
        //         // }

        //         // // const dirForReports = './reports/doctors/' + doctor.email;
        //         // // if (!fs.existsSync(dirForReports)) {
        //         // //     fs.mkdirSync(dirForReports);
        //         // // }

        //         // const pathToFile = path.join(__dirname, "../images/surgeon-pngrepo-com.png");
        //         // const pathToNewDestination = path.join(__dirname, "../images/doctors/" + doctor.email, "default-dp.png");
        //         // fs.copyFile(pathToFile, pathToNewDestination, function(err) {
        //         //     if (err) {
        //         //         throw err
        //         //     } else {
        //         //         console.log("Successfully copied and moved the file!");
        //         //     }
        //         // });
                return res.json({ "message": "Data Saved" });
            // }
            // return flag;
        // });
    // } catch (error) {
    //     return res.status(404).json({ "error": error });
    // }
};

getDoctorById = async(req, res) => {
    // var doctorCount = 0;
    // await Doctor.countDocuments({ _id: req.params.doctor_id }, (err, count) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         doctorCount = count;
    //     }
    // })
    // if (doctorCount >= 1) {
        // try {
            // const getDoctor = await Doctor.findById({ _id: req.params.doctor_id })
            // console.log(getDoctor);
            res.status(200).json(getDoctor)
    //     } catch (err) {
    //         console.log("patient does not have any appointments yet...!! ")
    //     }
    //  } else
    //     return res.status(400).json({ message: "invalid doctorID!" })
};


getDoctors = async(req, res) => {
    // try {
        // const details = await Doctor.find({});
        res.status(200).json({message : "Passed"});
    // } catch (err) {
    //     res.status(400).json({message : 'error'});
    // }
};

const getDoctor = async(req, res) => {
    //  try {
        // const doctor = await Doctor.findById(req.params.id);
        // console.log(doctor);
        return res.status(200).json({message : 'passed'});
    //  } catch (error) {
        // console.log(error);
        // return res.status(400).json({ message : 'Error' });
    //  }
    // return res.status(400).json({message : error });
}

module.exports = {
    registerDoctor,
    getDoctorById,
    getDoctors,
    getDoctor
}