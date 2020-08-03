const request = require('supertest');
const app = require('../server');

const notFoundError = (res) => {
  res.text.includes('Not found');
};
describe('API', () => {
  it('responds base GET with 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  it('gives informative not found error ', (done) => {
    request(app)
      .get('/invalid-url')
      .expect(404)
      .expect(notFoundError)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
