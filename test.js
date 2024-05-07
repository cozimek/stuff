const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

async function exampleTest() {
  // Set up Chrome options for headless execution
  let chromeOptions = new chrome.Options();
  chromeOptions.addArguments('--headless');             // Runs Chrome in headless mode.
  chromeOptions.addArguments('--no-sandbox');           // Disables the sandbox for all software renderer processes.
  chromeOptions.addArguments('--disable-dev-shm-usage');// Resolves limited resource problems.
  chromeOptions.addArguments('--disable-gpu');          // Disables GPU hardware acceleration.

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // Navigate to Soapbox Engage
    await driver.get('https://testingautomation.secure.stagenonprofitsoapbox.com/robots.txt');

    // Assert title
    let title = await driver.getTitle();
    assert.strictEqual(title, "Login - SBX Testing Automation: Basic");

    console.log("Test passed: Page title is correct");
  } finally {
    await driver.quit();
  }
}

exampleTest();
