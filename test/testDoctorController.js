const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../server');
const request = require('supertest');
const mongoose = require('mongoose');


describe('GET /doctorByEmail/:email', () => {

    it("should get doctor details by email id", (done) => {
        const email = "channa61gmail.com";


        request(server)
            .get(`/api/doctor/doctorByEmail/${email}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

    it("should update doctor details by email id", (done) => {
        const email = "channa61gmail.com";


        request(server)
            .patch(`/api/doctor/${email}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });


    it("should update doctor feedback by  id", (done) => {
        const email = "channa61gmail.com";
        const doctor_id = "5feabe453fe2eb"

        request(server)
            .patch(`/api/doctor/submitFeedback/${doctor_id}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

});

// describe('PATCH /:email', () => {

//     it("should get update details by email id", (done) => {
//         const email = "channa6190@gmail.com";


//         request(server)
//             .get(`/api/doctor/${email}`)
//             .expect(200, done)
//             .expect('content-type', /json/)

//     });

// });