const { find } = require('../models/appointment');
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

getAppointments = async(req, res) => {
    try {
        console.log("in get");
        const details = await Appointment.find();
        res.status(200).json(details);
    } catch (err) {
        console.log(err);
    }
};

postAppointment = async(req, res) => {

    const docObj = await Doctor.findById(req.body.doctor_id);
    const patObj = await Patient.findOne({ email: req.body.patient_id });
    console.log(docObj);
    const detail = new Appointment({
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        date: req.body.date,
        slot_timing: req.body.slot_timing,
        bookedTime: req.body.bookedTime,
        doctor_name: docObj.firstName + " " + docObj.lastName,
        clinic_name: docObj.clinicName,
        clinic_address: docObj.address.street + ", " + docObj.address.city + ", " + docObj.address.state + ", " + docObj.address.country + "- " + docObj.address.pincode,
        consultancy_fee: docObj.consultancyFee,
        patient_name: patObj.firstName + " " + patObj.lastName
    })
    try {
        const savedDetail = await detail.save();
        console.log(savedDetail);
        res.status(200).json(savedDetail);
    } catch (err) {
        console.log(err);
    }
};

getAppointmentByPatientId = async(req, res) => {
    var patientCount = 0;
    await Appointment.countDocuments({ patient_id: req.params.patient_id }, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            patientCount = count;
        }
    })
    if (patientCount >= 1) {
        try {
            const getAppointments = await Appointment.find({ patient_id: req.params.patient_id }).sort({ bookedTime: -1 })

            console.log(getAppointments);
            res.json(getAppointments)
        } catch (err) {
            console.log("patient does not have any appointments yet...!! ")
        }
    } else
        return res.status(400).json({ message: "invalid patientID!" })
};

getAppointmentsWithinRange = async(req, res) => {
    var doctorCount = 0;
    try {

        const docObj = await Doctor.findOne({ email: req.params.email });
        console.log("doc id " + docObj._id);

        doctorCount = await Appointment.countDocuments({ doctor_id: docObj._id }, (err, count) => {
            if (err) {
                console.log(err);
            } else {
                doctorCount = count;
                console.log("doc count " + doctorCount);
            }
        });

        if (doctorCount >= 1) {
            let result = [];
            console.log("inside if ", result);
            const date = new Date(req.params.date);
            console.log(date);
            const c1 = await countAppointments(date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "01", date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "08", docObj._id);
            console.log("c1 " + c1);
            const c2 = await countAppointments(date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "09", date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "16", docObj._id);
            console.log("c2 " + c2);
            const c3 = await countAppointments(date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "17", date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "24", docObj._id);
            console.log("c3 " + c3);
            const c4 = await countAppointments(date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "25", date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + "31", docObj._id);
            console.log("c4 " + c4);

            result.push(c1);
            result.push(c2);
            result.push(c3);
            result.push(c4);
            console.log(result);
            return res.json(result);
        } else {
            console.log("there is no appointment");
            return res.status(200).json([0, 0, 0, 0]);
        }
    } catch (error) {
        return res.status(400).json(error);
    }

};

countAppointments = async(start, end, id) => {
    try {
        startDate = start;
        endDate = end;
        console.log("hi inside try");
        console.log(startDate, endDate);
        const getRangedAppointments = await Appointment.find({
            doctor_id: id,
            bookedTime: {
                $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
                $lte: new Date(new Date(endDate).setHours(23, 59, 59))
            }
        }, (err, docs) => {
            console.log(docs.length);
            if (docs.length <= 0)
                return 0;
            else {
                return docs.length;
            }
        });

        return getRangedAppointments.length;
    } catch (err) {
        res.json({ err });
    }
}

getAppointmentByDoctorId = async(req, res) => {
    var doctorCount = 0;
    await Appointment.countDocuments({ doctor_id: req.params.doctor_id }, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            doctorCount = count;
        }
    })
    if (doctorCount >= 1) {
        try {
            const getAppointments = await Appointment.find({ doctor_id: req.params.doctor_id }).sort({ bookedTime: -1 })
            res.status(200).json(getAppointments)
        } catch (err) {
            console.log("doctor does not have any appointments yet...!! ")
        }
    } else
        return res.status(400).json({ message: "invalid doctorID!" })
};

getDoctorAppointmentsWithinRange = async(req, res) => {
    var doctorCount = 0;
    await Appointment.countDocuments({ doctor_id: req.params.doctor_id }, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            doctorCount = count;
        }
    })
    if (doctorCount >= 1) {
        startDate = req.params.startDate;
        endDate = req.params.endDate;
        const getAppointments = await Appointment.find({
            doctor_id: req.params.doctor_id,
            date: {
                $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
                $lte: new Date(new Date(endDate).setHours(23, 59, 59))
            }
        }).sort({ date: -1 });
        res.status(200).json(getAppointments);
    } else {
        res.status(400).json({ message: "no appointments is this date range" });
    }
}

// if(date.getMonth()===1)
//     const c3=await this.countAppointments(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+"17",date.getFullYear()+"-"+(date.getMonth()+1)+"-"+"29");
// else if(date.getMonth()===0 || date.getMonth()===2 || date.getMonth()===6 || date.getMonth()===7 || date.getMonth()===0)
module.exports = { getAppointments, getAppointmentByPatientId, postAppointment, getAppointmentsWithinRange, getAppointmentByDoctorId, getDoctorAppointmentsWithinRange }