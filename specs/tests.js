const assert = require('assert');
const RecordTabs = require('../recordTabs');
const Base = require('../components/basePage');

describe('Singleton pattern', () => {
  it('should switch tabs', () => {
    browser.url('https://playwright.dev/');
    browser.waitUntil(() => $(Base.locators.githubIcon).isDisplayed());
    $(Base.locators.githubIcon).click();
    new RecordTabs();

    browser.switchToWindow(new RecordTabs().new);
    assert.strictEqual(browser.getUrl(), 'https://github.com/microsoft/playwright');

    browser.switchToWindow(new RecordTabs().base);
    assert.strictEqual(browser.getUrl(), 'https://playwright.dev/');
  });
});
