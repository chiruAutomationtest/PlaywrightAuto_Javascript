const {expect , test} = require('@playwright/test');

test.skip('Single File upload', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForSelector("//input[@id='singleFileInput']")
    //await page.locator("//input[@id='singleFileInput']").click()

    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/filesuploadData/Statuscodes.txt")

    await page.waitForTimeout(5000)

})

test('multiple File upload', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForSelector("//input[@id='multipleFilesInput']")
    //await page.locator("//input[@id='singleFileInput']").click()

    await page.locator("//input[@id='multipleFilesInput']")
         .setInputFiles(['tests/filesuploadData/Statuscodes.txt','tests\filesuploadData\text1.txt']);

    await page.waitForTimeout(5000)

})