
const { expect , test} = require("@playwright/test");

// soft assertion did not terminate the program if statment get fail

test('Soft Assertion',async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.cm/register?returnUrl=%2F"); //false stmt
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
    
    await expect.soft(page).toHaveTitle("nopCommerce Register"); //  wrong title
    await expect(page).toHaveTitle("nopCommerce demo store. Register"); // verify element has title
    
    await expect(page.locator("(//div[@class='inputs'])[1]")).toBeVisible(); // verify element is visible or present in DOM
    page.close();

});

test('Not Assertion',async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    
    await expect(page).not.toHaveURL("https://demo.nopcommerce.cm/register?returnUrl=%2F"); //false stmt
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
    
    await expect(page).not.toHaveTitle("nopCommerce Register"); //  wrong title
    await expect(page).toHaveTitle("nopCommerce demo store. Register"); // verify element has title
    
    await expect(page.locator("(//div[@class='inputs'])[1]")).toBeVisible(); // verify element is visible or present in DOM
    page.close();

});