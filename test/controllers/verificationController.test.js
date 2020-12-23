const expect = require('chai').expect;
//const chaiHttp = require('chai-http');
const server = require('../../server');
const request = require('supertest');
const mongoose = require('mongoose');

describe('Verification Controller', () => {

    it("should generate otp", (done) => {

        request(server)
            .post(`/api/auth/generateOTP`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

    it("should verify otp", (done) => {

        request(server)
            .get(`/api/auth/verify/1234/abc@gmail.com`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

});