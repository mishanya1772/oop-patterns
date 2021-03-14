module.exports = () => {
  const instance = { browser: null };

  return {
    selectFramework(data) {
      instance.browser = data;
      return this;
    },
    getFramework(){
      return instance.browser
    }
  };
};
