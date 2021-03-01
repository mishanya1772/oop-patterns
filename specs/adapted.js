const adaptBrowser = require('../patterns/adapter/implementation');
const baseUrl = 'https://playwright.dev/';

describe('Adapter', () => {
  it('should open page based on different frameworks', function () {
    adaptBrowser.open(baseUrl);
  });
});
