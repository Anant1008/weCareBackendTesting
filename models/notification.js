const mongoose = require("mongoose");

const notiSchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    endPoints: {
        endpoint: {
            type: String,
            required: false
        },
        expirationTime: {
            type: String,
            required: false
        },
        keys: {
            p256dh: {
                type: String,
                required: false
            },
            auth: {
                type: String,
                required: false
            }
        }
    }
});



const Notifications = mongoose.model('sumit_wecare_sep_20_dev_Notification', notiSchema);


module.exports = Notifications;