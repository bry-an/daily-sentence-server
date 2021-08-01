const request = require('supertest');
const app = require('../server');

// eventually use a seeder to deal with this
let ephemeralSentenceId = 0;
describe('Sentence Controller CRUD', () => {
  it('Creates a sentence', (done) => {
    request(app)
      .post('/sentence/create')
      .send({ date: '2002-12-09T00:00:00.000Z', text: 'hello world!', userId: '5f25fb93aa155f33be02a25a' })
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        ephemeralSentenceId = res.body.sentence._id;
        expect(res.body.sentence._id).toBeTruthy();
        return done();
      });
  });
  it('Gets by id', (done) => {
    request(app)
      .get(`/sentence/${ephemeralSentenceId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.sentence._id).toEqual(ephemeralSentenceId);
        return done();
      });
  });
  it('Updates a sentence', (done) => {
    const randomInt = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(randomInt + 97);
    const text = `Automated Test: ${randomLetter}`;
    request(app)
      .put(`/sentence/${ephemeralSentenceId}`)
      .send({ text })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.sentence).toEqual(text);
        return done();
      });
  });
  it('Deletes a sentence', (done) => {
    request(app)
      .delete(`/sentence/${ephemeralSentenceId}`)
      .expect(204)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
