throw new Error('Something bad happend when test is initialized')

module.exports = {
    "first-test": browser => {
      browser.waitForElementVisible("body", 3000);
      browser.end();
    },
  
    "second-test": (browser, done) => {
      browser.waitForElementVisible(".content", 3000);
      browser.end();
    }
  };
  