const { chromium } = require('playwright');

class KeepSession {
  constructor() {
    if (KeepSession._instance) {
      return KeepSession._instance;
    }
    this.session = chromium.launch({ headless: false });

    KeepSession._instance = this;
  }
}

module.exports = KeepSession;
