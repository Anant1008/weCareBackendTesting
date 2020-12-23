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

//     it("should not get all appointments of particular patient", (done) => {
//         const patient_id = "channa6190gmail.com";

//         request(server)
//             .put(`/api/patient/appointments/${patient_id}`)
//             .expect(400, done)
//             .expect('content-type', /json/)

//     });

// });