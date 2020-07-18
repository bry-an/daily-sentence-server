const request = require('supertest')
const app = require('../server')

describe('API', () => {
    it('responds base GET with 200', done => {
        const res = request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    })
})