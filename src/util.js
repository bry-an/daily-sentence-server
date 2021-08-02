module.exports = {
  respondWithMalformedError: (res, msg = '') => res.setStatus(400).json({ message: `Malformed request ${msg}` }),
};
