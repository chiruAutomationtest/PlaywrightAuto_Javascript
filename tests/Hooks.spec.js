const { expect , test  } = require("@playwright/test")



test('BeforeEach action', async({page}) =>{
    await page.goto("https://demoblaze.com/")

    await page.locator("//a[@id='login2']").click()
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123")
    await page.locator("//button[@onclick='logIn()']").click()

    await page.locator("(//a[@class='nav-link'])[1]").click() //home

    await page.locator("(//a[@class='nav-link'])[3]").click()//about
    await page.locator("(//button[@data-dismiss='modal'])[8]").click()//close btn

    await page.locator("//a[@onclick='logOut()']").click();

});