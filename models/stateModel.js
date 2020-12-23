const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
    state_name: {
        type: String,
        required: true
    }
});

const States = mongoose.model('sumit_wecare_sep_20_dev_States', stateSchema);

module.exports = States;