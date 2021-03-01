class WDIOBrowser {
  goUrl(url) {
    browser.url(url);
    expect(browser.getTitle()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
  }
}

module.exports = WDIOBrowser;
