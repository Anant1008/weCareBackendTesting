const express = require('express');
const multer = require('multer');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const DoctorController = require('../controllers/DoctorController');
const doctorRegistrationController = require('../controllers/DoctorRegistrationController');
const AppointmentController = require('../controllers/AppointmentsController');


const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        console.log(isValid);
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});

router.get('/doctorByEmail/:email', DoctorController.getDoctorDetailsById); //Fetching details for edit profile
router.post('/register', doctorRegistrationController.registerDoctor);
router.get('/doctors', doctorRegistrationController.getDoctors);
router.get('/:doctor_id',  doctorRegistrationController.getDoctorById);
router.get('/getDoctor/:id',  doctorRegistrationController.getDoctor);
router.patch('/:email', checkAuth, multer({ storage: storage }).single("image"), DoctorController.updateDoctorDetails); //Updating details for doctor's edit profile
router.get('/getDoctor/:id', checkAuth, doctorRegistrationController.getDoctor);
router.patch('/:email', multer({ storage: storage }).single("image"), DoctorController.updateDoctorDetails); //Updating details for doctor's edit profile

// router.patch('/submitFeedback/:email', checkAuth, DoctorController.updateDoctorFeedback); //Updating doctor ratings

router.get('/getAppointmentCounts/:email/:date', AppointmentController.getAppointmentsWithinRange);
router.patch('/submitFeedback/:doctor_id', DoctorController.updateDoctorFeedback); //Updating doctor ratings
router.get('/appointments/:doctor_id', AppointmentController.getAppointmentByDoctorId);
router.get('/appointments/:doctor_id/:startDate/:endDate', AppointmentController.getDoctorAppointmentsWithinRange);


module.exports = router;