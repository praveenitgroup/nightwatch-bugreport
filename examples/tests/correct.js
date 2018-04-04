    module.exports = {
    "passing-test": client => {
        client.url('https://google.com')
        .waitForElementPresent('body', 1000)
    }
}