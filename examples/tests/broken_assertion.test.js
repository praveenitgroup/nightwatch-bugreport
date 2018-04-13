module.exports = {
    "first-test": browser => {
      // waitForElementVisible without delay is broken assertion
      browser.waitForElementVisible("body");
      browser.end();
    }
  };
  