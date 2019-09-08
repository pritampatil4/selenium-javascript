const { Builder,By } = require('selenium-webdriver');
const {getElement} = require('../services/locatingStrategy');
const BASE_URL = "http://www.zalando.de";


const searchPageTests = () => {
    beforeAll( async () => {
        await DRIVER.get(BASE_URL);
    });

    it('Search shoes', async () => {
        await getElement('.z-navicat-header_searchInput').click();
        await getElement('.z-navicat-header_searchInput').sendKeys('Shoes');      
    });

}

module.exports = searchPageTests;