const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
    patientEmail: { type: String, required: true },
    filename: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model("sumit_wecare_sep_20_dev_reports", ReportSchema);