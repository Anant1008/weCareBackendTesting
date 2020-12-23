const mongoose = require('mongoose');

// const patientAddressSchema = new mongoose.Schema({
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     country: { type: String, required: true },
//     pincode: { type: Number, required: true }
// });

const PatientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: false },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: false },
    weight: { type: Number, required: false },
    bloodGroup: { type: String, required: false },
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
    profile: { type: String, required: false }
});

const Patient = mongoose.model("sumit_wecare_sep_20_dev_Patients", PatientSchema);

module.exports = Patient;