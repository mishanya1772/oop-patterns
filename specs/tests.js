const assert = require('assert');
const RecordTabs = require('../patterns/singleton');
const Base = require('../components/basePage');
const baseUrl = 'https://playwright.dev/';

describe('Singleton pattern', () => {
  it('should switch tabs', () => {
    browser.url(baseUrl);
    browser.waitUntil(() => $(Base.locators.githubIcon).isDisplayed());
    $(Base.locators.githubIcon).click();
    new RecordTabs();

    browser.switchToWindow(new RecordTabs().new);
    assert.strictEqual(browser.getUrl(), 'https://github.com/microsoft/playwright');

    browser.switchToWindow(new RecordTabs().base);
    assert.strictEqual(browser.getUrl(), baseUrl);
  });
});
