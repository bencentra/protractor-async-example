exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['lol-spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
