const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    cities: {
        type: [{
            city_name: {
                type: String,
                required: true
            }
        }],
        required: true
    }
});



const Cities = mongoose.model('sumit_wecare_sep_20_dev_Cities', citySchema);


module.exports = Cities;