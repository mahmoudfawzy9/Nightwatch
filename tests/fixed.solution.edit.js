module.exports = {
    'Editing Recipes': function (browser)  {
        browser
        .url('https://codepen.io/SedatUygur/pen/jWgJdv')
        .assert.titleContains('Simple React CRUD Application')
        .waitForElementVisible('body', 1000,false)
        .waitForElementVisible('#result_div > iframe', 5000,false)
        .pause(5000)
        browser.element('css selector', '#result', function(result){
              const frame = result.value;
              browser.frame(frame, function(result){
                browser.waitForElementPresent('#container', 5000,false)
                .assert.visible('#container')
                .assert.elementPresent('.panel-group')
                browser.waitForElementPresent('.panel-success',5000,false)
                .assert.elementPresent('.panel-heading')
                .assert.elementPresent('.panel-title')
                .pause(5000)
                .useXpath()     // every selector now must be XPath
                .click("//a[text()='Pumpkin Pie']")
                .pause(5000)
                .useCss()      // we're back to CSS now
                browser.waitForElementPresent('#btn-edit0', 5000, false)
                .assert.visible('#btn-edit0')
                .click('#btn-edit0')
                .pause(5000)
                browser.waitForElementPresent('#title', 5000, false)
                .assert.visible('#title')
                .clearValue('#title') 
                .pause(1500)
                .setValue('#title', 'Pizza')
                .pause(5000)
                browser.waitForElementPresent('#ingredients', 5000, false)
                .assert.visible('#ingredients')
                .clearValue('#ingredients')
                .pause(1500)
                .setValue('#ingredients', 'Flour, Onions, Tomatoes, Mushroom, Bell pepper')
                .pause(5000)
                .assert.visible('#addButton')
                .click('#addButton')
                .pause(5000)
                .useXpath()     // every selector now must be XPath
                .click("//a[text()='Pizza']")
                .assert.visible("//a[text()='Pizza']")    //asserts that a recipe is edited to pizza
            });
              
            }
          )
        
        .end();
      }
};