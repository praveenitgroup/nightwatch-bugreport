const giveme = require('missing-module');

module.exports = {
    "broken-test": client => {
        client.url('https://google.com')
        .waitForElementPresent('body', 1000)
    }
}