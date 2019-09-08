const landingPageTests = require("../tests/landingPageTests");
const searchPageTests = require("../tests/searchPageTests");
const LoadDriver = require("../services/loadDriver");


describe("Test Suite", () => {
  beforeAll(async () => {
    global.DRIVER = LoadDriver();
    global.TIME = 5000;
  });

  afterAll(async () => {
    await DRIVER.quit();
  });

  describe("Landing Page test", landingPageTests);
  describe("Search Page test", searchPageTests);
});
