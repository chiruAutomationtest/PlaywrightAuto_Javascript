const { expect , test  } = require("@playwright/test")
// traceviewer is tracing every step in dept after execution
// check api calls, before/ after , picker , network logs, screenshots by using debug is easyly happen

// cmds: used are below >
// 
// npx playwright show-trace D:\Playwrite_Automation\test-results\Trace-BeforeEach-action-chromium\trace.zip 
   

   test('Trace viewer', async({page}) =>{
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