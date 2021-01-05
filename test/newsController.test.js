const server = require('../server');
const request = require('supertest');

//test for post request api for adding new news
describe('POST /api/address/news', () => {

    //for succesfully response
    it("should add new news post to the database", (done) => {
        request(server)
            .post(`/api/address/news`)
            .send({title: "New Corona virus",description: "It is the latest version of covid"})
            .expect('content-type', /json/)
            .expect(201, done)
    });

    //for failure response
    it("should not add new news post to the database and through 400 response error", (done) => {
        request(server)
            .post(`/api/address/news`)
            .send({title: "New Corona virus"})
            .expect('content-type', /json/)
            .expect(400, done)
    });

});

//test for get request api for getting random news
describe('GET /api/address/news', () => {

    //for succesfully response
    it("should get news post from database", (done) => {
        request(server)
            .get(`/api/address/news`)
            .expect('content-type', /json/)
            .expect(Array)
            .expect(200, done)
    });

    //for failure response
    it("should through 404 error for wrong api address", (done) => {
        request(server)
            .get(`/api/address/new`)
            .expect('content-type', /text/)
            .expect(404, done)
    });

});