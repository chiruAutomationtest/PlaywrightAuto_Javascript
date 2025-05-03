const { expect , test  } = require("@playwright/test")

let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();

    await page.goto("https://demoblaze.com/")

    await page.locator("//a[@id='login2']").click()
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123")
    await page.locator("//button[@onclick='logIn()']").click()
})

test.afterEach(async()=>{
    await page.locator("//a[@onclick='logOut()']").click();
})

test('Home page test',async()=>{
    await page.locator("(//a[@class='nav-link'])[1]").click() //home
})

test('BeforeEach action', async() =>{

    await page.locator("(//a[@class='nav-link'])[3]").click() //about
    await page.locator("(//button[@data-dismiss='modal'])[8]").click() //close btn
});