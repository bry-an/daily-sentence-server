const request = require('supertest');
const app = require('../server');

describe('User Controller', () => {
  it('Creates a user', (done) => {
    const randomIntOne = Math.floor(Math.random() * 26);
    const randomIntTwo = Math.floor(Math.random() * 26);
    const randomLetters = String.fromCharCode(randomIntOne + 97)
        + String.fromCharCode(randomIntTwo + 97);
    request(app)
      .post('/user')
      .send({ username: `test_${randomLetters}@test.com` })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body._id).toBeTruthy();
        return done();
      });
  });
});
