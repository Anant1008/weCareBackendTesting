const webpush = require('web-push');
const path = require('path');
const Noties = require('../models/notification');
const publicKey = 'BPwyaF6zXStiKKRfKpTlm-RHJ4pbgIl0L33AgvyyXSRaWFlJKA3zTyqXh0xv8DFs8ITQVfCDYM9iu3P3TU_SSvU';
const privateKey = 'sckqBNQuax8pOjD8JF6ZhSf5hY4HObuKuiejRNA8ZYk';


const saveEndPoint = async(req, res, next) => {

    try {
        console.log(req.body);
        console.log(req.body.emailId);
        const record = await Noties.findOne({ emailId: req.body.emailId });
        if (record) {
            const temp = record
            temp.endPoints = req.body.endPoints;
            await Noties.findByIdAndUpdate(record._id, temp);
        } else {
            const data = new Noties(req.body);
            await data.save();
        }
        return res.status(200).json({ msg: "endpoints saved!!" });
    } catch (error) {
        console.log("inside catch");
        return res.status(400).json({ error });
    }
};

const sendNotification = async(req, res, next) => {
    try {
        webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);
        const data = await Noties.find();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const payload = {
                notification: {
                    data: { url: 'https://sumit-wecare-sep-20.azurewebsites.net/' }, //"any",
                    title: "New Doctor has been registered",
                    body: "New Doctor has been freshly registered on our website. Do check out their profile and book an appointment with them according to your needs.",
                    icon: "https://sumit-wecare-sep-20.herokuapp.com/images/wecare-96.png",
                    vibrate: [100, 50, 100],
                },
            };
            console.log(data[i].endPoints);
            webpush.sendNotification(data[i].endPoints, JSON.stringify(payload));
        }
        return res.json({ msg: "Notification sent" });
    } catch (error) {
        console.log("inside catch");
        return res.status(400).json({ error });
    }
};

module.exports = {
    sendNotification,
    saveEndPoint
}



//console.log(webpush.generateVAPIDKeys());
// const sub = {
//     endpoint: "https://fcm.googleapis.com/fcm/send/c7VbJcxTkrQ:APA91bGc8KNQ0GwE5i4WX2OEydQBl7BbFyvN7EoMyck50fiRJPcbz5I3pfsqhmlOf09L9QqK23tgxd9Ee7xm0syqjyNyBauzc3LQTBgxR5nyBOO4HDbb3qr30BOf2vDTCNUDmQ5igiZG",
//     expirationTime: null,
//     keys: {
//         p256dh: "BG_kODxWB9r3SXFbcnz8HmtlijO2beI9dCV8TfUDpgw8R6uN-c6LdqURM5LhjPPcGah6pqkHiShz-pJcpxdYpro",
//         auth: "Nu4pNUL8rcifwehxwdHLlg"
//     }
// }