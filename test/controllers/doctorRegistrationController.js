
const doctorController = require('../../controllers/DoctorController')
const slots = require('../../controllers/slotsController');
const server = require('../../server');
const request = require('supertest');


describe('GET /api/doctor', () => {

    it("should get details of a particular doctor ", (done) => {
        const docId = "channa6190@gmail.com";
        request(server)
            .get(`/api/doctor/${docId}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });
    

    it("should get details of a particular doctor ", (done) => {
        const doctorId = "channa6190@gmail.com";
        request(server)
            .get(`/api/doctor/getDoctor/${doctorId}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });
    

    it("should get details of all doctors ", (done) => {
        request(server)
            .get(`/api/doctor/doctors`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

    it("should register the doctor details ", (done) => {
         request(server)
             .post(`/api/doctor/register`)
             .expect(200, done)
             .expect('content-type', /json/)
 
     });
});
