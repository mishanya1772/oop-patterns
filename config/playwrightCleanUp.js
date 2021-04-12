afterAll(async () => {
  const Browser = require('../patterns/singleton');

  const plPage = await new Browser().tab;
  const browser = await new Browser().browser;

  await plPage.close();
  return browser.close();
});
