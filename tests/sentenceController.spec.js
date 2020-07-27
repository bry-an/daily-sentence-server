const request = require('supertest');
const app = require('../server');

let ephemeralSentenceId = 0;
// eventually use a seeder to deal with this
const exampleSentenceId = '5f1e52f02911dd61b8ca4314';

describe('Sentence Controller', () => {
  it('Creates a sentence', (done) => {
    request(app)
      .post('/sentence')
      .send({ date: '2002-12-09T00:00:00.000Z', sentence: 'hello world!' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        ephemeralSentenceId = res.body._id;
        expect(res.body._id).toBeTruthy();
        return done();
      });
  });
  it('Finds by sentence', (done) => {
    request(app)
      .post('/sentence/find')
      .send({ sentence: 'hello world!' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body._id).toBeTruthy();
        return done();
      });
  });
  it('Deletes a sentence', (done) => {
    request(app)
      .delete(`/sentence/${ephemeralSentenceId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body._id).toBeTruthy();
        return done();
      });
  });
  it('Finds a sentence', (done) => {
    request(app)
      .get(`/sentence/${exampleSentenceId}`)
      .query({ id: exampleSentenceId })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body._id).toEqual(exampleSentenceId);
        return done();
      });
  });
  it('Updates a sentence', (done) => {
    const randomInt = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(randomInt + 97);
    const sentence = `Automated Test: ${randomLetter}`;
    request(app)
      .put(`/sentence/${exampleSentenceId}`)
      .send({ sentence })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.sentence).toEqual(sentence);
        return done();
      });
  });
});
