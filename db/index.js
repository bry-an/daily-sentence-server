const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'dailySentence';

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Database connection successful');
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Database connection error');
      });
  }
}

module.exports = new Database();
