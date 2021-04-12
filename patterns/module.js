const playwrightBrowser = new (require('./adapter/based.on.playwright'))();
const wdioBrowser = new (require('./adapter/based.on.wdio'))();

module.exports = () => {
  const instance = {
    wdio: wdioBrowser,
    playwright: playwrightBrowser
  };

  return {
    setFramework() {
      instance.selected = instance[`${process.env.conf.trim()}`];
      return this;
    },
    changeFramework(newFramework) {
      instance.selected = instance[newFramework];
      return this;
    },
    getFramework() {
      return instance.selected;
    }
  };
};
