const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    typeOfUser: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('sumit_wecare_sep_20_dev_WeCareUser', UsersSchema);