const request = require('supertest')
const app = require('../server')

describe('API', () => {
    it('responds base GET with 200', done => {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    })
    it('gives informative not found error ', done => {
        request(app)
            .get('/invalid-url')
            .expect(404)
            .expect(notFoundError)
        done()
    })
})

const notFoundError = res => {
    res.text.includes('Not found')
}