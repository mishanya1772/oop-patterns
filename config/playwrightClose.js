afterAll(async () => {
  const instance = new (require('../patterns/singleton'))();

  const plPage = await instance.tab;
  const browser = await instance.browser;

  await plPage.close();
  return browser.close();
});
