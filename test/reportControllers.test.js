const request = require("supertest");
const app = require("../server");

describe('Tests for reports Controller', ()=>
{
    describe('GET /api/reports', () =>
    {
        it ('should get all the reports', (done) =>
        {
            request(app)
            .get('/api/reports')
            .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
            .expect("Content-Type", /json/)
            .expect(200, done)
        })

        it ('should not get the reports', (done) =>
        {
            request(app)
            .get('/api/reports')
            .expect("Content-Type", /json/)
            .expect(401, done)
        })
    })

    describe('GET /api/reports/getReports/:email', () =>
    {
        it ('should get all the reports for a particular patient', (done) =>
        {
            request(app)
            .get('/api/reports/getReports/san@gmail.com')
            .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
            .expect("Content-Type", /json/)
            .expect(200, done)
        })

        it ('should not get the reports for a particular patient', (done) =>
        {
            request(app)
            .get('/api/reports/getReports/san@gmail.com')
            .expect("Content-Type", /json/)
            .expect(401, done)
        })
    })

    describe('DELETE /api/reports/deleteReport/:email/:report', () =>
    {
        it ('should delete the report passed as a parameter for a particular patient', (done) =>
        {
            request(app)
            .delete('/api/reports/deleteReport/san@gmail.com/file1.jpg')
            .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
            .expect("Content-Type", /json/)
            .expect(200, done)
        })

        it ('should not delete the report passed as a parameter for a particular patient', (done) =>
        {
            request(app)
            .delete('/api/reports/deleteReport/san@gmail.com/file1.jpg')
            .expect("Content-Type", /json/)
            .expect(401, done)
        })
    })

    describe('POST /api/reports/downloadReport', () =>
    {
        filename = 'reports.jpg';
        it('downloads the report', function(done) {
            request(app)
              .post('/api/reports/downloadReport')
              .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
              .send(filename)
              .expect('Content-Type', 'text/html; charset=utf-8')
              .expect(201)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });

          it('should not download the report', function(done) {
            request(app)
              .post('/api/reports/downloadReport')
              .send(filename)
              .expect('Content-Type', 'application/json; charset=utf-8')
              .expect(401)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
    })

    describe('POST /api/reports//upload-report/:email', () =>
    {
        filename = 'reports.jpg';
        it('uploads the reports', function(done) {
            request(app)
              .post('/api/reports//upload-report/san@gmail.com')
              .set({ 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ4N2I4Yjg4ZWI1MzAwMTcyZGJhMjEiLCJlbWFpbCI6ImFuYW50czEwMDhAZ21haWwuY29tIiwidXNlclR5cGUiOiJwYXRpZW50IiwiaWF0IjoxNjA4NzE0MjMxfQ.oEZJF4LzlQVAN-hRuf_kfnP1u4q9HpHX7ZaA3w83-nc' })
              .send(filename)
              .expect('Content-Type', /json/)
              .expect(201)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });

          it('does not upload the reports', function(done) {
            request(app)
              .post('/api/reports//upload-report/san@gmail.com')
              .send(filename)
              .expect('Content-Type', /json/)
              .expect(401)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
    })
})