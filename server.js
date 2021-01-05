const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routes/authRoutes');
const patientRouter = require('./routes/patientRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const addressRouter = require('./routes/addressRoutes');
const reportRouter = require('./routes/reportRoutes');
const slotsController = require('./controllers/slotsController');
const notiRouter = require('./routes/notificationRoutes');
const PORT = process.env.PORT || 3000;


const CONN_URI = 'mongodb://orchardmongo.eastus.cloudapp.azure.com:27017/Orchard1';

// mongoose.connect(CONN_URI, {
//         auth: {
//             user: "mongoUser1",
//             password: "User1pwd"
//         },
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Connected to db!');
//         }
//     });


app.use(cors());
app.use(bodyParser.json());


app.use('/api/auth', authRouter);
app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/address', addressRouter);
app.use('/api/reports', reportRouter);
app.use('/api/notification', notiRouter);
app.use("/images", express.static(path.join("images")));
app.use("/reports", express.static(path.join("reports")));


//app.get('/api/patient/getSlots/:docId/:date', slotsController.getSlots);
app.listen(PORT, () => {
    console.log(`Server started running at port ${PORT}`);
})


module.exports = app;



//db.collection1.insert(db.collection1_backup.find({},{_id:0}).toArray());

//const Cities = require('./models/cityModel');
// const userRoutes = require('./routes/userRoutes');
// const loginRouter = require('./routes/login');
// const verifyRouter = require('./routes/verification');
// const forgotPasswordRoute = require('./routes/forgotpassword');
// const patientRoutes = require('./routes/PatientRegistrationRoutes');
// const doctorRoutes = require('./routes/DoctorRegistrationRoutes');
// const patientIdRouter = require('./routes/getPatientById');
// // const patientDetials = require('./routes/PatientDetails');
// const patientLayoutRouter = require('./routes/patientLayoutRoutes');
// const doctorLayoutRouter = require('./routes/doctorLayoutRoutes');
// const AppointmentRouter = require('./routes/Appointments');
// const doctorRouter = require('./routes/doctorRoutes');






// app.use('/patient', patientIdRouter);
// app.use('/doctor', doctorRouter);

// app.post('/patientRegistration', patientRoutes);
// app.use('/api/auth', userRoutes);
// app.use('/doctorRegistration', doctorRoutes);
// app.get('/:email', forgotPasswordRoute);
// app.post('/generateOTP', verifyRouter);
// app.get('/verify/:otp/:email', verifyRouter);
// app.post('/login/:type', loginRouter);
// //app.use('/patient/:id', patientIdRouter);
// app.use('/patientDetail', patientLayoutRouter);
// app.use('/doctorDetail', doctorLayoutRouter);

// const MIME_TYPE_MAP = {
//     'image/png': 'png',
//     'image/jpeg': 'jpg',
//     'image/jpg': 'jpg'
// };


// app.use('/patient/:id', patientIdRouter);
// app.use('/api', AppointmentRouter);


// app.get('/getStates', (req, res) => {
//     fetch('https://www.universal-tutorial.com/api/states/india', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbmFudHMxMDA4QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6ImtjM0MwMUgwVThBUUdHaGJFTW8zRXZBMWZkNmFhaGp6OEJwSHI2aW00TkRVWG1ZeUQ3TXF2cE9LQ1dQMTEzZE1jZnMifSwiZXhwIjoxNjA3NzAyMDkxfQ.iC-RTEKyb04uKyOz7FF_s4qdm7MNu5-o8LohsV1d0XM",
//             "Accept": "application/json"
//         },
//     }).
//     then(response => response.json()).
//     then(data => {
//         //console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i]);
//             fetch('https://www.universal-tutorial.com/api/cities/' + data[i].state_name, {
//                 method: 'GET',
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbmFudHMxMDA4QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6ImtjM0MwMUgwVThBUUdHaGJFTW8zRXZBMWZkNmFhaGp6OEJwSHI2aW00TkRVWG1ZeUQ3TXF2cE9LQ1dQMTEzZE1jZnMifSwiZXhwIjoxNjA3NzAyMDkxfQ.iC-RTEKyb04uKyOz7FF_s4qdm7MNu5-o8LohsV1d0XM",
//                     "Accept": "application/json"
//                 },
//             }).
//             then(response => response.json()).
//             then(async(d) => {
//                 console.log(d);
//                 const cities = new Cities();
//                 cities.state = data[i].state_name;
//                 cities.cities = d;
//                 await cities.save();
//                 res.json({ "msg": "done" });
//             })
//         }
//     });
// });