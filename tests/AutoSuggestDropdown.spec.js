const { expect , test  } = require("@playwright/test")

test('Auto suggest Dropdown',async({page})=>{

    await page.goto('https://www.redbus.in/')
    await page.locator("//div[@class='sc-gzVnrw isMCq']").fill('delhi')
    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    
    const fromCityoption = await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

    for(let cityoption of fromCityoption){
        const value = await cityoption.textContent()
        console.log(value);
    }

    await page.waitForTimeout(3000)

});