const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for neti": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000)
      .assert.containsText('body', 'Riik ja Ühiskond')
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", 'Valitsus')
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .assert.containsText('body', 'Ametlikud Teadaanded (AT)')
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .end();
  },
};


// Open 
//   * https://www.neti.ee/
//   * test that page contains text "Riik ja Ühiskond"
//   * test that page contains link "Valitsus"
//   * take screenshot
//   * click link "Valitsus"
//   * wait until page page loads
//   * test that page contains text "Ametlikud Teadaanded (AT)"
//   * take screenshot
