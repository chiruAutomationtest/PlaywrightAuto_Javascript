import {test,expect} from "D:/Playwrite_Automation/node_modules/@playwright/test";


test('message', async({page})=>{
   await page.goto("https://demoblaze.com/");
   await page.click("//a[@id='login2']");
   await page.fill("//input[@id='loginusername']",'user123name');
   await page.fill("//input[@id='loginpassword']",'user123');
   await page.click("//*[@onclick='logIn()']")
   
   const loc= await page.locator("//*[@id='logout2']");
   await expect(loc).toBeVisible();
   await page.click("//*[@id='logout2']");

   page.close();
});

