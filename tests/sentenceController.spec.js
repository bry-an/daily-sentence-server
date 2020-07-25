const request = require('supertest')
const app = require('../server')

describe("Sentence Controller", () => {
    it('Creates a sentence when valid params passed', done => {
        request(app)
            .post('/add-sentence')
            .send({ date: "2002-12-09T00:00:00.000Z", sentence: 'hello world!' }) 
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body._id).toBeTruthy()
                done()
            })
        
    })
})