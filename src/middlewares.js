function notFound(req, res, next) {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

function logger(req, res, next) {
  // console.log("LOGGER: response body", res)
  next();
}

function stripDataWrapper(req, res, next) {
  if (req.body.data && req.body.data.axios) {
    req.body = req.body.data;
  }
  next();
}

module.exports = { notFound, logger, stripDataWrapper };
