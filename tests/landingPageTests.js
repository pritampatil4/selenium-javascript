const { Builder } = require('selenium-webdriver');

const landingPageTests = () => {
    it('First test', async () => {
        console.log('Hello World');
    });

    it('Second test', async () => {
        await DRIVER.get('http://www.google.com');
    });
};
module.exports = landingPageTests;
