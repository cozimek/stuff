// test.js
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to Soapbox Engage
    await driver.get('https://demo.secure.nonprofitsoapbox.com');

    // Assert title
    let title = await driver.getTitle();
    assert.strictEqual(title, "Non-Profit Soapbox Demo");

    console.log("Test passed: Page title is correct");
  } finally {
    await driver.quit();
  }
}

exampleTest();
