const PlaywrightBrowser = require('./based.on.playwright');
const WDIOBrowser = require('./based.on.wdio');

const selectedBrowser = ((browserInstance) => {
  class Adapter {
    constructor(framework) {
      this.selectedBrowser = framework;
    }

    open(url) {
      this.selectedBrowser.goUrl(url);
    }
  }

  return new Adapter(browserInstance);
})(new WDIOBrowser());

module.exports = selectedBrowser;
