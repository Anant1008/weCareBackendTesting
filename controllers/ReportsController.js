const Report = require('../models/reports');
const fs = require('fs');
const path = require('path');

let email;

const uploadReport = async(req, res, next) => {
    email = req.params.email
    const existingReports = await Report.findOne({
        patientEmail: req.params.email,
    });
    if (existingReports) {
        console.log(existingReports.filename);

        let reqFiles = [];
        reqFiles = existingReports.filename;
        const url = req.protocol + "://" + req.get("host");
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + "/reports/" + req.files[i].filename);
        }
        console.log(reqFiles);
        Report.findByIdAndUpdate(existingReports._id, {
                patientEmail: req.params.email,
                filename: reqFiles,
            })
            .then((result) => {
                res.status(200).json({ message: "Updated report", data: result });
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log(req.files);
        console.log("Inside post");
        const reqFiles = [];
        const url = req.protocol + "://" + req.get("host");
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + "/reports/" + req.files[i].filename);
        }
        const newReport = new Report({
            // _id: new mongoose.Types.ObjectId(),
            patientEmail: email,
            filename: reqFiles,
        });
        newReport
            .save()
            .then((result) => {
                console.log(result);
                res.status(201).json({
                    message: "Done upload!",
                    reportUploaded: {
                        // _id: result._id,
                        patientEmail: result.patientEmail,
                        filename: result.filename,
                    },
                });
            })
            .catch((err) => {
                console.log(err),
                    res.status(500).json({
                        error: err,
                    });
            });
    }
};

const findReports = (req, res, next) => {
    Report.find().then((data) => {
        res.status(200).json({
            message: "Report list retrieved successfully!",
            users: data,
        });
    });
};

const getAllReports = async(req, res, next) => {
    try {
        const email = req.params.email;

        const record = await Report.findOne({ patientEmail: email });
        if (record) {
            let reportsArray = record.filename;
            return res.status(200).json({ reportsArray });
        } else {
            return res.status(200).json({ "message": "Email Doesn't Exist" });
        }

    } catch (error) {
        console.log("Inside Catch");
        return res.status(400).json({ "err": error });
    }
}

const deleteReport = async(req, res, next) => {
    try {
        const report = req.params.report;
        const email = req.params.email;

        const record = await Report.findOne({ patientEmail: email });
        if (record) {
            let reportsArray = record.filename;

            console.log("Before Filtering", reportsArray);

            // const index = reportsArray.findIndex( value => value.endsWith(email));
            reportsArray = reportsArray.filter(value => !value.endsWith(report));

            console.log("after Filtering", reportsArray);

            await Report.findByIdAndUpdate(record._id, {
                patientEmail: email,
                filename: reportsArray
            });

            fs.unlinkSync(path.join(__dirname, `../reports/${report}`), (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log("File Deleted Successfully");
                }
            });

            return res.status(200).json({ "message": "Deleted Successfully" });
        } else {
            return res.status(200).json({ "message": "Email Doesn't Exist" });
        }
    } catch (error) {
        console.log("Inside Catch");
        return res.status(400).json({ "err": error });
    }
}

const downloadReport = async(req, res, next) => {
    console.log(req.body);
    filepath = path.join(__dirname, '../reports') + '/' + req.body.filename;
    return res.sendFile(filepath);
}

module.exports = {
    deleteReport,
    getAllReports,
    downloadReport,
    uploadReport,
    findReports
};