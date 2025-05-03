const {expect , test} = require('@playwright/test');

// open D:\Playwrite_Automation\playwright.config.js
//  screenshot:"on", record test execution screenshots always test pass or fail
//    video:"on"  :: record test execution video always test pass or fail
test('BeforeEach action', async({page}) =>{
    await page.goto('https://demoblaze.com/');
    // Locate all the poducts displayed on home page or list of matching elements
    await page.waitForSelector("//div[@id='tbodyid']//a[@class='hrefch']");
  
    const links = await page.$$("//div[@id='tbodyid']//a[@class='hrefch']"); // or page.locater('xpath')
    
    for(const link of links){
      const lnktext = await link.textContent();
      console.log(lnktext);
    }
  
    await page.close();
})