
const doctorController = require('../../controllers/DoctorController')
const slots = require('../../controllers/slotsController');
const server = require('../../server');
const request = require('supertest');


describe('GET /api/auth', () => {

    it("should send password to patient ", (done) => {
        const email = "channa6190@gmail.com";
        request(server)
            .get(`/api/auth/${email}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });
})
