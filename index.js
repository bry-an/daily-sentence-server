const app = require('./server');

const PORT = process.env.port || 5001;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
