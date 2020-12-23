const { update } = require("../models/doctor");
const Doctor = require("../models/doctor");
//const Patients = require('../models/patient');

const getDoctorDetailsById = async(req, res) => {
    try {
        // const post = await Doctor.findOne({ email: req.params.email });
        // console.log(post);
        // // const post = await Doctor.findOne(req.params.email);
        // if (!post) throw error("No users found");
        res.status(200).json({ message: "passed" });
    } catch (err) {
        res.status(400).json({ message: "error" });
    }
};

const updateDoctorDetails = (req, res, next) => {
    // console.log("Inside");
    // let profile;
    // let address;
    // if (req.file) {
    //   console.log(req.file);
    //   const url = req.protocol + "://" + req.get("host");
    //   profile = url + "/images/" + req.file.filename;
    //   address = {
    //     street : req.body.street,
    //     city : req.body.city,
    //     state : req.body.state,
    //     country : req.body.country,
    //     pincode : req.body.pincode
    //   };
    // } else {
    //   profile = req.body.profile;
    //   address = req.body.address;
    // }

    try {
        // console.log(req.body);
        // Doctor.updateOne(
        //   { email: req.params.email },
        //   {
        //     $set: {
        //       firstName: req.body.firstName,
        //       lastName: req.body.lastName,
        //       email: req.body.email,
        //       phone: req.body.phone,
        //       password: req.body.password,
        //       age: req.body.age,
        //       gender: req.body.gender,
        //       experienceInYrs: req.body.experience,
        //       consultancyFee: req.body.consultancyFee,
        //       speciality: req.body.speciality,
        //       qualifications : req.body.qualifications,
        //       profile: profile,
        //       address :{
        //         street : address.street,
        //         city : address.city,
        //         state : address.state,
        //         country : address.country,
        //         pincode : address.pincode
        //       }
        //     },
        //   }
        // )
        //   .then((result) => {
        res.status(200).json({ message: "Update succesfully Docotr profile" });
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
    } catch (err) {
        // console.log("error in updating");
        res.status(401).json(err);
    }

    // res.json("Backend code need to be updated");
};

const updateDoctorFeedback = async(req, res, next) => {
    // console.log("Inside feedback");
    // let update = false;
    // const doc = await Doctor.findOne({ _id: req.params.doctor_id });
    // console.log(doc);
    // const ratings = doc.rating;
    // // console.log(ratings);
    // // console.log("Rating email : " + ratings[1].patient_email);
    // // console.log("Req body email : " + req.body.patient_email);
    // let alreadyPresentId;
    // let alreadyPresentRating;
    // let updatedRating;
    // for (let i = 0; i < ratings.length; i++) {
    //   if (ratings[i].patient_email === req.body.patient_email) {
    //     // console.log("Already present");
    //     update = false;
    //     alreadyPresentId = ratings[i]._id;
    //     alreadyPresentRating = ratings[i];
    //     updatedRating = ratings[i];
    //     updatedRating.star = req.body.rating;
    //     console.log("Already present id: " + alreadyPresentId);
    //     break;
    //   } else {
    //     update = true;
    //   }
    // }
    try {
        // if (update === true) {
        //   Doctor.updateOne(
        //     { _id: req.params.doctor_id },

        //     {
        //       $push: {
        //         rating: {
        //           patient_email: req.body.patient_email,
        //           star: req.body.rating,
        //         },
        //       },
        //     }
        //   )
        //     .then((result) => {
        //       res.status(200).json({ message: "Updated doctor feedback" });
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // } else {
        res.status(200).json({ message: "Feedback already present, feedback to be updated..." });

        //   Doctor.updateOne(
        //     { _id: req.params.doctor_id, "rating._id": alreadyPresentId },
        //     { $set: { "rating.$.star": req.body.rating } }
        //   ).then((err, docs) => {
        //     if (err) console.log(err);
        //     else console.log("updated user", docs);
        //   });
        // }
    } catch (err) {
        // console.log("error in updating");
        res.status(401).json(err);
    }
};

module.exports = {
    getDoctorDetailsById,
    updateDoctorDetails,
    updateDoctorFeedback,
};