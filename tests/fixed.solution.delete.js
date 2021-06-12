module.exports = {
    'Deleting Recipes': function (browser)  {
        browser
        .url('https://codepen.io/SedatUygur/pen/jWgJdv')
        .assert.titleContains('Simple React CRUD Application')
        .waitForElementVisible('body',1000, false)
        .waitForElementVisible('#result_div > iframe',8000, false)
        .pause(5000)
        browser.element('css selector', '#result', function(result){
              const frame = result.value;
              browser.frame(frame, function(result){
                browser.waitForElementPresent('#show',8000,false)
                .click('#show')
                .assert.visible('#show')
                .assert.elementPresent('#show')
                .setValue('#title', 'Pizza')
                .pause(2000)
                .setValue('#ingredients', 'Flour, Onions, Tomatoes, Mushroom, Bell pepper')
                .pause(2000)
                .assert.visible('#addButton')
                .click('#addButton')
                .pause(2000)
                browser.waitForElementPresent('#container',4000, false)
                .assert.visible('#container')
                .assert.elementPresent('.panel-group')
                browser.waitForElementPresent('.panel-success',4000, false)
                .assert.elementPresent('.panel-heading')
                .assert.elementPresent('.panel-title')
                .pause(5000)
                .useXpath()     // every selector now must be XPath
                .click("//a[text()='Pizza']")   
                .pause(5000)
                .waitForElementPresent("//a[text()='Pizza']")   //pizza recipe is added
                .useCss()      // we're back to CSS now
                .waitForElementPresent('#btn-del3',8000, false)
                .assert.visible('#btn-del3')
                .click('#btn-del3')
                .pause(5000)
                .useXpath()
                .waitForElementNotPresent("//a[text()='Pizza']")  //asserts that the element pizza is deleted successfully 
            });
              
            }
          )
        
        .end();
    }
};