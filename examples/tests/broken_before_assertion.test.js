module.exports = {
    "before": browser => {
        // waitForElementVisible without delay is broken assertion
        browser.waitForElementVisible("body");
    },
    "first-test": browser => {
        browser.waitForElementVisible("body", 3000);
      browser.end();
    }
  };
  