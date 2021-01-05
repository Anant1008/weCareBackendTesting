const request = require("supertest");
const app = require("../server");

describe('Tests for State City Controller', ()=>
{
    describe('GET /api/address/states', ()=>
    {
        it ('should give all the states', (done)=>
        {
            request(app)
            .get('/api/address/states')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done)
        })
    })

    describe('GET /api/address/cities/:state', ()=>
    {
        it ('should give all the cities for the corresponding state', (done)=>
        {
            request(app)
            .get('/api/address/cities/Kolkata')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done)
        })
    })
})
