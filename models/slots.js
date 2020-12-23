const mongoose = require('mongoose');

const slotsSchema = mongoose.Schema({
    doctor_id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    slots: [{
        slot: {
            type: String,
            required: true
        },
        isAvailable: {
            type: Boolean,
            required: true
        }
    }]
});

module.exports = mongoose.model('sumit_wecare_sep_20_dev_slots', slotsSchema);