const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const slots = require('../controllers/slotsController');
const server = require('../server');
const request = require('supertest');
const mongoose = require('mongoose');

//var app = request.agent(server.app);
//chai.should();
//chai.use(chaiHttp);


describe('GET /getSlots/:docId/:date', () => {

    it("should get all the slots for a doctor on a particular date", (done) => {
        const docId = "channa6190@gmail.com";
        const date = "2020-12-31";

        request(server)
            .get(`/api/patient/getSlots/${docId}/${date}`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

    it("should get all the slots for a doctor on a particular date", (done) => {
        const docId = "channa6190@gmail.com";
        const date = "2020-12-31";

        request(server)
            .put(`/api/patient/updateSlot/${docId}/${date}/8`)
            .expect(200, done)
            .expect('content-type', /json/)

    });

});



// it("should get all the slots for a doctor on a particular date", (done) => {
//     const docId = "channa6190@gmail.com";
//     const date = "2020-12-31";
//     chai.request(server)
//         .get(`/getSlots/${docId}/${date}`)
//         .end((err, response) => {
//             console.log(response.body);
//             response.should.have.status(200);
//             response.body.should.be.a('array');
//             done();
//         })
// })

// before((done) => {
//     const CONN_URI = 'mongodb://orchardmongo.eastus.cloudapp.azure.com:27017/Orchard1';
//     mongoose.connect(CONN_URI, {
//             auth: {
//                 user: "mongoUser1",
//                 password: "User1pwd"
//             },
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         },
//         (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Connected to db!');
//                 done();
//             }
//         }).then((res, err) => {
//         if (err) return reject(err);
//         resolve();
//     });
// })