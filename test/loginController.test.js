const server = require('../server');
const request = require('supertest');

//test for patch request api for login controller.
describe('PATCH /api/auth/:email', () => {

    //for succesfully response
    it("should update the password for the user", (done) => {
        const userEmail = "paraschowdhary098@gmail.com";
        request(server)
            .patch(`/api/auth/${userEmail}`)
            .send({password:"1234"})
            .expect('content-type', /json/)
            .expect(200, done)
    });

});

//test for post request api for login controller
describe('POST /api/auth/login/:type', () => {

    //for succesfully response
    it("should add the user login credentials to wecareusers collection", (done) => {
        const type = 'patient';
        request(server)
            .post(`/api/auth/login/${type}`)
            .send({email:"paraschowdhary098@gmail.com",password:"1234"})
            .expect('content-type', /json/)
            .expect(201, done)
    });

});

//test for post request api for login authentication
describe('POST /api/auth/login/:type', () => {

    //for succesfully response
    it("should verify the user credentials and allow to login", (done) => {
        const type = 'patient';
        request(server)
            .post(`/api/auth/login`)
            .send({email:"paraschowdhary098@gmail.com",password:"1234",userType:"patient"})
            .expect('content-type', /json/)
            .expect(200, done)
    });

    //for wrong credentails
    it("should verify the user credentials and allow to login", (done) => {
        const type = 'patient';
        //provided wrong password to get failed state
        request(server)
            .post(`/api/auth/login`)
            .send({email:"paraschowdhary098@gmail.com",password:"12345",userType:"patient"})
            .expect('content-type', /json/)
            .expect(401, done)
    });

});





