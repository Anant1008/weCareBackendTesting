const expect = require('chai').expect;
//const chaiHttp = require('chai-http');
const server = require('../server');
const request = require('supertest');
const mongoose = require('mongoose');

describe('PatientById Controller', () => {

    it("should register patient", (done) => {

        request(server)
            .post(`/api/patient/register/`)
            .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
            .expect(200, done)
            .expect('content-type', /json/)

    });

    it("should not register patient", (done) => {

        request(server)
            .post(`/api/patient/register/`)
            .expect(401, done)
            .expect('content-type', /json/)

    });

});