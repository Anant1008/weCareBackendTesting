const Patients = require('../models/patient');
//const Patients = require('../models/patient');

const patient = async(req, res) => {
    try {
        const post = await Patients.findOne({ email: req.params.email });
        console.log(post);
        if (!post)
            throw error("No users found");
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ message: "error" });
    }
}

const updatePatientDetails = (req, res, next) => {

    let profile;
    let address;
    if (req.file) {
        const url = req.protocol + '://' + req.get("host");
        profile = url + "/images/" + req.file.filename;
        address = {
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            street: req.body.street,
            pincode: req.body.pincode

        }
    } else {
        profile = req.body.profile;
        address = req.body.address;
    }

    try {
        Patients.updateOne({ email: req.params.email }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
                age: req.body.age,
                height: req.body.height,
                weight: req.body.weight,
                bloodGroup: req.body.bloodGroup,
                gender: req.body.gender,
                address: {
                    street: address.street,
                    city: address.city,
                    state: address.state,
                    country: address.country,
                    pincode: address.pincode
                },
                profile: profile
            }
        }).then(result => {
            res.status(200).json({ message: "Update succesfully patient profile" })
        }).catch(err => {
            console.log(err);
        })
    } catch (err) {
        console.log("error in updating");
        res.status(401).json(err);
    }

}

const getPatientByMailId = async(req, res) => {
    try {
        const post = await Patients.findOne({ email: req.params.email });
        // const post = await Doctor.findOne(req.params.email);
        if (!post) throw error("No users found");
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ message: "error" });
    }
};

module.exports = { patient, updatePatientDetails, getPatientByMailId };