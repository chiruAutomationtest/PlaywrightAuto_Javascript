
const { expect , test} = require("@playwright/test");

test('handle textbox and Radio Button',async ({page}) =>
{
   await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

   const fn = await page.locator("//input[@id='FirstName']");
   await expect(fn).toBeVisible();
   await expect(fn).toBeEmpty(); // true if text box is empty
   await expect(fn).toBeEditable(); // text is editable or not
   await expect(fn).toBeEnabled(); 

   await page.locator("//input[@id='FirstName']").fill('welcome');
   await page.waitForTimeout(5000);
  
   await page.locator("//span[@class='male']//input").check(); //select a radio button
   await expect(await page.locator("//span[@class='male']//input")).toBeChecked(); //true :verify radio button checked or not
   
   await expect(await page.locator("//span[@class='male']//input").isChecked()) // as per above radio is selected and ischecked() return true 
   .toBeTruthy(); //to very ischekced() returning true(truthy()) or false(falsy())
   
   
   //femal redio button

   await expect(await page.locator("//span[@class='female']//input").isChecked()) // here radio is not selected 
   .toBeFalsy(); //ischeked() is false(falsy() is true) -ve scenario


});