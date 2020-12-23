const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('sumit_wecare_sep_20_dev_WeCareNews', NewsSchema);