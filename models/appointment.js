const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    patient_id: {
        type: String,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    slot_timing: {
        type: String,
        required: true
    },
    bookedTime: {
        type: Date,
        default: Date.now
    },
    doctor_name: {
        type: String,
        required: true
    },
    clinic_name: {
        type: String,
        required: true
    },
    clinic_address: {
        type: String,
        required: true
    },
    consultancy_fee: {
        type: Number,
        required: true
    },
    patient_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('sumit_wecare_sep_20_dev_appointments', appointmentSchema);