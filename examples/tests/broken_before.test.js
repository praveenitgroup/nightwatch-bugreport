module.exports = {

    before: browser => {
        throw new Error('something bad happens in before statement');
    },
    after: browser => {
        browser.end();
    },
    
    'TED: components should work': browser => {
        browser
        .waitForElementPresent('body');
    
    }
    
    }