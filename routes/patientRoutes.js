const express = require('express');
const patientRegistrationController = require('../controllers/PatientRegistrationController');
const AppointmentController = require('../controllers/AppointmentsController');
const slotsController = require('../controllers/slotsController');
//const reportsController = require('../controllers/ReportsController');
const router = express.Router();

const multer = require('multer');
const PatientByIdController = require('../controllers/PatientById');
const checkAuth = require('../middleware/check-auth');

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
//Registering the patient
router.post('/register', patientRegistrationController.registerPatient);

//Getting a certain patient by their id
router.get('/:email', checkAuth, PatientByIdController.patient);

//Updating patient details
router.patch('/:email', checkAuth, multer({ storage: storage }).single("image"), PatientByIdController.updatePatientDetails);

router.get('/getSlots/:docId/:date', slotsController.getSlots);
router.put('/updateSlot/:docId/:date/:index', slotsController.updateSlot);

//router.get('/allAppointments', AppointmentController.getAppointments);
router.post('/appointments', checkAuth, AppointmentController.postAppointment);

router.get('/appointments/:patient_id', AppointmentController.getAppointmentByPatientId);

router.get('/appointments/:doctor_id/:startDate/:endDate', checkAuth, AppointmentController.getAppointmentsWithinRange);

router.get('/mypatient/:email', PatientByIdController.getPatientByMailId);

module.exports = router;