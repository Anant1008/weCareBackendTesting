const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    clinicName: { type: String, required: true },
    licenseNo: { type: Number, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    experienceInYrs: { type: Number, required: false },
    qualifications: [{ type: String, required: true }],
    speciality: { type: String, required: true },
    consultancyFee: { type: Number, required: true },
    address: {
        type: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pincode: { type: Number, required: true }
        },
        required: true
    },
    slots: [{ type: String, required: false }],
    rating: [{
                patient_email: { type: String, required: true, default: 'abc@xyz.com'},
                star: { type: Number, required: true, default : 3 }
            }],

    profile: { type: String, required: false }
});

module.exports = mongoose.model("sumit_wecare_sep_20_dev_doctors", DoctorSchema);