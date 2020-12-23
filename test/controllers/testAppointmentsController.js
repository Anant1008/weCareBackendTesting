// const expect = require('chai').expect;
// const chaiHttp = require('chai-http');
// const appointments = require('../../controllers/AppointmentsController');
// const server = require('../../server');
// const request = require('supertest');
// const mongoose = require('mongoose');


// describe('GET /api/patient/appointments/:patient_id', () => {

//     it("should get all appointments of particular patient", (done) => {
//         const patient_id = "sanhitasen1997@gmail.com";

//         request(server)
//             .get(`/api/patient/appointments/${patient_id}`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });

//     it("should post appointment of patient", (done) => {

//         request(server)
//             .post(`/api/patient/appointments`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });

//     it("should get appointment within a given date range", (done) => {
//         const doctor_id = "channa6190gmail.com";
//         const startDate = "2020-12-15";
//         const endDate = "2020-12-21";

//         request(server)
//             .get(`/api/doctor/appointments/${doctor_id}/${startDate}/${endDate}`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });

//     it("should get appointment by doctor id", (done) => {
//         const doctor_id = "channa6190gmail.com";

//         request(server)
//             .get(`/api/doctor/appointments/${doctor_id}`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });


//     it("should get doctor appointment within a given date range", (done) => {
//         const doctor_id = "channa6190gmail.com";
//         const startDate = "2020-12-15";
//         const endDate = "2020-12-21";

//         request(server)
//             .get(`/api/doctor/appointments/${doctor_id}/${startDate}/${endDate}`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });

// });