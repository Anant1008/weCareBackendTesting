const Slots = require('../models/slots');

const getSlots = async(req, res, next) => {

    try {
        // const date = req.params.date;
        // const docId = req.params.docId;
        // const record = await Slots.findOne({ date: date, doctor_id: docId });
        // console.log(record);
        // console.log((!record));
        // if (!record) {
        //     const slots = [{
        //             slot: "10:00 A.M - 10:30 A.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "10:30 A.M - 11:00 A.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "11:00 A.M - 11:30 A.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "11:30 A.M - 12:00 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "5:00 P.M - 5:30 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "5:30 P.M - 6:00 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "6:00 P.M - 6:30 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "6:30 P.M - 7:00 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "7:00 P.M - 7:30 P.M",
        //             isAvailable: true
        //         },
        //         {
        //             slot: "7:30 P.M - 8:00 P.M",
        //             isAvailable: true
        //         }
        //     ];

        //     const temp = new Slots();
        //     temp.doctor_id = docId;
        //     temp.date = date;
        //     temp.slots = slots;
        //     await temp.save();

        return res.status(200).json({ "haha": "lala" });
        // } else {
        //     return res.status(200).json(record.slots);
        // }
    } catch (error) {
        console.log("Something wrong has happened...")
        return res.status(400).json({ "error": error });
    }
}

const updateSlot = async(req, res, next) => {
    try {
        // const date = req.params.date;
        // const docId = req.params.docId;
        // const record = await Slots.findOne({ date: date, doctor_id: docId });
        // console.log(record);
        // console.log((!record));
        // if (record) {
        //     const index = req.params.index;
        //     let temp = record;
        //     temp.slots[index].isAvailable = false;
        //     await Slots.findByIdAndUpdate(record._id, temp);

        //     return res.status(200).json({ "msg": "record updated", "ans": record.slots });
        // } else {
        return res.status(200).json({ "msg": "Record not found" });
        //}
    } catch (error) {
        console.log("Something wrong has happened...")
        return res.status(404).json({ "error": error });
    }
}

module.exports = {
    getSlots,
    updateSlot
}