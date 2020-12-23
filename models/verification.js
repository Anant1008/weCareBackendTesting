const mongoose = require("mongoose");

const VerifySchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('sumit_wecare_sep_20_dev_Verifications', VerifySchema);