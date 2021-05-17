module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  // TODO: update return value fir redux / context implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve("party")),
};
