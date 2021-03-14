const { chromium } = require('playwright');

class KeepSession {
  constructor() {
    if (KeepSession._instance) {
      return KeepSession._instance;
    }

    this.browser = chromium.launch({
      args: ['--start-maximized'],
      headless: false
    });
    this.tab = this.browser.then(e => e.newPage());

    KeepSession._instance = this;
  }
}

module.exports = KeepSession;
