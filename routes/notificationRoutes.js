const express = require('express');
const notificationController = require('../controllers/NotificationController');
const router = express.Router();

router.post('/subscribe', notificationController.saveEndPoint);
router.get('/sendNoti', notificationController.sendNotification);

module.exports = router;