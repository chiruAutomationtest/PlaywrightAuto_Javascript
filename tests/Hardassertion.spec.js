
// https://playwright.dev/docs/test-assertions
/*
expect(locater).toHaveURL()     // page has URl
expect(loacter).toHaveTitle()   //page has title
expect(locater).toBeVisible()   //Element is visible
expect(locater).toBeEnabled()   //control is enable
expect(locater).toBeDisabled()  //ele is disable
expect(locater).toBeChecked()   //radio/checkbox is checked
expect(locater).toHaveAttribute() //Element has Attribute
expect(locatoer).toHaveText()    //Element  matched text
expect(locater).toContainText()  //Element contains partial Text
expect(locater).toHaveValue(value) //input has value {check txt box with value}
expect(locater).toHaveCount()    //list of element has  given  lenght

*/
const { expect , test} = require("@playwright/test");

test('hard Assertion',async ({page}) =>
{
 await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

 await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
 await expect(page).toHaveTitle("nopCommerce demo store. Register"); // verify element has title
 await expect(page.locator("(//div[@class='inputs'])[1]")).toBeVisible(); // verify element is visible or present in DOM
 await expect(page.locator("(//div[@class='inputs'])[1]")).toBeEnabled(); // verify element like txt box can accept value
 //await expect(page.locator("(//div[@class='inputs'])[1]")).toBeDisabled(); // verify element like txt box not able to enter

 const maleradio = await page.locator("//span[@class='male']/input");
 await maleradio.click();
 await expect(maleradio).toBeChecked(); //verify radio is checked

 const registerbtn = await page.locator("//*[@id='register-button']");
 await expect(registerbtn).toHaveAttribute('type','submit'); //verify element as type attribute with value as submit

 await expect(registerbtn).toHaveText("Register"); // verify element with full lenght text
 
 await expect(registerbtn).toContainText("Reg") ; //verify element with partial or half  text

 const lastnameinput = await page.locator("//input[@id='LastName']");
 await lastnameinput.fill('puram');
 await expect(lastnameinput).toHaveValue('puram'); //verify text inside textbox

 //await page.waitForSelector("//select[@name='DateOfBirthDay']//option");
 const listofdates = await page.locator("//select[@name='DateOfBirthDay']/option");
 await expect(listofdates).toHaveCount(32);  //verify no of mathcing elements

 page.close();

});

