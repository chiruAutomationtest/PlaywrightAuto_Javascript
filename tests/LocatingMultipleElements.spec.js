// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  // Locate all the poducts displayed on home page or list of matching elements
  await page.waitForSelector("//div[@id='tbodyid']//a[@class='hrefch']");

  const links = await page.$$("//div[@id='tbodyid']//a[@class='hrefch']"); // or page.locater('xpath')
  
  for(const link of links){
    const lnktext = await link.textContent();
    console.log(lnktext);
  }

  await page.close();
});