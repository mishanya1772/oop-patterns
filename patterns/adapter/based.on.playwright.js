const { chromium } = require('playwright');

class PlaywrightBrowser {
  async goUrl(url) {
    const plBrowser = await chromium.launch({ headless: false });
    const plPage = await plBrowser.newPage();

    await plPage.goto(url);
    expect(await plPage.title()).toBe("Fast and reliable end-to-end testing for modern web apps | Playwright");

    await plPage.close();
    await plBrowser.close();
  }
}

module.exports = PlaywrightBrowser;
