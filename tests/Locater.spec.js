import {test , expect} from '@playwright/test'



//test ('message' , ()=>{} )

  test ('Locater action' , async ({page})=>{
  
   await page.goto('https://demoblaze.com/');

   //click on loginbutton
   //await page.locator("//a[@id='login2']").click()
   await page.click("//a[@id='login2']");

   //provide input text box - username 
   //page.locator("//input[@id='loginusername']").fill('username')
   await page.fill("//input[@id='loginusername']",'user123name');
   //page.type("//input[@id='loginusername']",'user123name')

   //provide password
   await page.fill("//input[@id='loginpassword']",'user123');

   await page.click("//*[@onclick='logIn()']")
   
   const loc= await page.locator("//*[@id='logout2']");
   await expect(loc).toBeVisible();
   await page.click("//*[@id='logout2']");
   
   await page.close();

  }); 
  

  