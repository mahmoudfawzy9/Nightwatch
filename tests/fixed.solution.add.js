module.exports = {
    'Adding Recipes': function (browser)  {
        browser
        .url('https://codepen.io/SedatUygur/pen/jWgJdv')
        .assert.titleContains('Simple React CRUD Application')
        .waitForElementVisible('body', 1000,false)
        .waitForElementVisible('#result_div > iframe', 15000,false)
        .pause(5000)
        browser.element('css selector', '#result', function(result){
              const frame = result.value;
              browser.frame(frame, function(result){
                browser.waitForElementPresent('#show', 15000,false)
                 .click('#show')
                .assert.visible('#show')
                .assert.elementPresent('#show')
                .setValue('#title', 'Pizza')
                .pause(5000)
                .setValue('#ingredients', 'Flour, Onions, Tomatoes, Mushroom, Bell pepper')
                .pause(5000)
                .assert.visible('#addButton')
                .click('#addButton')
                .pause(5000)
                .useXpath()     // every selector now must be XPath
                .assert.visible("//a[text()='Pizza']")
            });
          }
        )
        .end();
      }
};