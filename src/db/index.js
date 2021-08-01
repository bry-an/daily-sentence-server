const mongoose = require('mongoose');

class Database {
  constructor() {
    this.server = '127.0.0.1:27017';
    this.database = 'dailySentence';
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${this.server}/${this.database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
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
